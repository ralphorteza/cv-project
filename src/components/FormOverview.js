import React from "react"
import GeneralInfo from "./form/GeneralInfo";
import EducationInfo from "./form/EducationInfo";
import ExperienceInfo from "./form/ExperienceInfo";

export default function FormOverview({data, handleData, addSubForm}) {
  const generalInformation = (
    <GeneralInfo 
      data={data}
      handleData={handleData}
    />
  );

  const educationInformation = (
    <EducationInfo
      data={data}
      handleData={handleData}
    />
  );

  const experienceInformation = (
    <ExperienceInfo
      data={data}
      handleData={handleData}
    />
  );

  return (
    <div>
      <h2>General</h2>
      {generalInformation}
      <h2>Education</h2>
      <button
        className="education-subform--add"
        onClick={addSubForm}
        value="education"
      >
        add edu
      </button>
      {educationInformation}
      <h2>Experience</h2>
      <button
        className="experience-subform--add"
        onClick={addSubForm}
        value="experience"
      >
        add exp
      </button>
      {experienceInformation}
    </div>
  );
}