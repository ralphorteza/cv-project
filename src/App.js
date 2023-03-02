import React from "react";
import GeneralInfo from "./components/form/GeneralInfo";
import EducationInfo from "./components/form/EducationInfo";
import "./App.css";

export default function App() {

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
    </div>
  );
}