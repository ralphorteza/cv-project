import React from "react";
import CVPreview from "./components/CVPreview";
// import { nanoid } from "nanoid";
import "./App.css";

export default function App() {

  /* Find a way to have multiple instances of ExperienceInfo */
  const [data, setData] = React.useState(
    () => JSON.parse(localStorage.getItem("data")) || []
  );

  function handleData() {}

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);
  
  return (
    <div>
      <CVPreview />
    </div>
  );
}