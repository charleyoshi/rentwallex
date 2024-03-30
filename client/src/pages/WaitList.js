import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import banner_placeholder from "../assets/banner_placeholder2.png";

import { initAutocomplete } from "../helpers/autocompleteAddress.js";
import axios from "axios";

const resetForm = {
  streetNumber: "",
  route: "",
  city: "",
  province: "",
  country: "",
  postalCode: "",
  lat: null,
  lng: null,
  propertyManagerName: "",
  rentalCost: "",
  wagePaymentFrequency: "",
  email: "",
  employmentStatus: "fulltimeemployee",
};

export default function WaitList() {
  const addressRef = useRef(null);
  const addressNextRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    initAutocomplete(addressRef.current, addressNextRef.current, updateAddress);
  }, []);

  const [formData, setFormData] = useState(resetForm);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
  };

  const updateAddress = (key, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        `https://rentwallex-server.onrender.com/api/waitlist`,
        { ...formData }
      );
      console.log(response);
      setFormData(resetForm);
      document.querySelector("#manualAddress").value = "";
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // e.g. invalid address
      } else {
        console.log(error.message);
      }
    }

    // console.log(formData)

    // if (handleValidation()) {
    //     alert("Form submitted");
    // } else {
    //     alert("Form has errors.")
    // }
  };

  return (
    <div className="waitlist">
      <Navbar />
      <div className="headlineBanner">
        <img src={banner_placeholder} alt="Use Case Banner" />
        <br />
        <br />
      </div>
      <div className="pageWrapper">
        <div className="leftAbove">
          <h3>Join Rentwallex community to revolutionize E rent payment</h3>
          <br />
          <br />
          <h4>
            Join the growing community of property managers and landlords who
            are revolutionizing rent collection with Rentwallex. Streamline your
            operations, improve cash flow, and enhance tenant satisfaction.
          </h4>
          <br />
          <br />

          <div className="leftUnder">
            <h3>Why partner with Rentwallex?</h3>
            <br />
            <h4>
              &#10003; Reduce late rent payment <br /> <br /> Minimize the risk
              of rent defaults and late payments with Rentwallex&#39;s automated
              payment system and reminder notifications.
            </h4>
            <br />
            <h4>
              &#10003; Improved Cash Flow <br /> <br /> Enjoy consistent cash
              flow with Rentwallex&#39;s reliable payment system. Say goodbye to
              unpredictable rent cycles and hello to financial stability.
            </h4>
            <br />
            <h4>
              &#10003; Enhanced Tenant Satisfaction <br /> <br /> Happy tenants
              lead to higher retention rates. With Rentwallex, you can offer a
              convenient payment solution that prioritizes tenant satisfaction,
              fostering positive relationships and long-term leases.
            </h4>
            <br />
            <h4>
              &#10003; Secure and Transparent Transactions <br /> <br /> Rest
              assured, your financial information is safe with Rentwallex. We
              prioritize security and transparency to ensure a seamless
              experience for property managers and landlords.
            </h4>
          </div>
        </div>

        <div className="right">
          <h1>Join the wait list</h1>
          <br />
          <br />
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <h2>1 - Address</h2> */}

            <div className="field">
              <h3>
                <label>Property address</label>
              </h3>
              <input
                name="propertyAddress"
                type="text"
                value={formData.propertyAddress}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="field">
              <h3>
                <label>Property manager name</label>
              </h3>
              <input
                name="propertyManagerName"
                type="text"
                value={formData.propertyManagerName}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <br />
            {/* <h2>2 - Lease</h2> */}
            <div className="field">
              <h3>
                <label>Rental cost</label>
              </h3>
              <input
                name="rentalCost"
                type="number"
                value={formData.rentalCost}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="field">
              <h3>
                <label>Wage payment frequency</label>
              </h3>
              <br />
              <br />
              <div className="form-dropdown">
                                <select
                                    value={formData.wagePaymentFrequency}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            wagePaymentFrequency: event.target.value,
                                        })
                                    }
                                >
                                    <option value="Weekly">Weekly</option>
                                    <option value="Bi-Weekly">Bi-Weeky</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="None">None</option>
                                </select>
                                <div className="arrow"></div>
                        </div>
            </div>
            <br />
            <br />
            {/* <h2>3 - Identification</h2> */}
            <div className="field ">
              <h3>
                <label>Email</label>
              </h3>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="field">
              <h3>
                <label>Employment Status</label>
              </h3>
              <br />
              <br />
              <select
               <div className="form-dropdown">
                                <select value={formData.employmentStatus} onChange={(event) => setFormData({ ...formData, employmentStatus: event.target.value })}>
                                    <option value="fulltimeemployee">Full-time employee</option>
                                    <option value="partimeemployee">Part-time employee</option>
                                    <option value='independentcontractor'>Independent contractor</option>
                                    <option value="retired">Retired</option>
                                    <option value="unemployed">Unemployed</option>
                                </select>
                                <div className="arrow"></div>
                            </div>

                        <br /><br /><br />
                        <Button text="Submit" />
                    </form>

                </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
