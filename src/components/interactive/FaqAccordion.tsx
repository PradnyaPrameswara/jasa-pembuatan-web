import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const faqData = [
  {
    question: "What types of projects do you take on?",
    answer: "I focus on complex web applications, high-performance marketing sites, and bespoke design systems. I partner with startups and established businesses that value technical precision and premium design."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on scope. A focused landing page might take a few weeks, while a comprehensive web application or platform redesign can span several months."
  },
  {
    question: "Do you handle both design and development?",
    answer: "Yes. My approach integrates design and engineering from day one, ensuring that the visual direction is perfectly aligned with technical implementation."
  },
  {
    question: "How do revisions work?",
    answer: "I structure my projects around iterative feedback loops. Key milestones include dedicated review periods where I refine the work based on your input before proceeding."
  },
  {
    question: "What technologies do you use?",
    answer: "I specialize in modern web technologies, primarily React, Astro, Next.js, and Tailwind CSS, prioritizing performance, scalability, and maintainability."
  },
  {
    question: "Do you handle hosting and deployment?",
    answer: "Yes, I handle the entire deployment pipeline, utilizing platforms like Vercel, AWS, or custom infrastructure depending on the project's specific requirements."
  },
  {
    question: "Do clients need to provide content before starting?",
    answer: "While having finalized content is ideal, I can begin structural design and prototyping with placeholder content and collaborate with you to finalize the copy as the project progresses."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. My workflow and communication processes are designed to support clients globally."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes, I offer ongoing maintenance and support retainers to ensure your platform remains secure, performant, and up-to-date with the latest web standards."
  }
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
