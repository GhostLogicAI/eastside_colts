import { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft, User, Phone, AlertCircle, CreditCard, GraduationCap } from "lucide-react";

const steps = [
  { id: 1, label: "Player Info", icon: User },
  { id: 2, label: "Parent/Guardian", icon: Phone },
  { id: 3, label: "Emergency", icon: AlertCircle },
  { id: 4, label: "Medical & Waiver", icon: AlertCircle },
  { id: 5, label: "Payment", icon: CreditCard },
];

export function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const next = () => setCurrentStep((s) => Math.min(s + 1, 5));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 1));

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-charcoal flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-royal/20 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-royal" />
          </div>
          <h2 className="text-2xl sm:text-3xl text-white mb-4" style={{ fontWeight: 700 }}>Registration Submitted!</h2>
          <p className="text-soft-gray mb-6" style={{ lineHeight: '1.6' }}>
            Thank you for registering with the Eastside Colts! We'll review your application and contact you within 48 hours. Check your email for a confirmation.
          </p>
          <p className="text-royal text-sm" style={{ fontWeight: 500 }}>Confirmation #ESC-2026-0847</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-navy py-10 sm:py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>2026 Season</span>
          <h1 className="text-3xl sm:text-4xl text-white mt-3 mb-3" style={{ fontWeight: 800 }}>Player Registration</h1>
          <p className="text-soft-gray">Complete all steps below to register your player for the upcoming season.</p>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20">
            <GraduationCap className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs" style={{ fontWeight: 500 }}>Financial assistance & scholarships available</span>
          </div>
        </div>
      </section>

      {/* Step indicator */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm transition-colors ${
                    currentStep >= step.id
                      ? 'bg-royal text-white'
                      : 'bg-secondary text-soft-gray'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span className={`hidden sm:block text-xs mt-1.5 ${currentStep >= step.id ? 'text-royal' : 'text-soft-gray'}`} style={{ fontWeight: 500 }}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${currentStep > step.id ? 'bg-royal' : 'bg-secondary'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl text-white mb-6" style={{ fontWeight: 700 }}>Player Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">First Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Enter first name" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Last Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Enter last name" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Date of Birth *</label>
                  <input type="date" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Age Division</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none">
                    <option value="">Select division</option>
                    <option>Junior (7-9)</option>
                    <option>Intermediate (10-12)</option>
                    <option>Senior (13-14)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">School</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Current school" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Current GPA</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="e.g. 3.2" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">T-Shirt Size</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none">
                    <option value="">Select size</option>
                    <option>Youth S</option>
                    <option>Youth M</option>
                    <option>Youth L</option>
                    <option>Youth XL</option>
                    <option>Adult S</option>
                    <option>Adult M</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Previous Football Experience</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none">
                    <option value="">Select</option>
                    <option>None - First time player</option>
                    <option>1-2 seasons</option>
                    <option>3+ seasons</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-xl text-white mb-6" style={{ fontWeight: 700 }}>Parent / Guardian Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">Parent/Guardian First Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Last Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Last name" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Relationship to Player *</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none">
                    <option value="">Select</option>
                    <option>Mother</option>
                    <option>Father</option>
                    <option>Legal Guardian</option>
                    <option>Grandparent</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Phone Number *</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="(313) 555-0000" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-white mb-1.5">Email Address *</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="parent@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-white mb-1.5">Home Address *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Street address" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">City</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" defaultValue="Detroit" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">ZIP Code</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="48209" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-xl text-white mb-6" style={{ fontWeight: 700 }}>Emergency Contact</h3>
              <p className="text-soft-gray text-sm mb-6">Please provide an emergency contact who is NOT the primary parent/guardian listed above.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">Emergency Contact Name *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Relationship *</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="e.g. Aunt, Uncle, Neighbor" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Phone Number *</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="(313) 555-0000" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Alternate Phone</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Optional" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-xl text-white mb-6" style={{ fontWeight: 700 }}>Medical Information & Waivers</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">Known Allergies</label>
                  <textarea className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none resize-none" rows={2} placeholder="List any allergies (food, medicine, environmental)" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Current Medications</label>
                  <textarea className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none resize-none" rows={2} placeholder="List any current medications" />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Medical Conditions or Special Needs</label>
                  <textarea className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none resize-none" rows={2} placeholder="Asthma, diabetes, past injuries, etc." />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Insurance Provider</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none" placeholder="Insurance company name" />
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <h4 className="text-white" style={{ fontWeight: 600 }}>Acknowledgements</h4>
                  {[
                    "I acknowledge that football involves inherent risks of injury",
                    "I authorize emergency medical treatment if needed",
                    "I have provided accurate medical information",
                    "I agree to the Eastside Colts Code of Conduct",
                    "I consent to the use of photos/videos for program promotion",
                  ].map((text, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-4 h-4 rounded border-border bg-input-background accent-[#1E5BFF]" />
                      <span className="text-soft-gray text-sm" style={{ fontWeight: 400 }}>{text}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h3 className="text-xl text-white mb-6" style={{ fontWeight: 700 }}>Payment & Financial Assistance</h3>
              <div className="bg-royal/10 border border-royal/20 rounded-lg p-4 mb-6">
                <p className="text-royal text-sm" style={{ fontWeight: 500 }}>
                  Registration fee: <span style={{ fontWeight: 700 }}>$150/season</span> — includes equipment, uniforms, and insurance. No child will be turned away due to inability to pay.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white mb-3" style={{ fontWeight: 600 }}>Payment Option</label>
                  <div className="space-y-2">
                    {[
                      { label: "Pay in full ($150)", value: "full" },
                      { label: "Two payments ($75 x 2)", value: "split" },
                      { label: "Request scholarship / financial assistance", value: "scholarship" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-input-background border border-border cursor-pointer hover:border-royal/30 transition-colors">
                        <input type="radio" name="payment" value={option.value} className="accent-[#1E5BFF]" />
                        <span className="text-white text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-gold/10 border border-gold/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gold text-sm" style={{ fontWeight: 600 }}>Scholarship Information</p>
                      <p className="text-soft-gray text-xs mt-1" style={{ lineHeight: '1.5' }}>
                        If you select the scholarship option, you'll be contacted by our program coordinator to discuss financial assistance. We never want cost to be a barrier to participation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {currentStep > 1 ? (
              <button
                onClick={prev}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-soft-gray text-sm hover:text-white hover:border-royal/30 transition-colors"
                style={{ fontWeight: 500 }}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <button
                onClick={next}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-royal text-white text-sm hover:bg-royal/90 transition-colors"
                style={{ fontWeight: 600 }}
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-royal text-white text-sm hover:bg-royal/90 transition-colors"
                style={{ fontWeight: 700 }}
              >
                Submit Registration
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
