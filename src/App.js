import React from "react";
import GeneralInfo from "./components/form/GeneralInfo";
import EducationInfo from "./components/form/EducationInfo";
import "./App.css";

export default function App() {

  // genInfo.address, .phoneNumber, .email,
  const [genInfo, setGenInfo] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  function handleChange(e) {
    // console.log(e);
    const {value, name} = e.target
    console.log(`value: ${value}, name:${name}`)
    setGenInfo( prevInfo => {
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
        handleChange={handleChange}
        genInfo={genInfo}
      />
      <h3>Education</h3>
      <EducationInfo
        // handleChange={handleChange}
        // eduInfo={eduInfo}
      />
    </div>
  );
}