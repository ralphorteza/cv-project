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
          placeholder="San Jose, California"
          onChange={handleGenInfoChange}
          name="address"
          value={genInfo.address}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          placeholder="123-436-3333"
          onChange={handleGenInfoChange}
          name="phoneNumber"
          value={genInfo.phoneNumber}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="johnDoe@email.xyz"
          onChange={handleGenInfoChange}
          name="email"
          value={genInfo.email}
          />
      </label>
    </form>
  );
}

