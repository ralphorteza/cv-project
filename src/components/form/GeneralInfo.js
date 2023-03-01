import React from "react";

export default function GeneralInfo(props) {
    // React.useEffect(() => {
    //   props.onChange({
    //     inputs
    //   });
    // }, [inputs])
    // const setInput(e.target.value) = props.setInput(e.target.value);

    return(
      <form className="general-info">
        <label>
          First Name:
          <input
            type="text"
            placeholder="John"
            onChange={(e) => props.handleChange(e)}
            name="firstName"
            value={props.genInfo.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Doe"
            onChange={(e) => props.handleChange(e)}
            name="lastName"
            value={props.genInfo.lastName}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            placeholder="San Jose, California"
            onChange={(e) => props.handleChange(e)}
            name="address"
            value={props.genInfo.address}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            placeholder="123-436-3333"
            onChange={(e) => props.handleChange(e)}
            name="phoneNumber"
            value={props.genInfo.phoneNumber}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            placeholder="johnDoe@email.xyz"
            onChange={(e) => props.handleChange(e)}
            name="email"
            value={props.genInfo.email}
            />
        </label>
      </form>
    );
}

