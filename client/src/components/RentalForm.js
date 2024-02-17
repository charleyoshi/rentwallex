import React, { useState } from "react";
import "../Css/rentalForm.css";

const EmploymentStatusOptions = [
  "Full-time",
  "Part-time",
  "Seeking opportunities currently",
  "Retired",
  "Prefer not to say",
];

const PaymentFrequencyOptions = [
  "Weekly",
  "Bi-weekly",
  "Semi-monthly",
  "Monthly",
];

const RentalForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    rentalCost: "",
    propertyAddress: "",
    propertyManagerName: "",
    employmentStatus: "",
    paymentFrequency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission, e.g., send data to server
      console.log(formData);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must be valid";
      isValid = false;
    }

    if (isNaN(formData.rentalCost) || formData.rentalCost === "") {
      newErrors.rentalCost = "Rental cost must be a number";
      isValid = false;
    }

    if (formData.propertyAddress === "") {
      newErrors.propertyAddress = "Property address is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="rental-form-container">
      <h2>Rental Information Form</h2>
      <form onSubmit={handleSubmit} className="rental-form">
        <div className="form-group">
          <label htmlFor="email">Email* </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="rentalCost">Rental Cost* </label>
          <input
            type="text"
            id="rentalCost"
            name="rentalCost"
            value={formData.rentalCost}
            onChange={handleChange}
            required
          />
          {errors.rentalCost && <p className="error">{errors.rentalCost}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="propertyAddress">Property Address* </label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            required
          />
          {errors.propertyAddress && (
            <p className="error">{errors.propertyAddress}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="propertyManagerName">Property Manager Name </label>
          <input
            type="text"
            id="propertyManagerName"
            name="propertyManagerName"
            value={formData.propertyManagerName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employmentStatus">Employment </label>
          <select
            id="employmentStatus"
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            {EmploymentStatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentFrequency">Payment Frequency </label>
          <select
            id="paymentFrequency"
            name="paymentFrequency"
            value={formData.paymentFrequency}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            {PaymentFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RentalForm;
