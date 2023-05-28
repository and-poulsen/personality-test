import { NextResponse } from 'next/server';

const questions = [
  {
    "question": "You are at a party with a large group of people. How do you feel?",
    "answers": [
      "I feel overwhelmed and prefer to find a quiet corner to observe.",
      "I enjoy interacting with a few close friends but feel uncomfortable in large crowds.",
      "I feel energized and thrive in the social atmosphere.",
      "I love meeting new people and enjoy being the center of attention."
    ]
  },
  {
    "question": "How do you typically spend your free time?",
    "answers": [
      "I enjoy solitary activities like reading, writing, or spending time alone.",
      "I prefer spending time with a small group of close friends or family.",
      "I like a good balance of socializing with others and having time for myself.",
      "I love being around people and actively seek out social events and gatherings."
    ]
  },
  {
    "question": "How do you approach new social situations?",
    "answers": [
      "I feel anxious and take time to observe before actively participating.",
      "I am cautious but open to engaging with others at my own pace.",
      "I feel comfortable and confident in meeting new people.",
      "I am enthusiastic and enjoy initiating conversations and making new connections."
    ]
  },
  {
    "question": "How do you recharge after a long day?",
    "answers": [
      "I prefer spending quiet time alone to reflect and recharge.",
      "I enjoy spending time with a few close friends or family.",
      "I like a mix of alone time and socializing to recharge.",
      "I find energy in being around others and seek out social activities."
    ]
  }
]
;

export async function GET(request: Request) {
  return NextResponse.json( {questions: questions.map(question => ({...question, userAnswer: -1}))} );

}