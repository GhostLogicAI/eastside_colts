import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
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
  Loader2,
} from "lucide-react";

// ── EmailJS config ──
const EMAILJS_SERVICE_ID = "service_colts";
const EMAILJS_TEMPLATE_ID = "template_enroll";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
    key: "ack_emergency_medical",
    title: "Emergency Medical Treatment",
    text: "I authorize emergency medical treatment for my child if I cannot be reached in case of an emergency.",
  },
  {
    key: "ack_family_handbook",
    title: "Family Handbook",
    text: "I have read and agree to abide by the policies outlined in the Family Handbook.",
  },
  {
    key: "ack_playground",
    title: "Playground Equipment Recognition",
    text: "I acknowledge that my child may use playground equipment and outdoor facilities during program hours.",
  },
  {
    key: "ack_immunization",
    title: "Immunization Records",
    text: "I will provide up-to-date immunization records for my child upon enrollment.",
  },
  {
    key: "ack_contact_info",
    title: "Contact Information",
    text: "I agree to keep my contact information current and notify the program of any changes.",
  },
  {
    key: "ack_field_trip",
    title: "Field Trip Authorization",
    text: "I authorize my child to participate in supervised field trips organized by the program.",
  },
  {
    key: "ack_topical",
    title: "Topical Application Waiver",
    text: "I authorize staff to apply sunscreen, insect repellent, and basic first aid topical treatments as needed.",
  },
  {
    key: "ack_enrollment",
    title: "Program Enrollment",
    text: "I understand the program schedule, expectations, and agree to the terms of enrollment.",
  },
  {
    key: "ack_data",
    title: "Data Authorization",
    text: "I authorize the collection and use of my child's information for program administration and reporting purposes.",
  },
];

