import React from "react";
import FormOverview from "./components/FormOverview";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const initialState = [
    {category:"general", id: nanoid(), firstName:"", lastName:"", address:"", phone:"", email:""},
    {category:"education", id: nanoid(), university:"", location:"", degree:"", from:"", to:""},
    {category:"experience", id: nanoid(), company:"", location:"", position:"", from:"", to:""}
  ]
  /* Find a way to have multiple instances of ExperienceInfo */
  const [data, setData] = React.useState(
    () => JSON.parse(localStorage.getItem("data")) || initialState
  );
  
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);

  function handleData(e) {

  }

  // function handleData(e) {
  //   // console.log(e.id)
  //   const obj = e;

  //   if (data.length === 0) {
  //     return setData(prevData => {
  //       return [obj, ...prevData];
  //     });
  //   }

  //   if (data.some( element => element.id === obj.id)) {
  //     return setData(prevData => {
  //       const array = [];
  //       prevData.forEach( prevElem => {
  //         if (prevElem.id === obj.id) {
  //           array.push(obj);
  //         } else {
  //           array.push(prevElem);
  //         }
  //       });
  //       return array;
  //     });
  //   } else {
  //     return setData(prevData => {
  //       return [obj, ...prevData];
  //     });
  //   }

  // }

  return (
    <div>
      <FormOverview
        handleData={handleData}
        data={data}
      />
    </div>
  );
}