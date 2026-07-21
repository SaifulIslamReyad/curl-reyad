import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  studentName: text('student_name'),
  syllabusKnowledge: text('syllabus_knowledge'),
  targetExamSeries: text('target_exam_series'),
  mainPriority: text('main_priority'),
  paper2Preference: text('paper2_preference'),
  theoryLearningStyle: text('theory_learning_style'),
  codingBackground: text('coding_background'),
  schoolStatus: text('school_status'),
  weeklySelfStudyHours: text('weekly_self_study_hours'),
  submittedAt: timestamp('submitted_at').defaultNow(),
});
