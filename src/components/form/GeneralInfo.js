import React from "react";
export default function GeneralInfo() {
    return(
      <form className="general-info">
        <label>
          First Name:
          <input type="text" placeholder="hello"/>
        </label>
        <label>
          Last Name:
          <input type="text" placeholder="hello"/>
        </label>
        <label>
          Address:
          <input type="text" placeholder="hello"/>
        </label>
        <label>
          Phone Number:
          <input type="text" placeholder="hello"/>
        </label>
        <label>
          Email:
          <input type="text" placeholder="hello"/>
        </label>
        <label>
          Objective:
          <input type="text" placeholder="hello"/>
        </label>
      </form>
    );
}

