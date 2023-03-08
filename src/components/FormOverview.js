import React from "react"
import GeneralInfo from "./form/GeneralInfo";
import EducationInfo from "./form/EducationInfo";
import ExperienceInfo from "./form/ExperienceInfo";

export default function FormOverview({data, handleData}) {
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
      {educationInformation}
      <h2>Experience</h2>
      {experienceInformation}
    </div>
  );
}