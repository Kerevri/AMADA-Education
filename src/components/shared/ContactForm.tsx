"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  type?: "general" | "seminar" | "federation" | "school" | "media";
}

export function ContactForm({ type = "general" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
        <h3 className="font-bold text-lg mb-2">Request Submitted Successfully</h3>
        <p>Thank you for reaching out to AMADA Education. We will review your request and contact you shortly.</p>
        <Button 
          variant="outline" 
          className="mt-6 border-green-300 text-green-700 hover:bg-green-100"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-xl border border-border shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name *</label>
          <input
            id="name"
            required
            className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-[#102033] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address *</label>
          <input
            id="email"
            type="email"
            required
            className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-[#102033] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className="text-sm font-semibold text-primary">Organization / Federation</label>
          <input
            id="organization"
            className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-[#102033] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="e.g. National Athletics Federation"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-semibold text-primary">Your Role</label>
          <select
            id="role"
            className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select Role</option>
            <option value="athlete">Athlete</option>
            <option value="coach">Coach / Support Personnel</option>
            <option value="medical">Medical Professional</option>
            <option value="admin">Sport Administrator</option>
            <option value="teacher">Teacher / Academic</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {(type === "seminar" || type === "school") && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-semibold text-primary">Preferred Date</label>
            <input
              id="date"
              type="date"
              className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="audience" className="text-sm font-semibold text-primary">Target Audience Size</label>
            <input
              id="audience"
              type="number"
              min="1"
              className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-[#102033] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="e.g. 25"
            />
          </div>
        </div>
      )}

      <div className="space-y-2 pt-2">
        <label htmlFor="message" className="text-sm font-semibold text-primary">Message / Details *</label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-[#102033] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"
          placeholder="Please provide details about your request..."
        />
      </div>

      <div className="pt-4 flex justify-end">
        <Button type="submit" size="lg" className="w-full sm:w-auto bg-amada-teal hover:bg-amada-teal/90 text-white font-semibold px-8 h-12">
          Submit Request
        </Button>
      </div>
    </form>
  );
}
