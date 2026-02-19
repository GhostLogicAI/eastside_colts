import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  User,
  Users,
  Phone,
  HeartPulse,
  ShieldCheck,
  FileText,
  ClipboardList,
} from "lucide-react";

const steps = [
  { id: 1, label: "Student Info", icon: User },
  { id: 2, label: "Parent / Guardian", icon: Users },
  { id: 3, label: "Emergency Contacts", icon: Phone },
  { id: 4, label: "Medical", icon: HeartPulse },
  { id: 5, label: "Acknowledgments", icon: ShieldCheck },
];

const inputClass =
  "w-full px-4 py-2.5 rounded-lg bg-input-background border border-border text-white text-sm focus:border-royal focus:ring-1 focus:ring-royal outline-none";

const selectClass = inputClass;

const labelClass = "block text-sm text-white mb-1.5";

const checkboxClass =
  "mt-0.5 w-4 h-4 rounded border-border bg-input-background accent-[#1E5BFF] shrink-0";

const raceOptions = [
  "American Indian or Alaska Native",
  "Asian",
  "Black or African American",
  "Hispanic or Latino",
  "Native Hawaiian or Other Pacific Islander",
  "White",
  "Two or More Races",
  "Other",
  "Prefer Not to Answer",
];

const medicalConditions = [
  "None",
  "Allergies",
  "Asthma",
  "Diabetes",
  "Hearing Impairment",
  "Heart Condition",
  "Physical Limitation",
  "Seizures",
  "Vision Impairment",
  "Requires Epi-Pen",
];

const policyAcknowledgments = [
  {
    title: "Emergency Medical Treatment",
    text: "I authorize emergency medical treatment for my child if I cannot be reached in case of an emergency.",
  },
  {
    title: "Family Handbook",
    text: "I have read and agree to abide by the policies outlined in the Family Handbook.",
  },
  {
    title: "Playground Equipment Recognition",
    text: "I acknowledge that my child may use playground equipment and outdoor facilities during program hours.",
  },
  {
    title: "Immunization Records",
    text: "I will provide up-to-date immunization records for my child upon enrollment.",
  },
  {
    title: "Contact Information",
    text: "I agree to keep my contact information current and notify the program of any changes.",
  },
  {
    title: "Field Trip Authorization",
    text: "I authorize my child to participate in supervised field trips organized by the program.",
  },
  {
    title: "Topical Application Waiver",
    text: "I authorize staff to apply sunscreen, insect repellent, and basic first aid topical treatments as needed.",
  },
  {
    title: "Program Enrollment",
    text: "I understand the program schedule, expectations, and agree to the terms of enrollment.",
  },
  {
    title: "Data Authorization",
    text: "I authorize the collection and use of my child's information for program administration and reporting purposes.",
  },
];

