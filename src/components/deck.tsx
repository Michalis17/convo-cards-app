"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "./card";

const questions = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  // Add more questions here
];

const Deck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: string) => {
    //  || 
    if (direction === "right") {
      setCurrentIndex((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
    }else if (direction === "left") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative">
      <AnimatePresence>
        {currentIndex < questions.length && (
          <Card
            key={questions[currentIndex]}
            question={questions[currentIndex]}
            onDragEnd={handleSwipe}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Deck;