export function Enroll() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const next = () => setCurrentStep((s) => Math.min(s + 1, steps.length));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError("");

    try {
      // Collect all form data into a readable summary for the email
      const fd = new FormData(formRef.current);
      const data: Record<string, string> = {};
      fd.forEach((value, key) => {
        if (data[key]) {
          data[key] += ", " + String(value);
        } else {
          data[key] = String(value);
        }
      });

      // Build a formatted message body
      const lines: string[] = [
        "═══ 32n ENROLLMENT FORM SUBMISSION ═══",
        "",
        "── PROGRAM ──",
        `Site Location: ${data.site_location || "—"}`,
        `Before School: ${data.before_school || "—"}`,
        `Afterschool Dismissal: ${data.afterschool_dismissal || "—"}`,
        "",
        "── STUDENT ──",
        `Name: ${data.student_first_name || ""} ${data.student_last_name || ""}`,
        `DOB: ${data.student_dob || "—"}`,
        `Gender: ${data.student_gender || "—"}`,
        `Address: ${data.student_address || "—"}`,
        `Phone: ${data.student_phone || "—"}`,
        `Language: ${data.student_language || "—"}`,
        `T-Shirt: ${data.student_tshirt || "—"}`,
        `Grade: ${data.student_grade || "—"}`,
        `Teacher: ${data.teacher_name || "—"} (${data.teacher_email || "—"})`,
        `Siblings Enrolled: ${data.siblings_enrolled || "—"}`,
        `Siblings School: ${data.siblings_school || "—"}`,
        `Sibling Names: ${data.siblings_names || "—"}`,
        `Race/Ethnicity: ${data.race_ethnicity || "—"}`,
        "",
        "── PARENT / GUARDIAN 1 ──",
        `Name: ${data.parent1_name || "—"}`,
        `Email: ${data.parent1_email || "—"}`,
        `Same Address: ${data.parent1_same_addr || "—"}`,
        `Address: ${data.parent1_address || "—"}`,
        `Cell: ${data.parent1_cell || "—"}`,
        `Work: ${data.parent1_work || "—"}`,
        `Pickup Auth: ${data.parent1_pickup || "—"}`,
        "",
        "── PARENT / GUARDIAN 2 ──",
        `Name: ${data.parent2_name || "—"}`,
        `Email: ${data.parent2_email || "—"}`,
        `Same Address: ${data.parent2_same_addr || "—"}`,
        `Address: ${data.parent2_address || "—"}`,
        `Cell: ${data.parent2_cell || "—"}`,
        `Work: ${data.parent2_work || "—"}`,
        `Pickup Auth: ${data.parent2_pickup || "—"}`,
        "",
        "── EMERGENCY CONTACT 1 ──",
        `Name: ${data.ec1_name || "—"}`,
        `Relationship: ${data.ec1_relationship || "—"}`,
        `Phone: ${data.ec1_phone || "—"}`,
        `Alt Phone: ${data.ec1_alt_phone || "—"}`,
        "",
        "── EMERGENCY CONTACT 2 ──",
        `Name: ${data.ec2_name || "—"}`,
        `Relationship: ${data.ec2_relationship || "—"}`,
        `Phone: ${data.ec2_phone || "—"}`,
        `Alt Phone: ${data.ec2_alt_phone || "—"}`,
        "",
        "── EMERGENCY CONTACT 3 ──",
        `Name: ${data.ec3_name || "—"}`,
        `Relationship: ${data.ec3_relationship || "—"}`,
        `Phone: ${data.ec3_phone || "—"}`,
        `Alt Phone: ${data.ec3_alt_phone || "—"}`,
        "",
        "── MEDICAL ──",
        `Preferred Hospital: ${data.preferred_hospital || "—"}`,
        `Conditions: ${data.medical_conditions || "None checked"}`,
        `Food Allergies: ${data.food_allergies || "—"}`,
        `Bee Allergy: ${data.bee_allergy || "—"}`,
        `Med Consent Initials: ${data.med_consent_initials || "—"}`,
        `Self-Admin Initials: ${data.med_self_admin_initials || "—"}`,
        `Special Instructions: ${data.special_instructions || "—"}`,
        "",
        "── ACKNOWLEDGMENTS ──",
        ...policyAcknowledgments.map(
          (p) => `${p.title}: ${data[p.key] ? "✓ Agreed" : "✗ Not checked"}`
        ),
        "",
        "── SIGNATURE ──",
        `Digital Signature: ${data.signature || "—"}`,
        `Printed Name: ${data.printed_name || "—"}`,
        `Date: ${data.signature_date || "—"}`,
        "",
        `Submitted: ${new Date().toLocaleString()}`,
      ];

      const templateParams = {
        to_email: "bchristian@eastsidecolts.org",
        from_name: `${data.parent1_name || "Parent"}`,
        student_name: `${data.student_first_name || ""} ${data.student_last_name || ""}`.trim(),
        reply_to: data.parent1_email || "",
        message: lines.join("\n"),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "There was a problem submitting the form. Please try again or contact us directly at bchristian@eastsidecolts.org"
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-charcoal flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-royal/20 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-royal" />
          </div>
          <h2 className="text-2xl sm:text-3xl text-white mb-4" style={{ fontWeight: 700 }}>
            Enrollment Submitted!
          </h2>
          <p className="text-soft-gray mb-6" style={{ lineHeight: "1.6" }}>
            Thank you for enrolling in the Eastside Colts Out-of-School Time program!
            We'll review your application and contact you shortly.
          </p>
          <p className="text-royal text-sm" style={{ fontWeight: 500 }}>
            A copy has been sent to bchristian@eastsidecolts.org
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
            <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              32n Out-of-School Time
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl text-white mt-1 mb-3" style={{ fontWeight: 800 }}>
            Enrollment Form
          </h1>
          <p className="text-soft-gray max-w-lg mx-auto">
            Complete all sections below to enroll your child in the Eastside Colts Out-of-School Time program.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20">
            <FileText className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs" style={{ fontWeight: 500 }}>MiLEAP 32n Grant Program</span>
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
                    currentStep >= step.id ? "bg-royal text-white" : "bg-secondary text-soft-gray"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {currentStep > step.id ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : step.id}
                </div>
                <span
                  className={`hidden sm:block text-xs mt-1.5 ${currentStep >= step.id ? "text-royal" : "text-soft-gray"}`}
                  style={{ fontWeight: 500 }}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${currentStep > step.id ? "bg-royal" : "bg-secondary"}`} />
              )}
            </div>
          ))}
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            {/* ─── STEP 1: STUDENT INFO & PROGRAM ─── */}
            <div className={currentStep === 1 ? "" : "hidden"}>
              <div className="space-y-8">
                {/* Program Selection */}
                <div>
                  <h3 className="text-xl text-white mb-5" style={{ fontWeight: 700 }}>Program Selection</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Program Site Location *</label>
                      <input type="text" name="site_location" className={inputClass} placeholder="Enter site location" required />
                    </div>
                    <div>
                      <label className={labelClass}>Before School Program</label>
                      <div className="flex items-center gap-4 mt-1">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="before_school" value="Yes" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="before_school" value="No" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">No</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Afterschool Dismissal Method</label>
                      <select name="afterschool_dismissal" className={selectClass}>
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
                  <h3 className="text-xl text-white mb-5" style={{ fontWeight: 700 }}>Student Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <input type="text" name="student_first_name" className={inputClass} placeholder="Student first name" required />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <input type="text" name="student_last_name" className={inputClass} placeholder="Student last name" required />
                    </div>
                    <div>
                      <label className={labelClass}>Date of Birth *</label>
                      <input type="date" name="student_dob" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass}>Gender</label>
                      <select name="student_gender" className={selectClass}>
                        <option value="">Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                        <option>Prefer Not to Answer</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Home Address *</label>
                      <input type="text" name="student_address" className={inputClass} placeholder="Street address, City, State, ZIP" required />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input type="tel" name="student_phone" className={inputClass} placeholder="(313) 555-0000" />
                    </div>
                    <div>
                      <label className={labelClass}>Primary Language</label>
                      <select name="student_language" className={selectClass}>
                        <option value="">Select language</option>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>T-Shirt Size</label>
                      <select name="student_tshirt" className={selectClass}>
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
                      <select name="student_grade" className={selectClass} required>
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
                      <input type="text" name="teacher_name" className={inputClass} placeholder="Classroom teacher name" />
                    </div>
                    <div>
                      <label className={labelClass}>Teacher Email</label>
                      <input type="email" name="teacher_email" className={inputClass} placeholder="teacher@school.edu" />
                    </div>
                  </div>
                </div>

                {/* Siblings */}
                <div>
                  <h4 className="text-white text-base mb-3" style={{ fontWeight: 600 }}>Siblings Enrolled</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-soft-gray text-sm">Are any siblings enrolled in a 21st Century program?</span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="siblings_enrolled" value="Yes" className="accent-[#1E5BFF]" />
                        <span className="text-white text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="siblings_enrolled" value="No" className="accent-[#1E5BFF]" />
                        <span className="text-white text-sm">No</span>
                      </label>
                    </div>
                    <div>
                      <label className={labelClass}>If yes, which school?</label>
                      <input type="text" name="siblings_school" className={inputClass} placeholder="School name" />
                    </div>
                    <div>
                      <label className={labelClass}>Sibling Name(s)</label>
                      <input type="text" name="siblings_names" className={inputClass} placeholder="Enter sibling names" />
                    </div>
                  </div>
                </div>

                {/* Race / Ethnicity */}
                <div>
                  <h4 className="text-white text-base mb-3" style={{ fontWeight: 600 }}>Race / Ethnicity</h4>
                  <p className="text-soft-gray text-xs mb-3">Select all that apply.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {raceOptions.map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="race_ethnicity" value={option} className={checkboxClass} />
                        <span className="text-soft-gray text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ─── STEP 2: PARENT / GUARDIAN ─── */}
            <div className={currentStep === 2 ? "" : "hidden"}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-5" style={{ fontWeight: 700 }}>Parent / Guardian 1</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" name="parent1_name" className={inputClass} placeholder="Parent/Guardian full name" required />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Email Address *</label>
                      <input type="email" name="parent1_email" className={inputClass} placeholder="parent@email.com" required />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-soft-gray text-sm">Same address as child?</span>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent1_same_addr" value="Yes" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent1_same_addr" value="No" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">No</span>
                        </label>
                      </div>
                      <label className={labelClass}>Address (if different)</label>
                      <input type="text" name="parent1_address" className={inputClass} placeholder="Street address, City, State, ZIP" />
                    </div>
                    <div>
                      <label className={labelClass}>Cell Phone *</label>
                      <input type="tel" name="parent1_cell" className={inputClass} placeholder="(313) 555-0000" required />
                    </div>
                    <div>
                      <label className={labelClass}>Work Phone</label>
                      <input type="tel" name="parent1_work" className={inputClass} placeholder="(313) 555-0000" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-center gap-4">
                        <span className="text-soft-gray text-sm">Authorized to pick up child?</span>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent1_pickup" value="Yes" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent1_pickup" value="No" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>Parent / Guardian 2</h3>
                  <p className="text-soft-gray text-sm mb-5">Optional — fill in if there is a second parent or legal guardian.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Full Name</label>
                      <input type="text" name="parent2_name" className={inputClass} placeholder="Parent/Guardian full name" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Email Address</label>
                      <input type="email" name="parent2_email" className={inputClass} placeholder="parent@email.com" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-soft-gray text-sm">Same address as child?</span>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent2_same_addr" value="Yes" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent2_same_addr" value="No" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">No</span>
                        </label>
                      </div>
                      <label className={labelClass}>Address (if different)</label>
                      <input type="text" name="parent2_address" className={inputClass} placeholder="Street address, City, State, ZIP" />
                    </div>
                    <div>
                      <label className={labelClass}>Cell Phone</label>
                      <input type="tel" name="parent2_cell" className={inputClass} placeholder="(313) 555-0000" />
                    </div>
                    <div>
                      <label className={labelClass}>Work Phone</label>
                      <input type="tel" name="parent2_work" className={inputClass} placeholder="(313) 555-0000" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-center gap-4">
                        <span className="text-soft-gray text-sm">Authorized to pick up child?</span>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent2_pickup" value="Yes" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="parent2_pickup" value="No" className="accent-[#1E5BFF]" />
                          <span className="text-white text-sm">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── STEP 3: EMERGENCY CONTACTS ─── */}
            <div className={currentStep === 3 ? "" : "hidden"}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>Emergency Contacts</h3>
                  <p className="text-soft-gray text-sm mb-6">
                    Please provide up to three emergency contacts who may be reached if a parent/guardian is unavailable.
                  </p>
                </div>

                {[1, 2, 3].map((n) => (
                  <div key={n} className={n > 1 ? "pt-6 border-t border-border" : undefined}>
                    <h4 className="text-white text-base mb-4" style={{ fontWeight: 600 }}>
                      Emergency Contact {n}{" "}
                      {n === 1 && <span className="text-royal text-xs ml-1">(Required)</span>}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name {n === 1 && "*"}</label>
                        <input type="text" name={`ec${n}_name`} className={inputClass} placeholder="Contact name" {...(n === 1 ? { required: true } : {})} />
                      </div>
                      <div>
                        <label className={labelClass}>Relationship {n === 1 && "*"}</label>
                        <input type="text" name={`ec${n}_relationship`} className={inputClass} placeholder="e.g. Aunt, Uncle, Neighbor" {...(n === 1 ? { required: true } : {})} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number {n === 1 && "*"}</label>
                        <input type="tel" name={`ec${n}_phone`} className={inputClass} placeholder="(313) 555-0000" {...(n === 1 ? { required: true } : {})} />
                      </div>
                      <div>
                        <label className={labelClass}>Additional Phone</label>
                        <input type="tel" name={`ec${n}_alt_phone`} className={inputClass} placeholder="Optional" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── STEP 4: MEDICAL INFORMATION ─── */}
            <div className={currentStep === 4 ? "" : "hidden"}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-5" style={{ fontWeight: 700 }}>Medical Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Preferred Hospital for Medical Treatment</label>
                      <input type="text" name="preferred_hospital" className={inputClass} placeholder="Hospital name" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white text-base mb-3" style={{ fontWeight: 600 }}>Medical Conditions</h4>
                  <p className="text-soft-gray text-xs mb-3">Check all that apply.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {medicalConditions.map((condition) => (
                      <label key={condition} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="medical_conditions" value={condition} className={checkboxClass} />
                        <span className="text-soft-gray text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Food Allergies</label>
                    <textarea name="food_allergies" className={`${inputClass} resize-none`} rows={2} placeholder="List any food allergies" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-soft-gray text-sm">Allergic to bee stings?</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="bee_allergy" value="Yes" className="accent-[#1E5BFF]" />
                      <span className="text-white text-sm">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="bee_allergy" value="No" className="accent-[#1E5BFF]" />
                      <span className="text-white text-sm">No</span>
                    </label>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-white text-base mb-3" style={{ fontWeight: 600 }}>Medication Authorization</h4>
                  <div className="bg-royal/10 border border-royal/20 rounded-lg p-4 mb-4">
                    <p className="text-soft-gray text-sm" style={{ lineHeight: "1.6" }}>
                      If your child requires medication during program hours, please provide your initials below to authorize administration by trained staff.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Parent/Guardian Initials (Medication Consent)</label>
                      <input type="text" name="med_consent_initials" className={inputClass} placeholder="Initials" maxLength={5} />
                    </div>
                    <div>
                      <label className={labelClass}>Parent/Guardian Initials (Self-Administer Consent)</label>
                      <input type="text" name="med_self_admin_initials" className={inputClass} placeholder="Initials" maxLength={5} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Special Instructions or Additional Notes</label>
                  <textarea name="special_instructions" className={`${inputClass} resize-none`} rows={3} placeholder="Any special medical instructions, dietary needs, or other notes the program should know about." />
                </div>
              </div>
            </div>

            {/* ─── STEP 5: ACKNOWLEDGMENTS & SIGNATURE ─── */}
            <div className={currentStep === 5 ? "" : "hidden"}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>Policy Acknowledgments</h3>
                  <p className="text-soft-gray text-sm mb-6">Please read and check each item to acknowledge your understanding and agreement.</p>
                </div>

                <div className="space-y-3">
                  {policyAcknowledgments.map((item) => (
                    <label
                      key={item.key}
                      className="flex items-start gap-3 p-3 rounded-lg bg-input-background border border-border cursor-pointer hover:border-royal/30 transition-colors"
                    >
                      <input type="checkbox" name={item.key} value="agreed" className={checkboxClass} />
                      <div>
                        <span className="text-white text-sm block" style={{ fontWeight: 600 }}>{item.title}</span>
                        <span className="text-soft-gray text-xs mt-0.5 block" style={{ lineHeight: "1.5" }}>{item.text}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-white text-base mb-4" style={{ fontWeight: 600 }}>Parent / Guardian Signature</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Digital Signature (Typed Full Name) *</label>
                      <input type="text" name="signature" className={`${inputClass} font-serif italic`} placeholder="Type your full legal name" required />
                    </div>
                    <div>
                      <label className={labelClass}>Printed Name *</label>
                      <input type="text" name="printed_name" className={inputClass} placeholder="Printed name" required />
                    </div>
                    <div>
                      <label className={labelClass}>Date *</label>
                      <input type="date" name="signature_date" className={inputClass} required />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <button
                  type="button"
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
                  type="button"
                  onClick={next}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-royal text-white text-sm hover:bg-royal/90 transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Next Step
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-royal text-white text-sm hover:bg-royal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontWeight: 700 }}
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit Enrollment
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