export function Enroll() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const next = () => setCurrentStep((s) => Math.min(s + 1, steps.length));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 1));

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-charcoal flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-royal/20 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-royal" />
          </div>
          <h2
            className="text-2xl sm:text-3xl text-white mb-4"
            style={{ fontWeight: 700 }}
          >
            Enrollment Submitted!
          </h2>
          <p
            className="text-soft-gray mb-6"
            style={{ lineHeight: "1.6" }}
          >
            Thank you for enrolling in the Eastside Colts Out-of-School
            Time program! We'll review your application and contact you
            shortly. Please check your email for a confirmation.
          </p>
          <p className="text-royal text-sm" style={{ fontWeight: 500 }}>
            Confirmation #ESC-32N-2026
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-navy py-10 sm:py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ClipboardList className="w-5 h-5 text-royal" />
            <span
              className="text-royal text-sm tracking-widest uppercase"
              style={{ fontWeight: 600 }}
            >
              32n Out-of-School Time
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl text-white mt-1 mb-3"
            style={{ fontWeight: 800 }}
          >
            Enrollment Form
          </h1>
          <p className="text-soft-gray max-w-lg mx-auto">
            Complete all sections below to enroll your child in the
            Eastside Colts Out-of-School Time program.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20">
            <FileText className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs" style={{ fontWeight: 500 }}>
              MiLEAP 32n Grant Program
            </span>
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
                      ? "bg-royal text-white"
                      : "bg-secondary text-soft-gray"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`hidden sm:block text-xs mt-1.5 ${
                    currentStep >= step.id ? "text-royal" : "text-soft-gray"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    currentStep > step.id ? "bg-royal" : "bg-secondary"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          {/* ─── STEP 1: STUDENT INFO & PROGRAM ─── */}
          {currentStep === 1 && (
            <div className="space-y-8">
              {/* Program Selection */}
              <div>
                <h3
                  className="text-xl text-white mb-5"
                  style={{ fontWeight: 700 }}
                >
                  Program Selection
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Program Site Location *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter site location"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Before School Program</label>
                    <div className="flex items-center gap-4 mt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="beforeSchool"
                          value="yes"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="beforeSchool"
                          value="no"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      Afterschool Dismissal Method
                    </label>
                    <select className={selectClass}>
                      <option value="">Select method</option>
                      <option>Walk</option>
                      <option>Bus</option>
                      <option>Pick Up</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div>
                <h3
                  className="text-xl text-white mb-5"
                  style={{ fontWeight: 700 }}
                >
                  Student Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Student first name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Student last name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Date of Birth *</label>
                    <input type="date" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Gender</label>
                    <select className={selectClass}>
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Prefer Not to Answer</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Home Address *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Street address, City, State, ZIP"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="(313) 555-0000"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Primary Language</label>
                    <select className={selectClass}>
                      <option value="">Select language</option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>T-Shirt Size</label>
                    <select className={selectClass}>
                      <option value="">Select size</option>
                      <optgroup label="Youth">
                        <option>Youth S</option>
                        <option>Youth M</option>
                        <option>Youth L</option>
                        <option>Youth XL</option>
                      </optgroup>
                      <optgroup label="Adult">
                        <option>Adult S</option>
                        <option>Adult M</option>
                        <option>Adult L</option>
                        <option>Adult XL</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Grade *</label>
                    <select className={selectClass}>
                      <option value="">Select grade</option>
                      <option>Pre-K</option>
                      <option>Kindergarten</option>
                      <option>1st</option>
                      <option>2nd</option>
                      <option>3rd</option>
                      <option>4th</option>
                      <option>5th</option>
                      <option>6th</option>
                      <option>7th</option>
                      <option>8th</option>
                      <option>9th</option>
                      <option>10th</option>
                      <option>11th</option>
                      <option>12th</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Teacher Name</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Classroom teacher name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Teacher Email</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="teacher@school.edu"
                    />
                  </div>
                </div>
              </div>

              {/* Siblings */}
              <div>
                <h4
                  className="text-white text-base mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Siblings Enrolled
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-soft-gray text-sm">
                      Are any siblings enrolled in a 21st Century program?
                    </span>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="siblings"
                        value="yes"
                        className="accent-[#1E5BFF]"
                      />
                      <span className="text-white text-sm">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="siblings"
                        value="no"
                        className="accent-[#1E5BFF]"
                      />
                      <span className="text-white text-sm">No</span>
                    </label>
                  </div>
                  <div>
                    <label className={labelClass}>If yes, which school?</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="School name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Sibling Name(s)</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Enter sibling names"
                    />
                  </div>
                </div>
              </div>

              {/* Race / Ethnicity */}
              <div>
                <h4
                  className="text-white text-base mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Race / Ethnicity
                </h4>
                <p className="text-soft-gray text-xs mb-3">
                  Select all that apply.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {raceOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input type="checkbox" className={checkboxClass} />
                      <span className="text-soft-gray text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── STEP 2: PARENT / GUARDIAN ─── */}
          {currentStep === 2 && (
            <div className="space-y-8">
              {/* Parent / Guardian 1 */}
              <div>
                <h3
                  className="text-xl text-white mb-5"
                  style={{ fontWeight: 700 }}
                >
                  Parent / Guardian 1
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Parent/Guardian full name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="parent@email.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-soft-gray text-sm">
                        Same address as child?
                      </span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent1SameAddr"
                          value="yes"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent1SameAddr"
                          value="no"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">No</span>
                      </label>
                    </div>
                    <label className={labelClass}>Address (if different)</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Street address, City, State, ZIP"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Cell Phone *</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="(313) 555-0000"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Work Phone</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="(313) 555-0000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-4">
                      <span className="text-soft-gray text-sm">
                        Authorized to pick up child?
                      </span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent1Pickup"
                          value="yes"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent1Pickup"
                          value="no"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parent / Guardian 2 */}
              <div className="pt-6 border-t border-border">
                <h3
                  className="text-xl text-white mb-2"
                  style={{ fontWeight: 700 }}
                >
                  Parent / Guardian 2
                </h3>
                <p className="text-soft-gray text-sm mb-5">
                  Optional — fill in if there is a second parent or legal
                  guardian.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Parent/Guardian full name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="parent@email.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-soft-gray text-sm">
                        Same address as child?
                      </span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent2SameAddr"
                          value="yes"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent2SameAddr"
                          value="no"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">No</span>
                      </label>
                    </div>
                    <label className={labelClass}>Address (if different)</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Street address, City, State, ZIP"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Cell Phone</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="(313) 555-0000"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Work Phone</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="(313) 555-0000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-4">
                      <span className="text-soft-gray text-sm">
                        Authorized to pick up child?
                      </span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent2Pickup"
                          value="yes"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="parent2Pickup"
                          value="no"
                          className="accent-[#1E5BFF]"
                        />
                        <span className="text-white text-sm">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─── STEP 3: EMERGENCY CONTACTS ─── */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div>
                <h3
                  className="text-xl text-white mb-2"
                  style={{ fontWeight: 700 }}
                >
                  Emergency Contacts
                </h3>
                <p className="text-soft-gray text-sm mb-6">
                  Please provide up to three emergency contacts who may be
                  reached if a parent/guardian is unavailable.
                </p>
              </div>

              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={
                    n > 1 ? "pt-6 border-t border-border" : undefined
                  }
                >
                  <h4
                    className="text-white text-base mb-4"
                    style={{ fontWeight: 600 }}
                  >
                    Emergency Contact {n}{" "}
                    {n === 1 && (
                      <span className="text-royal text-xs ml-1">
                        (Required)
                      </span>
                    )}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        Full Name {n === 1 && "*"}
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Contact name"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Relationship {n === 1 && "*"}
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="e.g. Aunt, Uncle, Neighbor"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Phone Number {n === 1 && "*"}
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="(313) 555-0000"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Additional Phone
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─── STEP 4: MEDICAL INFORMATION ─── */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div>
                <h3
                  className="text-xl text-white mb-5"
                  style={{ fontWeight: 700 }}
                >
                  Medical Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>
                      Preferred Hospital for Medical Treatment
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Hospital name"
                    />
                  </div>
                </div>
              </div>

              {/* Medical Conditions */}
              <div>
                <h4
                  className="text-white text-base mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Medical Conditions
                </h4>
                <p className="text-soft-gray text-xs mb-3">
                  Check all that apply.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {medicalConditions.map((condition) => (
                    <label
                      key={condition}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input type="checkbox" className={checkboxClass} />
                      <span className="text-soft-gray text-sm">
                        {condition}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Allergies & Medication */}
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Food Allergies</label>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={2}
                    placeholder="List any food allergies"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-soft-gray text-sm">
                    Allergic to bee stings?
                  </span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="beeAllergy"
                      value="yes"
                      className="accent-[#1E5BFF]"
                    />
                    <span className="text-white text-sm">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="beeAllergy"
                      value="no"
                      className="accent-[#1E5BFF]"
                    />
                    <span className="text-white text-sm">No</span>
                  </label>
                </div>
              </div>

              {/* Medication Authorization */}
              <div className="pt-6 border-t border-border">
                <h4
                  className="text-white text-base mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Medication Authorization
                </h4>
                <div className="bg-royal/10 border border-royal/20 rounded-lg p-4 mb-4">
                  <p className="text-soft-gray text-sm" style={{ lineHeight: "1.6" }}>
                    If your child requires medication during program hours,
                    please provide your initials below to authorize
                    administration by trained staff.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      Parent/Guardian Initials (Medication Consent)
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Initials"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Parent/Guardian Initials (Self-Administer Consent)
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Initials"
                      maxLength={5}
                    />
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className={labelClass}>
                  Special Instructions or Additional Notes
                </label>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={3}
                  placeholder="Any special medical instructions, dietary needs, or other notes the program should know about."
                />
              </div>
            </div>
          )}

          {/* ─── STEP 5: ACKNOWLEDGMENTS & SIGNATURE ─── */}
          {currentStep === 5 && (
            <div className="space-y-8">
              <div>
                <h3
                  className="text-xl text-white mb-2"
                  style={{ fontWeight: 700 }}
                >
                  Policy Acknowledgments
                </h3>
                <p className="text-soft-gray text-sm mb-6">
                  Please read and check each item to acknowledge your
                  understanding and agreement.
                </p>
              </div>

              <div className="space-y-3">
                {policyAcknowledgments.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-input-background border border-border cursor-pointer hover:border-royal/30 transition-colors"
                  >
                    <input type="checkbox" className={checkboxClass} />
                    <div>
                      <span
                        className="text-white text-sm block"
                        style={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </span>
                      <span className="text-soft-gray text-xs mt-0.5 block" style={{ lineHeight: "1.5" }}>
                        {item.text}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Signature */}
              <div className="pt-6 border-t border-border">
                <h4
                  className="text-white text-base mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Parent / Guardian Signature
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>
                      Digital Signature (Typed Full Name) *
                    </label>
                    <input
                      type="text"
                      className={`${inputClass} font-serif italic`}
                      placeholder="Type your full legal name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Printed Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Printed name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Date *</label>
                    <input type="date" className={inputClass} />
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

            {currentStep < steps.length ? (
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
                Submit Enrollment
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
