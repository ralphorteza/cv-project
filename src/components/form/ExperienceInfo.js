import React from "react"

export default function ExperienceInfo({id, data, handleData, deleteSubForm}) {

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
          value={data.company}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          placeholder="San Jose, Calif"
          onChange={(e) => handleData(e, id)}
          name="location"
          value={data.location}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          placeholder="Team Manager"
          onChange={(e) => handleData(e, id)}
          name="position"
          value={data.position}
        />
      </label>
      <label>
        From:
        <input
          type="text"
          placeholder="Aug 20XX"
          onChange={(e) => handleData(e, id)}
          name="from"
          value={data.from}
        />
      </label>
      <label>
        To:
        <input
          type="text"
          placeholder="Dec 20XY"
          onChange={(e) => handleData(e, id)}
          name="to"
          value={data.to}
          />
      </label>
    </form>
  );
}