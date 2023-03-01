import React from "react";
import GeneralInfo from "./components/form/GeneralInfo";
import "./App.css";

export default function App() {

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
    // console.log(`value: ${value}, name:${name}`)
    setGenInfo( prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })
  }

  return (
    <div>
      <GeneralInfo
        handleChange={handleChange}
        genInfo={genInfo}
      />

      <h1>hello {genInfo.firstName} {genInfo.lastName}</h1>
    </div>
  );
}