import React from "react";

export default function EducationInfo(props) {
  const [eduInfo, setEduInfo] = React.useState({
    university:"",
    location:"",
    degree:"",
    from:"",
    to:"",
  });

  function handleChange(e) {
    console.log(e);
    const {name, value} = e.target;

    setEduInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })
  }

  return(
    <form className="education-info">
      <label>
        University:
        <input
          type="text"
          placeholder="San Jose State University"
          onChange={handleChange}
          name="university"
          value={eduInfo.university}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          placeholder="San Jose, Calif"
          onChange={handleChange}
          name="location"
          value={eduInfo.location}
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          placeholder="Computer Science"
          onChange={handleChange}
          name="degree"
          value={eduInfo.degree}
        />
      </label>
      <label>
        from:
        <input
          type="text"
          placeholder="Aug 20XX"
          onChange={handleChange}
          name="from"
          value={eduInfo.from}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="Dec 20XY"
          onChange={handleChange}
          name="to"
          value={eduInfo.to}
          />
      </label>
    </form>
  );
}