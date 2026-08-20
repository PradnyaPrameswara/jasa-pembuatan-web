import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const faqData = [
  {
    question: "What roles are you currently looking for?",
    answer: "I am currently seeking full-time opportunities as a Fullstack Developer, Frontend Developer, or Backend Engineer."
  },
  {
    question: "What is your current professional role?",
    answer: "I am a Web Developer at Widhi Asih Bali Export, a role I started in June 2026."
  },
  {
    question: "What is your educational background?",
    answer: "I graduated from Universitas Pendidikan Ganesha with a bachelor's degree in Technical Teacher Education, studying from 2022 to 2026."
  },
  {
    question: "What are your core technical skills?",
    answer: "My CV lists HTML, TypeScript, and Astro as top skills. It also includes certifications in React frontend development, REST API, SQL, CSS, and Python."
  },
  {
    question: "Do you have fullstack experience?",
    answer: "Yes. My development background includes frontend interface work as well as API development, database management, backend systems, and application workflows."
  },
  {
    question: "What academic software project have you built?",
    answer: "During university I developed a diagnostic assessment system designed to identify students' initial abilities, applying software engineering to an education-sector problem."
  },
  {
    question: "Do you have teaching or mentoring experience?",
    answer: "Yes. I completed an Informatics teaching internship at SMP Negeri 6 Singaraja from September to December 2025, and my CV also notes practical experience mentoring students in C++ programming."
  }
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="text-left font-medium text-foreground transition-colors hover:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
