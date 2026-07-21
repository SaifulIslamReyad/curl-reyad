// app/admin/students/page.jsx
import { list } from "@vercel/blob";

const syllabusKnowledgeLabels = {
  A: "Well-known from school",
  B: "Know some topics, not full layout",
  C: "Starting completely fresh",
};

const mainPriorityLabels = {
  A: "Exam Focus: Heavy past papers, mark schemes & getting an A*",
  B: "Concept First: Building strong fundamentals in Paper 2 logic",
  C: "Problem Solving: Understanding theory, but need help in scenarios",
};

const paper2PreferenceLabels = {
  laptop: "Writing live Python code on a laptop",
  paper: "Practicing Pseudocode on paper worksheets",
};

const theoryLearningStyleLabels = {
  "analogy-story": "Analogy / Story",
  "visual-notes": "Visual Notes / Diagrams",
  "active-qa": "Active Q&A",
};

function formatAnswer(value, lookup) {
  if (!value) return "Not provided";
  return lookup[value] || value;
}

export default async function AdminStudentsPage() {
  // List all files under students/
  const { blobs } = await list({
    prefix: "students/",
  });

  // Read each JSON file
  const students = await Promise.all(
    blobs.map(async (blob) => {
      const response = await fetch(blob.url, {
        cache: "no-store",
      });

      return response.json();
    })
  );

  // Newest first
  students.sort(
    (a, b) => new Date(b.submittedAt) - new Date(a.submittedAt)
  );

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Saved Student Profiles
      </h1>

      {students.length === 0 ? (
        <p className="text-gray-500">
          No student profiles submitted yet.
        </p>
      ) : (
        <div className="space-y-4">
          {students.map((s) => (
            <div
              key={s.id}
              className="p-5 border rounded-xl bg-white shadow-sm space-y-2"
            >
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-lg font-bold text-gray-800">
                  {s.studentName}
                </h3>

                <span className="text-xs text-gray-400">
                  {new Date(s.submittedAt).toLocaleDateString()}
                </span>
              </div>

              <div className="text-sm text-gray-600 grid grid-cols-2 gap-2 pt-2">
                <p>
                  <strong>Syllabus Knowledge:</strong>{" "}
                  {formatAnswer(
                    s.syllabusKnowledge,
                    syllabusKnowledgeLabels
                  )}
                </p>

                <p>
                  <strong>Exam Series:</strong>{" "}
                  {s.targetExamSeries || "Not provided"}
                </p>

                <p>
                  <strong>Primary Goal:</strong>{" "}
                  {formatAnswer(
                    s.mainPriority,
                    mainPriorityLabels
                  )}
                </p>

                <p>
                  <strong>Paper 2 Preference:</strong>{" "}
                  {formatAnswer(
                    s.paper2Preference,
                    paper2PreferenceLabels
                  )}
                </p>

                <p>
                  <strong>Theory Learning Style:</strong>{" "}
                  {formatAnswer(
                    s.theoryLearningStyle,
                    theoryLearningStyleLabels
                  )}
                </p>

                <p>
                  <strong>Self Study:</strong>{" "}
                  {s.weeklySelfStudyHours || "Not provided"}
                </p>

                <p className="col-span-2">
                  <strong>Coding Background:</strong>{" "}
                  {s.codingBackground || "Not provided"}
                </p>

                <p className="col-span-2">
                  <strong>School Feedback:</strong>{" "}
                  {s.schoolStatus || "Not provided"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}