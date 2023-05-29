"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../page.module.scss';
import { Question } from '../types';
import { calculateTestScore } from '@/utils';


const Questionaire = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch('/api/questions')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions)
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAnswer = (questionId: number, answerIndex: number) => {
    console.log({questionId, answerIndex})
    setQuestions((oldQuestions) => {
      const newQuestions = [...oldQuestions]
      newQuestions[questionId].userAnswer = answerIndex
      console.log({newQuestions})
      return newQuestions
    })
  };

  useEffect(() => {
    if (questions.length > 0 && questions.every(question => question.userAnswer > -1)) {
      // When all answers have been answered, we calculate the score and go to result page
      const score = calculateTestScore(questions)
      router.push(`/test/result?score=${score}`)
    }
  }, [questions, router])

  return (
    <main>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className={styles["question"]}>
          <h3>{question.question}</h3>
          {question.answers.map((answer, answerIndex) => (
            <div className={question.userAnswer === answerIndex ? styles["answer--selected"] : ""} key={answerIndex} onClick={() => handleAnswer(questionIndex, answerIndex)}>{answer}</div>
          ))}
        </div>
      ))}

      {questions.length && (
        <div>Questions answered: {questions.filter(q => q.userAnswer > -1).length} / {questions.length}</div>
      )}
    </main>
  );
};

export default Questionaire;