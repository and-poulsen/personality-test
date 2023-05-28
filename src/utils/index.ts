import { Question } from "@/app/types";

export function calculateTestScore(questions: Question[]) {
  return questions.reduce((acc, currentQuestion) => acc + currentQuestion.userAnswer, 0)
}