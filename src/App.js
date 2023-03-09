import React from "react";
import FormOverview from "./components/FormOverview";
import PreviewCV from "./components/PreviewCV";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const initialState = [
    {category:"general", id: nanoid(), firstName:"", lastName:"", address:"", phone:"", email:""},
    {category:"education", id: nanoid(), university:"", location:"", degree:"", from:"", to:""},
    {category:"experience", id: nanoid(), company:"", location:"", position:"", from:"", to:""}
  ]
  
  const [data, setData] = React.useState(
    () => JSON.parse(localStorage.getItem("data")) || initialState
  );

  const [displayPreview, setDisplayPreview] = React.useState(false);
  
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);

  function togglePreview() {
    setDisplayPreview( prevState => !prevState);
  }

  function handleData(e, id) {
    const {value, name} = e.target;
    
    setData(prevData => {
      return prevData.map( item => {
        if (item.id !== id) return item;
        return {...item, [name]: value};
      });
    });
  }

  function addSubForm(e) {
    const categoryType = e.target.value;
    let type;
    if (categoryType === "experience") {
      type = {
        category:"experience",
        id: nanoid(),
        company:"",
        location:"",
        position:"",
        from:"",
        to:""
      };
    } else {
      type = {
        category:"education",
        id: nanoid(),
        university:"",
        location:"",
        degree:"",
        from:"",
        to:""
      };
    }

    setData(prevData => [...prevData, type])
  }

  function deleteSubForm(e, id) {
    e.stopPropagation();
    setData(prevData => prevData.filter(item => item.id !== id));
  }

  return (
    <div>
      <FormOverview
        handleData={handleData}
        data={data}
        addSubForm={addSubForm}
        deleteSubForm={deleteSubForm}
      />
      <button onClick={togglePreview}>Show Preview</button>
      <PreviewCV
        isDisplayed={displayPreview}
        data={data}
      />
    </div>
  );
}