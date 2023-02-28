// import React, { Component } from "react";
// import GeneralInfo from "./components/form/GeneralInfo";
// import "./App.css"
// class App extends Component {
//   render() {
//     const [genInfo, setGenInfo] = React.useState({

//     })
//     return (
//       <div>
//         <GeneralInfo />
//       </div>
//     )
//   }
// }

// export default App;

import React from "react";
import GeneralInfo from "./components/form/GeneralInfo";
import "./App.css";

export default function App() {

  return (
    <div>
      <GeneralInfo
      />
    </div>
  );
}