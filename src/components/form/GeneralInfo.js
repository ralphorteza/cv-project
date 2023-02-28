import React from "react";

export default function GeneralInfo() {
    const [genInfo, setGenInfo] = React.useState({
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });

    function handleChange(event) {
      console.log(event);
      const {name, value} = event.target;

      setGenInfo(prevInfo => {
        return {
          ...prevInfo,
          [name]: value
        }
      });
    }

    return(
      <form className="general-info">
        <label>
          First Name:
          <input
            type="text"
            placeholder="John"
            onChange={handleChange}
            name="firstName"
            value={genInfo.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Doe"
            onChange={handleChange}
            name="lastName"
            value={genInfo.lastName}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            placeholder="San Jose, California"
            onChange={handleChange}
            name="address"
            value={genInfo.address}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            placeholder="123-436-3333"
            onChange={handleChange}
            name="phoneNumber"
            value={genInfo.phoneNumber}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            placeholder="johnDoe@email.xyz"
            onChange={handleChange}
            name="email"
            value={genInfo.email}
            />
        </label>
      </form>
    );
}

