"use client";
import { faqs } from "@/lib/data";
import Accordion from "./Accordion";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQComponent() {
  const [expanded, setExpanded] = useState<number | false>(false);
  return (
    <section className="flex h-auto w-full flex-col rounded-md bg-white px-6 pb-1 pt-5 sm:max-w-[600px] sm:rounded-[14px] sm:px-10 sm:pt-[30px]">
      <h1 className="bg-[url(/fm-faq-accordion/images/icon-star.svg)] bg-[length:24px_24px] bg-[left_center] bg-no-repeat pl-12 text-[2rem] font-bold text-faq-dark-purple sm:bg-[length:40px_40px] sm:pl-16 sm:text-[3.5rem]">
        FAQs
      </h1>
      {/* <div className="w-full"> */}
      <div className="relative h-full w-full divide-y divide-faq-light-pink">
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
