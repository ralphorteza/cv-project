import React from "react"
import GeneralInfo from "./form/GeneralInfo";
import EducationInfo from "./form/EducationInfo";
import ExperienceInfo from "./form/ExperienceInfo";

export default function FormOverview(props) {

  return (
    <div>
      <h2>General</h2>
      <h2>Education</h2>
      <h2>Experience</h2>
    </div>
  );
}
// export default function CVPreview(props) {
//   const {data, handleData} = props;

//   const [genInfo, setGenInfo] = React.useState(data[0]);
  
//   function handleGenInfoChange(e) {
//     const {value, name} = e.target;

//     setGenInfo(prevGenInfo => {
//       return {
//         ...prevGenInfo,
//         [name]: value
//       }
//     });

//     handleData(genInfo);
//   }

//   const [eduInfo, setEduInfo] = React.useState(data[1]);

//   function handleEduInfoChange(e) {
//     const {name, value} = e.target;

//     setEduInfo(prevInfo => {
//       return {
//         ...prevInfo,
//         [name]: value
//       }
//     });

//     handleData(eduInfo);
//   }

//   const [experienceInfo, setExperienceInfo] = React.useState(data[2]);
//   function handleExperienceInfoChange(e) {
//     // console.log(e);
//     const {name, value} = e.target;

//     setExperienceInfo(prevInfo => {
//       return {
//         ...prevInfo,
//         [name]: value
//       }
//     });

//     handleData(experienceInfo);
//   }

//   return (
//     <div className="cv-preview">
//             <h3>General Information</h3>
//       <GeneralInfo
//         handleGenInfoChange={handleGenInfoChange}
//         genInfo={genInfo}
//       />
//       <h3>Education</h3>
//       <EducationInfo
//         handleEduInfoChange={handleEduInfoChange}
//         eduInfo={eduInfo}
//       />
//       <h3>Experience</h3>
//       <ExperienceInfo
//         handleExperienceInfoChange={handleExperienceInfoChange}
//         experienceInfo={experienceInfo}
//       />
//     </div>
//   );
// }