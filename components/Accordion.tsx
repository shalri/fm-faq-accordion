import { AnimatePresence, motion } from "framer-motion";
import FAQComponent from "./FAQComponent";

interface AccordionProps {
  index: number;
  expanded: number | null;
  setExpanded: (index: number | null) => void;
  question: string;
  answer: string;
}

export default function Accordion({
  index,
  expanded,
  setExpanded,
  question,
  answer,
}: AccordionProps) {
  const isOpen = index === expanded;
  return (
    <motion.section
      initial={false}
      animate={{ backgroundColor: isOpen ? "#ff0088" : "#0055ff" }}
      onClick={() => setExpanded(isOpen ? null : index)}
      className="cursor-pointer"
    >
      <div className="">{question}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapse"
            animate="open"
            exit="collapse"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapse: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <motion.div>{answer}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
