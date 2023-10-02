import React, { useState } from "react";
import "./Exams.css";
import Card from "./Card";
import { motion, transform } from "framer-motion";

const exams = [
  {
    name: "First Exam",
    date: "Date",
    link: "-----",
    image: "exam1.png",
  },
  {
    name: "Second Name",
    date: "Date",
    link: "-----",
    image: "exam1.png",
  },
  {
    name: "Exam Name",
    date: "Date",
    link: "-----",
    image: "exam1.png",
  },
  {
    name: "Exam Name",
    date: "Date",
    link: "-----",
    image: "exam1.png",
  },
  {
    name: "Exam Name",
    date: "Date",
    link: "-----",
    image: "exam1.png",
  },
];


export const Exams = () => {
  const [scrollValue, setScroll] = useState(0);

  return (
    <div className="exams-section">
      <div className="e-top">
        <div className="e-left">
          <p>Important</p>
          <h1>Exams</h1>
        </div>
        <div className="e-right">
          <button
            onClick={() => {
              scrollValue > 0
                ? setScroll((c) => {
                    return c - 380;
                  })
                : setScroll(0);
            }}
          >
            {" "}
            &lt;{" "}
          </button>
          <button
            onClick={() => {
              scrollValue < 380 * (exams.length - 2)
                ? setScroll((c) => {
                    return c + 380;
                  })
                : setScroll(380 * (exams.length - 2));
            }}
          >
            {" "}
            &gt;{" "}
          </button>
        </div>
      </div>
      <div className="e-bottom">

        <motion.div animate={{ x: -scrollValue }}>
          {exams?.map((exam, index) => (
            <Card
              key={index}
              name={exam.name}
              date={exam.date}
              image={exam.image}
              link={exam.link}
            />
          ))}
        </motion.div>

      </div>
    </div>
  );
};
