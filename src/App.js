import React from "react";
import CVPreview from "./components/CVPreview";
// import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const initialState = []
  /* Find a way to have multiple instances of ExperienceInfo */
  const [data, setData] = React.useState(
    () => JSON.parse(localStorage.getItem("data")) || initialState
  );
  // const [data, setData] = React.useState(
  //   () => JSON.parse(localStorage.getItem("data")) || [
  //     {genInfo: {id:"", firstName:"", lastName:"", address:"", phone: ""}}
  //   ]
  // );
  
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);

  function handleData(e) {
    // console.log(e.id)
    const obj = e;

    console.log(data.length)
    if (data.length === 0) {
      return setData(prevData => {
        return [obj, ...prevData];
      });
    }

    if (data.some( element => element.id === obj.id)) {
      return setData(prevData => {
        const array = [];
        prevData.forEach( prevElem => {
          if (prevElem.id === obj.id) {
            array.push(obj);
          } else {
            array.push(prevElem);
          }
        });
        return array;
      });
    }

  }
  // console.log(data)
  // function handleData(e) {
  //     const {value, name} = e.target;
  //     setData( prevInfo => {
  //       return {
  //         ...prevInfo,
  //         [name]: value
  //       }
  //     });
  // }

  return (
    <div>
      <CVPreview
        handleData={handleData}
        data={data}
      />
    </div>
  );
}