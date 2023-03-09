import React from "react"

export default function ExperienceInfo({id, experience, handleData, deleteSubForm}) {

  return(
    <form className="experience-info">
      <button type="button" onClick={(e) => deleteSubForm(e, id)}>del</button>
      <label>
        Company:
        <input
          type="text"
          placeholder="SRE"
          onChange={(e) => handleData(e, id)}
          name="company"
          value={experience.company}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          placeholder="San Jose, Calif"
          onChange={(e) => handleData(e, id)}
          name="location"
          value={experience.location}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          placeholder="Team Manager"
          onChange={(e) => handleData(e, id)}
          name="position"
          value={experience.position}
        />
      </label>
      <label>
        From:
        <input
          type="text"
          placeholder="Aug 20XX"
          onChange={(e) => handleData(e, id)}
          name="from"
          value={experience.from}
        />
      </label>
      <label>
        To:
        <input
          type="text"
          placeholder="Dec 20XY"
          onChange={(e) => handleData(e, id)}
          name="to"
          value={experience.to}
          />
      </label>
    </form>
  );
}