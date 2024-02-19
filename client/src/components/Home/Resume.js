import React from "react";
import ResumeItems from "./ResumeItems";
import SkillItem from "./SkillItem";

function Resume() {
  return (
    <div className="resume-container flex flex-col items-center py-16 md:px-16">
      <div className="title bg-yellow-300 px-2 mb-2">
        <h3>Resume</h3>
      </div>
      <div className="subtitle mb-5 text-4xl font-black">
        <h1>A summary of My Resume</h1>
      </div>
      <div className="education-experience grid gap-16 sm:grid-cols-1 xl:grid-cols-2">
        <div className="education-container">
          <h2 className="font-bold mb-4 text-2xl">My Education</h2>
          <div className="education border-l-2 border-l-sky-700  pl-4">
            <ResumeItems
              title="Master in Computer Engineering"
              subtitle="Harvard University / 2015 - 2017"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
            />
            <ResumeItems
              title="Master in Computer Engineering"
              subtitle="Harvard University / 2015 - 2017"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
            />
            <ResumeItems
              title="Master in Computer Engineering"
              subtitle="Harvard University / 2015 - 2017"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
            />
          </div>
        </div>
        <div className="education-container">
          <h2 className="font-bold mb-4 text-2xl">My Education</h2>
          <div className="education border-l-2 border-l-sky-700  pl-4">
            <ResumeItems
              title="Master in Computer Engineering"
              subtitle="Harvard University / 2015 - 2017"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
            />
            <ResumeItems
              title="Master in Computer Engineering"
              subtitle="Harvard University / 2015 - 2017"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
            />
            <ResumeItems
              title="Master in Computer Engineering"
              subtitle="Harvard University / 2015 - 2017"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
            />
          </div>
        </div>
      </div>
      <div className="skills-container mb-5 text-4xl font-black w-full ">
        <h3 className="font-bold text-2xl">My Skills</h3>
        <div className="skills grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillItem title="HTML" percentage="70" />
          <SkillItem title="CSS" percentage="50" />
          <SkillItem title="JS" percentage="80" />
          <SkillItem title="PYTHON" percentage="50" />
          <SkillItem title="NODE" percentage="70" />
          <SkillItem title="REACT" percentage="75" />
          <SkillItem title="EXPRESS" percentage="72" />
        </div>
      </div>
      <div className="downloadcv mt-10 mb-4 px-12 py-4 border-2 border-black hover:text-white hover:bg-black">
        Download CV
      </div>
    </div>
  );
}

export default Resume;
