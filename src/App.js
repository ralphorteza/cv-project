import React from "react";
import GeneralInfo from "./components/form/GeneralInfo";
import EducationInfo from "./components/form/EducationInfo";
import ExperienceInfo from "./components/form/ExperienceInfo";
import CVPreview from "./components/CVPreview";
import "./App.css";

export default function App() {
  // const [cvData, setCVData] = React.useState([]);

  // function handleData() {
    
  // }
  const [genInfo, setGenInfo] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
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
  }


  const [eduInfo, setEduInfo] = React.useState({
    university:"",
    location:"",
    degree:"",
    from:"",
    to:"",
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

  const cvData = {
    genInfo,
    eduInfo,
    experienceInfo,
  };

  console.log(cvData)
  
  return (
    <div>
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

      <h2>Preview</h2>
      <CVPreview/>
    </div>
  );
}