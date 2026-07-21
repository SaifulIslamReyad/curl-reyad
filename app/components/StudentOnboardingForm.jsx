// app/components/StudentOnboardingForm.jsx
"use client";

import { useState } from "react";

const syllabusKnowledgeOptions = [
  { id: "A", label: "Well-known from school" },
  { id: "B", label: "Know some topics, not full layout" },
  { id: "C", label: "Starting completely fresh" },
];

const mainPriorityOptions = [
  {
    id: "A",
    label: "Exam Focus: Heavy past papers, mark schemes & getting an A*",
  },
  {
    id: "B",
    label: "Concept First: Building strong fundamentals in Paper 2 logic",
  },
  {
    id: "C",
    label: "Problem Solving: Understanding theory, but need help in scenarios",
  },
];

const paper2PreferenceOptions = [
  { id: "laptop", label: "Writing live Python code on a laptop" },
  { id: "paper", label: "Practicing Pseudocode on paper worksheets" },
];

const theoryLearningStyleOptions = [
  {
    id: "analogy-story",
    label: "Analogy / Story",
    description:
      "Relating it to real-world examples, like comparing a CPU to a kitchen chef.",
  },
  {
    id: "visual-notes",
    label: "Visual Notes / Diagrams",
    description: "Drawing block diagrams, mind maps, and color-coded notes.",
  },
  {
    id: "active-qa",
    label: "Active Q&A",
    description: "Short questions as we go so you can explain it back to me.",
  },
];

export default function StudentOnboardingForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    syllabusKnowledge: "B",
    targetExamSeries: "",
    mainPriority: "B",
    paper2Preference: "laptop",
    theoryLearningStyle: "",
    codingBackground: "",
    schoolStatus: "",
    weeklySelfStudyHours: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionSelect = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setStatus({ loading: false, success: true, error: null });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 my-10 font-sans">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Cambridge O Level CS (2210)
        </h2>
      </div>

     

      {status.success ? (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
          🎉 Thanks, you are all set for your first session.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Saif Reyad"
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Q1: Syllabus Knowledge */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              1. How familiar are you with the O Level CS (2210) syllabus
              layout?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {syllabusKnowledgeOptions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleOptionSelect("syllabusKnowledge", item.id)
                  }
                  className={`p-3 border rounded-lg cursor-pointer text-sm flex items-center space-x-2 transition-all text-left ${
                    formData.syllabusKnowledge === item.id
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q2: Target Exam Series */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              2. Which exam series are you targeting, and when does school aim
              to finish?
            </label>
            <input
              type="text"
              name="targetExamSeries"
              required
              value={formData.targetExamSeries}
              onChange={handleChange}
              placeholder="e.g. January 2028 "
              className="w-full text-sm p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Q3: Priorities */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              3. What is your primary focus for our tutoring sessions?
            </label>
            <div className="space-y-2">
              {mainPriorityOptions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleOptionSelect("mainPriority", item.id)}
                  className={`p-3 border rounded-lg cursor-pointer text-sm block transition-all w-full text-left ${
                    formData.mainPriority === item.id
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Q4: Paper 2 Preference */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              4. How do you prefer learning Paper 2 programming logic?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {paper2PreferenceOptions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleOptionSelect("paper2Preference", item.id)
                  }
                  className={`p-3 border rounded-lg cursor-pointer text-sm flex items-center space-x-2 transition-all text-left ${
                    formData.paper2Preference === item.id
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q5: Theory Learning Style */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              5. For theory topics like Hardware, Networking, and Security, what
              makes a concept click for you in class?
            </label>
            <div className="space-y-2">
              {theoryLearningStyleOptions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleOptionSelect("theoryLearningStyle", item.id)
                  }
                  className={`p-3 border rounded-lg cursor-pointer text-sm block transition-all w-full text-left ${
                    formData.theoryLearningStyle === item.id
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Q6: Prior Coding Background */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              6. Have you done any block coding (Scratch) or text coding
              (Python/HTML) before?
            </label>
            <input
              type="text"
              name="codingBackground"
              value={formData.codingBackground}
              onChange={handleChange}
              placeholder="e.g. Basic Scratch /new to Python"
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Q7: School Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              7. How are school CS classes going? Any specific areas you
              struggle with?
            </label>
            <textarea
              name="schoolStatus"
              rows="2"
              value={formData.schoolStatus}
              onChange={handleChange}
              placeholder="e.g. Theory is fine, but pseudocode logic is hard."
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Q8: Dedicated Study Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              8. How many hours can you dedicate to CS homework/self-study each
              week?
            </label>
            <input
              type="text"
              name="weeklySelfStudyHours"
              value={formData.weeklySelfStudyHours}
              onChange={handleChange}
              placeholder="e.g. 2–3 hours weekly"
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm disabled:bg-blue-300"
          >
            {status.loading ? "Saving Profile..." : "Save Assessment Profile"}
          </button>

          {status.error && (
            <p className="text-red-500 text-sm text-center mt-2">
              {status.error}
            </p>
          )}
           <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        {/* <p className="font-semibold">
          Don&apos;t worry, I&apos;ll help you understand everything.
        </p> */}
        <p className="mt-1">
          O Level CS isn&apos;t just about understanding concepts; it&apos;s
          about matching the Cambridge Mark Scheme. We will cover concepts
          first, then solve past papers together. Computer Science can feel
          intimidating at first, especially Paper 2 logic, but once you get the
          pattern, it becomes one of the easiest subjects to score an A* in.
        </p>
      </div>
        </form>
        
      )}
    </div>
  );
}
