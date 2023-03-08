import React from "react";
import FormOverview from "./components/FormOverview";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const initialState = [
    {category:"general", id: nanoid(), firstName:"ralph", lastName:"orteza", address:"", phone:"1234", email:""},
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

  function handleData(e, id) {
    const {value, name} = e.target;
    setData(prevData => {
      const newArray = [];

      for (let i = 0; i < prevData.length; i++) {
        const oldData = prevData[i];

        if (oldData.id === id) {
          newArray.push({...oldData, [name]: value});
        } else {
          newArray.push(oldData);
        }
      }

      return newArray;
    });
  }

  return (
    <div>
      <FormOverview
        handleData={handleData}
        data={data}
      />
    </div>
  );
}