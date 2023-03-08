import React from "react";

export default function EducationInfo({data, handleData}) {
  const education = data.find(section => section.category === "education");
  const id = education.id;

  return(
    <form className="education-info">
      <label>
        University:
        <input
          type="text"
          placeholder="San Jose State University"
          onChange={(e)=>handleData(e, id)}
          name="university"
          value={education.university}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          placeholder="San Jose, Calif"
          onChange={(e)=>handleData(e, id)}
          name="location"
          value={education.location}
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          placeholder="Computer Science"
          onChange={(e)=>handleData(e, id)}
          name="degree"
          value={education.degree}
        />
      </label>
      <label>
        from:
        <input
          type="text"
          placeholder="Aug 20XX"
          onChange={(e)=>handleData(e, id)}
          name="from"
          value={education.from}
        />
      </label>
      <label>
        to:
        <input
          type="text"
          placeholder="Dec 20XY"
          onChange={(e)=>handleData(e, id)}
          name="to"
          value={education.to}
          />
      </label>
    </form>
  );
}