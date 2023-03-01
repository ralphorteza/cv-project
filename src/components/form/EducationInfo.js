import React from "react";

export default function EducationInfo(props) {
  const {eduInfo, handleEduInfoChange} = props;
  
  return(
    <form className="education-info">
      <label>
        University:
        <input
          type="text"
          placeholder="San Jose State University"
          onChange={handleEduInfoChange}
          name="university"
          value={eduInfo.university}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          placeholder="San Jose, Calif"
          onChange={handleEduInfoChange}
          name="location"
          value={eduInfo.location}
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          placeholder="Computer Science"
          onChange={handleEduInfoChange}
          name="degree"
          value={eduInfo.degree}
        />
      </label>
      <label>
        from:
        <input
          type="text"
          placeholder="Aug 20XX"
          onChange={handleEduInfoChange}
          name="from"
          value={eduInfo.from}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="Dec 20XY"
          onChange={handleEduInfoChange}
          name="to"
          value={eduInfo.to}
          />
      </label>
    </form>
  );
}