import React, { useState } from "react";

const ExpertSkillsets = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [skillInfo, setSkillInfo] = useState({});

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
    setSkillInfo({
      [skill]: {
        description: `This is a brief description of ${skill}.`,
        details: `Here are some additional details about ${skill}.`,
      },
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Discover Our Expert Skillsets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Web Development",
          "Mobile App Development",
          "Cloud Computing",
          "Artificial Intelligence",
          "Machine Learning",
          "Data Science",
          "Cybersecurity",
          "DevOps",
          "Quality Assurance",
          "Project Management",
          "Business Analysis",
          "Digital Marketing",
          "UX/UI Design",
          "Front-end Development",
          "Back-end Development",
          "Full-stack Development",
          "Database Administration",
          "Network Administration",
          "IT Consulting",
          "Software Development",
        ].map((skillset, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b"
          >
            <span onClick={() => handleSkillClick(skillset)}>{skillset}</span>
            <span className="text-xl">+</span>
          </div>
        ))}
      </div>

      {activeSkill && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">{activeSkill}</h3>
          <p className="text-sm">{skillInfo[activeSkill].description}</p>
          <p className="text-sm">{skillInfo[activeSkill].details}</p>
        </div>
      )}
    </div>
  );
};

export default ExpertSkillsets;
