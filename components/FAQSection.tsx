"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "LOREM IPSUM DOLOR SIT AMET CONSECTETUR VITAE VITAE AUGUE LOBORTIS DICTUM?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    },
    {
      question:
        "NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      question: "NEQUE PORRO QUISQUAM EST, QUI DOLOREM IPSUM?",
      answer:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      question:
        "UT ENIM AD MINIMA VENIAM, QUIS NOSTRUM EXERCITATIONEM ULLAM CORPORIS?",
      answer:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
      question:
        "QUIS AUTEM VEL EUM IURE REPREHENDERIT QUI IN EA VOLUPTATE VELIT ESSE QUAM NIHIL MOLESTIAE CONSEQUATUR, VEL ILLUM?",
      answer:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
  ];

  return (
    <div className="w-full bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto bg-[#d9d9d9] rounded-[16px] p-10 font-mono">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column */}
          <div className="w-full md:w-[120px] flex-shrink-0">
            <h2 className="text-[24px] text-[#1a1a1a] uppercase tracking-wider">
              FAQS
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex justify-end pr-10 md:pr-20">
            <div className="w-full max-w-xl">
              <div className="flex flex-col border-b border-black/40">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-t border-[#bbb] first:border-t-0 py-6"
                  >
                    {/* QUESTION ROW */}
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-start gap-6 text-left group"
                    >
                      <span className="flex-1 text-[12px] md:text-[13px] text-[#1a1a1a] uppercase tracking-[0.1em] font-medium leading-relaxed">
                        {faq.question}
                      </span>

                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#888] flex items-center justify-center flex-shrink-0">
                        <span className="text-[18px] text-[#1a1a1a] leading-none select-none">
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    {/* ANSWER */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-[11px] md:text-[12px] text-[#555] leading-relaxed max-w-3xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
