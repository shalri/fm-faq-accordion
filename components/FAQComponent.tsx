"use client";
import { faqs } from "@/lib/data";
import Accordion from "./Accordion";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQComponent() {
  const [expanded, setExpanded] = useState<number | false>(false);
  return (
    <section className="px-6 flex h-auto w-full flex-col rounded-md bg-white pt-5 pb-1">
      <h1 className="text-[2rem] font-bold text-faq-dark-purple pl-12 bg-[length:24px_24px] bg-[url(/assets/images/icon-star.svg)] bg-no-repeat bg-[left_center]">FAQs</h1>
      {/* <div className="w-full"> */}
        <div className="relative h-full w-full divide-faq-light-pink divide-y">
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
      {/* </div> */}
    </section>
  );
}
