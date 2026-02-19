import { useState, useMemo } from "react";
import {
  ChevronLeft, ChevronRight, Calendar as CalendarIcon, List, MapPin,
  Clock, Filter, X, ExternalLink, Download, Image as ImageIcon
} from "lucide-react";
import {
  events, categoryEventColors, getUpcomingEvents, getPastEvents,
  type CalendarEvent
} from "../data/events";
import { photos } from "../data/photos";

const eventCategories = ['all', 'games', 'practices', 'fundraisers', 'volunteer', 'community'];
const categoryLabels: Record<string, string> = {
  all: 'All Events',
  games: 'Games',
  practices: 'Practices',
  fundraisers: 'Fundraisers',
  volunteer: 'Volunteer Days',
  community: 'Community Events',
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatDateISO(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function generateGoogleCalendarUrl(event: CalendarEvent) {
  const date = event.date.replace(/-/g, '');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${date}/${date}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
}

function generateICSContent(event: CalendarEvent) {
  const date = event.date.replace(/-/g, '');
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${date}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
}

function downloadICS(event: CalendarEvent) {
  const content = generateICSContent(event);
  const blob = new Blob([content], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.replace(/\s+/g, '_')}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

export function Events() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 16));
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'all') return events;
    return events.filter(e => e.category === activeCategory);
  }, [activeCategory]);

  const upcomingFiltered = useMemo(() => {
    const upcoming = getUpcomingEvents();
    if (activeCategory === 'all') return upcoming;
    return upcoming.filter(e => e.category === activeCategory);
  }, [activeCategory]);

  const pastFiltered = useMemo(() => {
    const past = getPastEvents();
    if (activeCategory === 'all') return past;
    return past.filter(e => e.category === activeCategory);
  }, [activeCategory]);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [daysInMonth, firstDay]);

  const getEventsForDay = (day: number) => {
    const dateStr = formatDateISO(year, month, day);
    return filteredEvents.filter(e => e.date === dateStr);
  };

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <img
          src={photos[73].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2) contrast(1.1) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Events & Calendar</span>
          <h1 className="text-4xl sm:text-5xl text-white mt-4 mb-4" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Stay Connected
          </h1>
          <p className="text-soft-gray text-lg max-w-xl mx-auto">
            Games, practices, fundraisers, and community events — all in one place.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Controls */}
        <div className="sticky top-16 z-30 bg-charcoal/95 backdrop-blur-md pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-border mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((cat) => {
                const colors = cat !== 'all' ? categoryEventColors[cat] : null;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all ${
                      activeCategory === cat
                        ? 'bg-royal text-white'
                        : 'bg-secondary text-soft-gray hover:text-white'
                    }`}
                    style={{ fontWeight: 500 }}
                  >
                    {colors && <div className={`w-2 h-2 rounded-full ${colors.dot}`} />}
                    {categoryLabels[cat]}
                  </button>
                );
              })}
            </div>

            {/* View toggle */}
            <div className="flex bg-secondary rounded-lg p-1">
              <button
                onClick={() => setView('calendar')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                  view === 'calendar' ? 'bg-royal text-white' : 'text-soft-gray'
                }`}
                style={{ fontWeight: 500 }}
              >
                <CalendarIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Calendar</span>
              </button>
              <button
                onClick={() => setView('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                  view === 'list' ? 'bg-royal text-white' : 'text-soft-gray'
                }`}
                style={{ fontWeight: 500 }}
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Calendar View */}
        {view === 'calendar' && (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {/* Month Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <button onClick={prevMonth} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-white hover:bg-secondary/80 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="text-xl sm:text-2xl text-white" style={{ fontWeight: 700 }}>
                {monthNames[month]} {year}
              </h3>
              <button onClick={nextMonth} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-white hover:bg-secondary/80 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-border">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 sm:p-3 text-center text-xs text-steel" style={{ fontWeight: 600 }}>
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {calendarDays.map((day, i) => {
                const dayEvents = day ? getEventsForDay(day) : [];
                const isToday = day === 17 && month === 1 && year === 2026;
                return (
                  <div
                    key={i}
                    className={`min-h-[80px] sm:min-h-[100px] p-1 sm:p-2 border-b border-r border-border/50 ${
                      day ? 'hover:bg-white/[0.02]' : 'bg-secondary/20'
                    }`}
                  >
                    {day && (
                      <>
                        <div className={`text-xs sm:text-sm mb-1 ${
                          isToday ? 'w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-royal text-white flex items-center justify-center' : 'text-soft-gray'
                        }`} style={{ fontWeight: isToday ? 700 : 400 }}>
                          {day}
                        </div>
                        <div className="space-y-0.5">
                          {dayEvents.slice(0, 3).map((evt) => {
                            const colors = categoryEventColors[evt.category];
                            return (
                              <button
                                key={evt.id}
                                onClick={() => setSelectedEvent(evt)}
                                className={`w-full text-left px-1.5 py-0.5 rounded text-xs truncate ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity`}
                                style={{ fontWeight: 500 }}
                              >
                                <span className="hidden sm:inline">{evt.title}</span>
                                <span className="sm:hidden">{evt.category === 'practices' ? 'P' : evt.category === 'games' ? 'G' : evt.title.charAt(0)}</span>
                              </button>
                            );
                          })}
                          {dayEvents.length > 3 && (
                            <span className="text-xs text-soft-gray">+{dayEvents.length - 3} more</span>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* List View */}
        {view === 'list' && (
          <div className="space-y-4">
            <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>Upcoming Events</h3>
            {upcomingFiltered.length === 0 ? (
              <p className="text-soft-gray text-sm py-8 text-center">No upcoming events in this category.</p>
            ) : (
              upcomingFiltered.map((evt) => {
                const colors = categoryEventColors[evt.category];
                return (
                  <div
                    key={evt.id}
                    className="bg-card border border-border rounded-xl p-4 sm:p-5 hover:border-royal/20 transition-colors cursor-pointer"
                    onClick={() => setSelectedEvent(evt)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      {/* Date block */}
                      <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-0 sm:w-16 shrink-0">
                        <div className="text-royal text-xs" style={{ fontWeight: 600 }}>
                          {new Date(evt.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="text-2xl sm:text-3xl text-white" style={{ fontWeight: 800 }}>
                          {new Date(evt.date + 'T12:00:00').getDate()}
                        </div>
                        <div className="text-soft-gray text-xs">
                          {new Date(evt.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                      </div>
                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs ${colors.bg} ${colors.text}`} style={{ fontWeight: 500 }}>
                            {categoryLabels[evt.category]}
                          </span>
                        </div>
                        <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>{evt.title}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-soft-gray text-xs">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{evt.startTime} – {evt.endTime}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{evt.location}</span>
                        </div>
                      </div>
                      {/* CTA */}
                      <div className="flex gap-2 shrink-0">
                        {evt.rsvpLink && (
                          <span className="px-3 py-1.5 rounded-lg bg-royal text-white text-xs" style={{ fontWeight: 600 }}>RSVP</span>
                        )}
                        {evt.volunteerLink && (
                          <span className="px-3 py-1.5 rounded-lg bg-gold text-charcoal text-xs" style={{ fontWeight: 600 }}>Volunteer</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Past Events Toggle */}
        <div className="mt-12">
          <button
            onClick={() => setShowPastEvents(!showPastEvents)}
            className="flex items-center gap-2 text-royal hover:text-royal/80 transition-colors mb-6"
            style={{ fontWeight: 600 }}
          >
            <Filter className="w-4 h-4" />
            {showPastEvents ? 'Hide' : 'Show'} Past Events & Recaps
          </button>

          {showPastEvents && (
            <div className="space-y-6">
              <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>Past Events</h3>
              {pastFiltered.map((evt) => {
                const colors = categoryEventColors[evt.category];
                return (
                  <div key={evt.id} className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs ${colors.bg} ${colors.text}`} style={{ fontWeight: 500 }}>
                              {categoryLabels[evt.category]}
                            </span>
                            <span className="text-soft-gray text-xs">
                              {new Date(evt.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                          <h4 className="text-lg text-white" style={{ fontWeight: 700 }}>{evt.title}</h4>
                        </div>
                        <div className="flex items-center gap-1 text-soft-gray text-xs">
                          <MapPin className="w-3 h-3" />
                          {evt.location}
                        </div>
                      </div>
                      {evt.recap && (
                        <p className="text-soft-gray text-sm mb-4" style={{ lineHeight: '1.6' }}>{evt.recap}</p>
                      )}
                      {evt.photos && evt.photos.length > 0 && (
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {evt.photos.map((photo, i) => (
                            <img
                              key={i}
                              src={photo}
                              alt={`${evt.title} photo ${i + 1}`}
                              className="w-36 sm:w-48 h-24 sm:h-32 object-cover rounded-lg shrink-0"
                              style={{ filter: 'contrast(1.05) saturate(0.85)' }}
                              loading="lazy"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[90] bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
          <div
            className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs ${categoryEventColors[selectedEvent.category].bg} ${categoryEventColors[selectedEvent.category].text}`} style={{ fontWeight: 500 }}>
                      {categoryLabels[selectedEvent.category]}
                    </span>
                    {selectedEvent.isPast && <span className="px-2 py-0.5 rounded-full text-xs bg-secondary text-soft-gray">Past Event</span>}
                  </div>
                  <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>{selectedEvent.title}</h3>
                </div>
                <button onClick={() => setSelectedEvent(null)} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-soft-gray hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-white text-sm">
                  <CalendarIcon className="w-4 h-4 text-royal" />
                  {new Date(selectedEvent.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <Clock className="w-4 h-4 text-royal" />
                  {selectedEvent.startTime} – {selectedEvent.endTime}
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <MapPin className="w-4 h-4 text-royal" />
                  {selectedEvent.location}
                </div>
              </div>

              <p className="text-soft-gray text-sm mb-6" style={{ lineHeight: '1.6' }}>{selectedEvent.description}</p>

              {selectedEvent.recap && (
                <div className="bg-royal/10 border border-royal/20 rounded-lg p-4 mb-5">
                  <p className="text-royal text-xs mb-1" style={{ fontWeight: 600 }}>Recap</p>
                  <p className="text-white text-sm">{selectedEvent.recap}</p>
                </div>
              )}

              {selectedEvent.photos && selectedEvent.photos.length > 0 && (
                <div className="mb-5">
                  <div className="flex items-center gap-1 text-soft-gray text-xs mb-2">
                    <ImageIcon className="w-3 h-3" />
                    Photos
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedEvent.photos.map((photo, i) => (
                      <img key={i} src={photo} alt="" className="w-full h-20 object-cover rounded-lg" loading="lazy" style={{ filter: 'contrast(1.05) saturate(0.85)' }} />
                    ))}
                  </div>
                </div>
              )}

              {!selectedEvent.isPast && (
                <div className="space-y-2">
                  <p className="text-soft-gray text-xs mb-1" style={{ fontWeight: 600 }}>Add to Calendar</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={generateGoogleCalendarUrl(selectedEvent)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-white text-xs hover:bg-secondary/80 transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Google Calendar
                    </a>
                    <button
                      onClick={() => downloadICS(selectedEvent)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-white text-xs hover:bg-secondary/80 transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      <Download className="w-3 h-3" />
                      Apple / Outlook (ICS)
                    </button>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {selectedEvent.rsvpLink && (
                      <a href={selectedEvent.rsvpLink} className="flex-1 py-2.5 rounded-lg bg-royal text-white text-center text-sm hover:bg-royal/90 transition-colors" style={{ fontWeight: 600 }}>RSVP</a>
                    )}
                    {selectedEvent.volunteerLink && (
                      <a href={selectedEvent.volunteerLink} className="flex-1 py-2.5 rounded-lg bg-gold text-charcoal text-center text-sm hover:bg-gold/90 transition-colors" style={{ fontWeight: 600 }}>Volunteer</a>
                    )}
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(selectedEvent.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-lg border border-border text-white text-sm hover:bg-white/5 transition-colors flex items-center gap-1.5"
                      style={{ fontWeight: 500 }}
                    >
                      <MapPin className="w-4 h-4" />
                      Directions
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
