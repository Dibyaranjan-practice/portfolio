import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQQuestion({ question, answer, expand, setIndex, index }) {
  const updateIndex = () => {
    setIndex(index);
  };
  return (
    <div
      className={`question-answer text-xl font-semibold ${
        expand === true ? "text-black" : "text-[#9b9bbb]"
      }`}
    >
      <div className="question py-5 px-9" onClick={updateIndex}>
        <ExpandMoreIcon
          className={`expand ${expand === true ? "active" : "close"}`}
        />
        {question}
      </div>
      <div
        className={`answer px-16 ${
          expand === true ? "h-auto block" : "h-0 hidden"
        }`}
      >
        {answer}
      </div>
      <hr />
    </div>
  );
}

export default FAQQuestion;
