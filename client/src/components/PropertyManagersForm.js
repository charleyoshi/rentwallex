import React, { useState } from "react";
import "../Css/propertyManagerForm.css";

const PropertyManagementSoftwareOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
];

const PropertyManagerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    city: "",
    province: "",
    email: "",
    phoneNumber: "",
    totalUnitsManaged: "",
    propertyManagementSoftware: "",
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

    if (formData.email && !formData.email.includes("@")) {
      newErrors.email = "Email must be valid";
      isValid = false;
    }

    if (formData.phoneNumber && isNaN(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be a valid number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="property-manager-form-container">
      <h2>Property Manager Information Form</h2>
      <form onSubmit={handleSubmit} className="property-manager-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name* </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name* </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessName">Business Name </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City* </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province* </label>
          <input
            type="text"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email* </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number* </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="totalUnitsManaged">Units Managed* </label>
          <input
            type="text"
            id="totalUnitsManaged"
            name="totalUnitsManaged"
            value={formData.totalUnitsManaged}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyManagementSoftware">
            Property Management Software{" "}
          </label>
          <select
            id="propertyManagementSoftware"
            name="propertyManagementSoftware"
            value={formData.propertyManagementSoftware}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            {PropertyManagementSoftwareOptions.map((option) => (
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

export default PropertyManagerForm;
