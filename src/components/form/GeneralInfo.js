import React from "react";

export default function GeneralInfo({data, handleData}) {
  const general = data.find(section => section.category === "general");
  const id = general.id;

  return(
    <form className="general-info">
      <label>
        First Name:
        <input
          type="text"
          placeholder="John"
          onChange={(e)=>handleData(e,id)}
          name="firstName"
          value={general.firstName}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          placeholder="Doe"
          onChange={(e)=>handleData(e,id)}
          name="lastName"
          value={general.lastName}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          placeholder="123 Elsewhere st"
          onChange={(e)=>handleData(e,id)}
          name="address"
          value={general.address}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          placeholder="123-456-789"
          onChange={(e)=>handleData(e,id)}
          name="phone"
          value={general.phone}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          placeholder="JohnDoe@email.zxy"
          onChange={(e)=>handleData(e,id)}
          name="email"
          value={general.email}
        />
      </label>
    </form>
  );
}

