import React from "react"
import GeneralInfo from "./form/GeneralInfo";
import EducationInfo from "./form/EducationInfo";
import ExperienceInfo from "./form/ExperienceInfo";

export default function FormOverview({data, handleData, addSubForm, deleteSubForm}) {
  const filterGeneral = data.filter(element => element.category === "general");
  const generalInformation = (
    <GeneralInfo 
      data={filterGeneral}
      handleData={handleData}
    />
  );

  const filterEducation = data.filter(element => element.category === "education");
  const educationInformation = filterEducation.map(education => (
    <EducationInfo
      key={education.id}
      id={education.id}
      education={education}
      handleData={handleData}
      deleteSubForm={deleteSubForm}
    />
  ));

  const filterExperience = data.filter(element => element.category === "experience");
  const experienceInformation = filterExperience.map(experience => (
    <ExperienceInfo
      key={experience.id}
      id={experience.id}
      experience={experience}
      handleData={handleData}
      deleteSubForm={deleteSubForm}
    />
  ));

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