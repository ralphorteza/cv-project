import React from "react";

export default function GeneralInfo(props) {
  const {genInfo, handleGenInfoChange} = props;
      
  return(
    <form className="general-info">
      <label>
        First Name:
        <input
          type="text"
          placeholder="John"
          onChange={handleGenInfoChange}
          name="firstName"
          value={genInfo.firstName}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          placeholder="Doe"
          onChange={handleGenInfoChange}
          name="lastName"
          value={genInfo.lastName}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          placeholder="123 Elsewhere st"
          onChange={handleGenInfoChange}
          name="address"
          value={genInfo.address}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          placeholder="123-456-789"
          onChange={handleGenInfoChange}
          name="phone"
          value={genInfo.phone}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="JohnDoe@email.zxy"
          onChange={handleGenInfoChange}
          name="email"
          value={genInfo.email}
        />
      </label>
    </form>
  );
}

