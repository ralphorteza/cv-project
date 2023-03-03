import React from "react";
import CVPreview from "./components/CVPreview";
// import { nanoid } from "nanoid";
import "./App.css";

export default function App() {

  /* Find a way to have multiple instances of ExperienceInfo */
  const [data, setData] = React.useState(
    () => JSON.parse(localStorage.getItem("data")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);

  function handleData(e) {
    console.log(e)
    // if (data.some(elem => elem.id === e.id)) {
    //   console.log("true!")
    // } else {
    //   setData(prevData => {
    //     const newItem =
    //   })
    // }
  }

  // function handleData(e) {
  //     const {value, name} = e.target;
  //     setData( prevInfo => {
  //       return {
  //         ...prevInfo,
  //         [name]: value
  //       }
  //     });
  // }
  console.log(data)
  return (
    <div>
      <CVPreview
        handleData={handleData}
        data={data}
      />
    </div>
  );
}