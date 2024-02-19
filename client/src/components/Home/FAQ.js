import React, { useState } from "react";
import FAQQuestion from "./FAQQuestion";

const all_questions = [
  [
    "What is Portfolio?",
    "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.",
  ],
  [
    "How can I help you?",
    "Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
  ],
  [
    "Simple process for workflow?",
    "Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.",
  ],
  [
    "Is Portfolio a multi-purpose template?",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
  ],
  [
    "Why one page responsive template?",
    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
  ],
];

function FAQ() {
  const [expand, setExpand] = useState(-1);
  const updateExpandIndex = (index) => {
    setExpand((prev) => (prev === index ? -1 : index));
  };
  return (
    <div className="faq grid md:grid-cols-2 py-28 px-12">
      <div className="questions">
        <div className="title bg-yellow-300 px-2 mb-2 box-content w-[30px]">
          <h3>FAQ</h3>
        </div>
        <div className="subtitle mb-5 text-4xl font-black">
          <h1>Have any questions?</h1>
        </div>
        {all_questions.map((item, index) => {
          return (
            <FAQQuestion
              key={index}
              index={index}
              question={item[0]}
              answer={item[1]}
              expand={index === expand}
              setIndex={updateExpandIndex}
            />
          );
        })}
      </div>
      <div
        className="bulb"
        style={{
          backgroundImage: `url("/images/faq.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          minWidth: "400px",
          minHeight: "500px",
        }}
      ></div>
    </div>
  );
}

export default FAQ;
