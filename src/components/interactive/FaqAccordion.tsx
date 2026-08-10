import * as React from "react"

const faqData = [
  {
    question: "What types of projects do you take on?",
    answer: "We focus on complex web applications, high-performance marketing sites, and bespoke design systems. We partner with startups and established businesses that value technical precision and premium design."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on scope. A focused landing page might take a few weeks, while a comprehensive web application or platform redesign can span several months."
  },
  {
    question: "Do you handle both design and development?",
    answer: "Yes. Our approach integrates design and engineering from day one, ensuring that the visual direction is perfectly aligned with technical implementation."
  },
  {
    question: "How do revisions work?",
    answer: "We structure our projects around iterative feedback loops. Key milestones include dedicated review periods where we refine the work based on your input before proceeding."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern web technologies, primarily React, Astro, Next.js, and Tailwind CSS, prioritizing performance, scalability, and maintainability."
  },
  {
    question: "Do you handle hosting and deployment?",
    answer: "Yes, we handle the entire deployment pipeline, utilizing platforms like Vercel, AWS, or custom infrastructure depending on the project's specific requirements."
  },
  {
    question: "Do clients need to provide content before starting?",
    answer: "While having finalized content is ideal, we can begin structural design and prototyping with placeholder content and collaborate with you to finalize the copy as the project progresses."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. While we are based in Indonesia, our workflow and communication processes are designed to support clients globally."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes, we offer ongoing maintenance and support retainers to ensure your platform remains secure, performant, and up-to-date with the latest web standards."
  }
]

export function FaqAccordion() {
  return (
    <div className="w-full space-y-4">
      {faqData.map((item, index) => (
        <details key={index} className="group border-b border-border [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline hover:cursor-pointer">
            {item.question}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div className="pb-4 text-muted-foreground">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
