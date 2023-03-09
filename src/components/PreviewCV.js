import { nanoid } from "nanoid";
import React from "react";

export default function PreviewCV({isDisplayed, data}) {
  const filterGeneral = data.filter(element => element.category === "general");
  const filterEducation = data.filter(element => element.category === "education");
  const filterExperience = data.filter(element => element.category === "experience");

  const previewGeneral = filterGeneral.map(general => (
    <div key={general.id}>
      <h4 key="full-name">{general.firstName} {general.lastName}</h4>
      <p key="address">{general.address}</p>
      <p key="phone">{general.phone}</p>
      <p key="email">{general.email}</p>
    </div>
  ));

  const previewEducation = filterEducation.map(education => (
    <div key={education.id}>
      <p key={`uni-${education.id}`}>{education.university}</p>
      <p key={`deg-${education.id}`}>{education.degree}</p>
      <p key={`loc-${education.id}`}>{education.location}</p>
      <p key={`time-${education.id}`}>from: {education.from} to: {education.to}</p>
    </div>
  ));

  const previewExperience =filterExperience.map(experience => (
    <div key={experience.id}>
      <p key={`com-${experience.id}`}>{experience.company}</p>
      <p key={`loc-${experience.id}`}>{experience.location}</p>
      <p key={`pos-${experience.id}`}>{experience.position}</p>
      <p key={`time-${experience.id}`}>from: {experience.from} to: {experience.to}</p>
    </div>
  ));

  if (isDisplayed) {
    return (
      <div>
        {previewGeneral}
        <h3>Education</h3>
        {previewEducation}
        <h3>Experience</h3>
        {previewExperience}
      </div>
    );
  } else {
    return (<div></div>);
  }
}