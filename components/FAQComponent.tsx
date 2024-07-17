"use client";
import { faqs } from "@/lib/data";
import Accordion from "./Accordion";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQComponent() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section
      // layout
      className="flex w-full flex-col justify-center rounded-md bg-white"
    >
      <h1 className="text-3xl font-bold text-zinc-500">FAQs</h1>
      <div className="relative w-full">
        <div className="absolute">
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
