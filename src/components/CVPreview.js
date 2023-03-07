import React from "react"
import GeneralInfo from "./form/GeneralInfo";
import EducationInfo from "./form/EducationInfo";
import ExperienceInfo from "./form/ExperienceInfo";

export default function CVPreview(props) {
  const {data, handleData} = props;
  // console.log(data)
  // console.log(data.genInfo)
  const [genInfo, setGenInfo] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    id: "001a",
  });

  function handleGenInfoChange(e) {
    // console.log(e);
    const {value, name} = e.target
    // console.log(`value: ${value}, name:${name}`)
    setGenInfo( prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })

    handleData(genInfo);
  }


  const [eduInfo, setEduInfo] = React.useState({
    university:"",
    location:"",
    degree:"",
    from:"",
    to:"",
    id: "edu001"
  });

  function handleEduInfoChange(e) {
    // console.log(e);
    const {name, value} = e.target;

    setEduInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })

    handleData(eduInfo);
  }

  const [experienceInfo, setExperienceInfo] = React.useState({
    company:"",
    location:"",
    position:"",
    from:"",
    to:"",
  });

  function handleExperienceInfoChange(e) {
    // console.log(e);
    const {name, value} = e.target;

    setExperienceInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })
  }

  return (
    <div className="cv-preview">
            <h3>General Information</h3>
      <GeneralInfo
        handleGenInfoChange={handleGenInfoChange}
        genInfo={genInfo}
      />
      <h3>Education</h3>
      <EducationInfo
        handleEduInfoChange={handleEduInfoChange}
        eduInfo={eduInfo}
      />
      <h3>Experience</h3>
      <ExperienceInfo
        handleExperienceInfoChange={handleExperienceInfoChange}
        experienceInfo={experienceInfo}
      />
    </div>
  );
}