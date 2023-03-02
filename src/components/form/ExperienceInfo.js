import React from "react"

export default function ExperienceInfo(props) {
  const {experienceInfo, handleExperienceInfoChange} = props;

  return(
    <form className="experience-info">
      <label>
        Company:
        <input
          type="text"
          placeholder="SRE"
          onChange={handleExperienceInfoChange}
          name="company"
          value={experienceInfo.company}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          placeholder="San Jose, Calif"
          onChange={handleExperienceInfoChange}
          name="location"
          value={experienceInfo.location}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          placeholder="Team Manager"
          onChange={handleExperienceInfoChange}
          name="position"
          value={experienceInfo.position}
        />
      </label>
      <label>
        From:
        <input
          type="text"
          placeholder="Aug 20XX"
          onChange={handleExperienceInfoChange}
          name="from"
          value={experienceInfo.from}
        />
      </label>
      <label>
        To:
        <input
          type="text"
          placeholder="Dec 20XY"
          onChange={handleExperienceInfoChange}
          name="to"
          value={experienceInfo.to}
          />
      </label>
    </form>
  );
}