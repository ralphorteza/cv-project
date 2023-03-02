import React from "react"

export default function ExperienceInfo() {

  const [experienceInfo, setEduInfo] = React.useState({
    company:"",
    location:"",
    position:"",
    from:"",
    to:"",
  });

  function handleExperienceInfoChange(e) {
    // console.log(e);
    const {name, value} = e.target;

    setEduInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })
  }

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
        position:
        <input
          type="text"
          placeholder="Team Manager"
          onChange={handleExperienceInfoChange}
          name="position"
          value={experienceInfo.position}
        />
      </label>
      <label>
        from:
        <input
          type="text"
          placeholder="Aug 20XX"
          onChange={handleExperienceInfoChange}
          name="from"
          value={experienceInfo.from}
        />
      </label>
      <label>
        to:
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