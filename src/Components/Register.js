import React, { useState } from "react";
import '../css/Register.css';
import Otp from './Otp';
export default function Register() {
  const statesAndUTs = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh",
    "Jammu and Kashmir",
  ];

  const [userType, setUserType] = useState("");
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    confirmPassword: "",
    currentAddress: {
      country: "",
      state: "",
      city: "",
      addressLine: "",
    },
    permanentAddress: {
      country: "",
      state: "",
      city: "",
      addressLine: "",
    },
  });

  const [sameAsCurrent, setSameAsCurrent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name.startsWith("currentAddress.") ||
      name.startsWith("permanentAddress.")
    ) {
      const [addressType, field] = name.split(".");
      setFormData({
        ...formData,
        [addressType]: {
          ...formData[addressType],
          [field]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSameAsCurrent = () => {
    setSameAsCurrent(!sameAsCurrent);
    if (!sameAsCurrent) {
      setFormData({
        ...formData,
        permanentAddress: { ...formData.currentAddress },
      });
    } else {
      setFormData({
        ...formData,
        permanentAddress: {
          country: "",
          state: "",
          city: "",
          addressLine: "",
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form data:", formData);
    // Add form submission logic here
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Register</h1>
        <div className="row mb-3 justify-content-center">
          {/* Personal Information */}
          <div className="row mb-3 justify-content-center">
            <div className="col-md-5">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>
              {/* <Otp/> */}
            <div className="col-md-5">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="confirm-password" className="form-label">
                confirm password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                name="confirm-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
        </div>
        {/* Current and Permanent Address Section */}
        <div className="row justify-content-center">
          <div className="col-md-5">
            {/* Current Address */}
            <h3>Current Address</h3>
            <div className="form-check mb-3">
              <label>current address</label>
            </div>
            <div className="mb-3">
              <label htmlFor="currentCountry" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="currentCountry"
                name="currentAddress.country"
                value={formData.currentAddress.country}
                onChange={handleChange}
                placeholder="Enter your current country"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currentState" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="currentState"
                name="currentAddress.state"
                value={formData.currentAddress.state}
                onChange={handleChange}
                placeholder="Enter your current state"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currentCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="currentCity"
                name="currentAddress.city"
                value={formData.currentAddress.city}
                onChange={handleChange}
                placeholder="Enter your current city"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currentAddressLine" className="form-label">
                Address Line
              </label>
              <input
                type="text"
                className="form-control"
                id="currentAddressLine"
                name="currentAddress.addressLine"
                value={formData.currentAddress.addressLine}
                onChange={handleChange}
                placeholder="Enter your current address line"
                required
              />
            </div>
          </div>

          <div className="col-md-5">
            {/* Permanent Address */}
            <h3>Permanent Address</h3>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="sameAsCurrent"
                checked={sameAsCurrent}
                onChange={handleSameAsCurrent}
              />
              <label className="form-check-label" htmlFor="sameAsCurrent">
                Permanent address same as current address
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="permanentCountry" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="permanentCountry"
                name="permanentAddress.country"
                value={formData.permanentAddress.country}
                onChange={handleChange}
                placeholder="Enter your permanent country"
                disabled={sameAsCurrent}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="permanentState" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="permanentState"
                name="permanentAddress.state"
                value={formData.permanentAddress.state}
                onChange={handleChange}
                placeholder="Enter your permanent state"
                disabled={sameAsCurrent}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="permanentCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="permanentCity"
                name="permanentAddress.city"
                value={formData.permanentAddress.city}
                onChange={handleChange}
                placeholder="Enter your permanent city"
                disabled={sameAsCurrent}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="permanentAddressLine" className="form-label">
                Address Line
              </label>
              <input
                type="text"
                className="form-control"
                id="permanentAddressLine"
                name="permanentAddress.addressLine"
                value={formData.permanentAddress.addressLine}
                onChange={handleChange}
                placeholder="Enter your permanent address line"
                disabled={sameAsCurrent}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group p-3">
          <label htmlFor="userType" className="form-label">
            Select User Type:
          </label>
          <select
            className="form-control mb-3"
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            required
          >
            <option value="" disabled>
              Select User Type
            </option>
            <option value="BHMSStudent">BHMS Student</option>
            <option value="HomeopathicDoctor">Homeopathic Doctor</option>
            <option value="Practitioner with Non-Indian/International Degrees">
              Practitioner with Non-Indian/International Degrees
            </option>
          </select>
          {userType === "BHMSStudent" && (
            <div className="row mb-3 justify-content-center">
              <div className="col-md-5">
                <label htmlFor=" Univeristyname" className="form-label">
                  Univeristy name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=" Univeristyname"
                  name=" Univeristyname"
                  value={formData.Univeristyname}
                  onChange={handleChange}
                  placeholder="Enter your university"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="Currentyear" className="form-label">
                  Current year
                </label>
                <select
                  className="form-control"
                  id="Currentyear"
                  name="Currentyear"
                  value={formData.Currentyear}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select year
                  </option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor="Alternatmobile" className="form-label">
                  Alternate Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="Alternatmobile"
                  name="Alternatmobile"
                  value={formData.Alternatmobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>
          )}
          {userType === "HomeopathicDoctor" && (
            <div className="row mb-3 justify-content-center">
              <div className="col-md-5">
                <label htmlFor="Qualification" className="form-label">
                  Qualification
                </label>
                <select
                  className="form-control"
                  id="Qualification"
                  name="Qualification"
                  value={formData.Qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your qualification
                  </option>
                  <option value="BHMS">BHMS</option>
                  <option value="MD">MD</option>
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor=" RegistrationNumber" className="form-label">
                  RegistrationNumber
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  RegistrationNumber"
                  name="  RegistrationNumber"
                  value={formData.RegistrationNumber}
                  onChange={handleChange}
                  placeholder="Enter your RegistrationNumber"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="StateRegistred" className="form-label">
                  StateRegistred
                </label>
                <select
                  className="form-control"
                  id="StateRegistred"
                  name="StateRegistred"
                  value={formData.StateRegistred}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your State/UT</option>
                  {statesAndUTs.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor=" University" className="form-label">
                  University
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  University"
                  name="  University"
                  value={formData.University}
                  onChange={handleChange}
                  placeholder="Enter your University"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor=" Collage" className="form-label">
                  Collage
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  Collage"
                  name="  Collage"
                  value={formData.Collage}
                  onChange={handleChange}
                  placeholder="Enter your Collage"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor=" Currentjob" className="form-label">
                  Current job
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  Currentjob"
                  name=" Currentjob"
                  value={formData.Currenjob}
                  onChange={handleChange}
                  placeholder="Enter your Current job"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="Alternatmobile" className="form-label">
                  Alternate Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="Alternatmobile"
                  name="Alternatmobile"
                  value={formData.Alternatmobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>
          )}
          {userType ===
            "Practitioner with Non-Indian/International Degrees" && (
            <div className="row mb-3 justify-content-center">
              <div className="col-md-5">
                <label htmlFor="Qualification" className="form-label">
                  Qualification
                </label>
                <select
                  className="form-control"
                  id="Qualification"
                  name="Qualification"
                  value={formData.Qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your qualification
                  </option>
                  <option value="BHMS">BHMS</option>
                  <option value="MD">MD</option>
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor=" RegistrationNumber" className="form-label">
                  RegistrationNumber
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  RegistrationNumber"
                  name="  RegistrationNumber"
                  value={formData.RegistrationNumber}
                  onChange={handleChange}
                  placeholder="Enter your RegistrationNumber"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor=" RegistredCouncil" className="form-label">
                  RegistredCouncil
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  RegistredCouncil"
                  name="  RegistredCouncil"
                  value={formData.RegistredCouncil}
                  onChange={handleChange}
                  placeholder="Enter your RegistredCouncil"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor=" CountryRegistred" className="form-label">
                  Country Registred with
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  CountryRegistred"
                  name="  CountryRegistred"
                  value={formData.CountryRegistred}
                  onChange={handleChange}
                  placeholder="Enter your CountryRegistred"
                  required
                />
              </div>
              <div className="col-md-5">
                <label
                  htmlFor="InstitutionAttenedForHomeopathy"
                  className="form-label"
                >
                  InstitutionAttenedForHomeopathy
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=" InstitutionAttenedForHomeopathy"
                  name="InstitutionAttenedForHomeopathy"
                  value={formData.InstitutionAttenedForHomeopathy}
                  onChange={handleChange}
                  placeholder="Enter your InstitutionAttenedForHomeopathy"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor=" Currentjob" className="form-label">
                  Current job
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="  Currentjob"
                  name=" Currentjob"
                  value={formData.Currenjob}
                  onChange={handleChange}
                  placeholder="Enter your Current job"
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="Alternatmobile" className="form-label">
                  Alternate Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="Alternatmobile"
                  name="Alternatmobile"
                  value={formData.Alternatmobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* <div className="row mb-3 justify-content-center">
          <div className="col-md-5">
            <label htmlFor=" Qualification" className="form-label">
               Qualification
            </label>
            <input
              type="text"
              className="form-control"
              id="  Qualification"
              name="  Qualification"
              value={formData. Qualification}
              onChange={handleChange}
              placeholder="Enter your qualifiaction"
              required
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="Currentyear" className="form-label">
              Current year
            </label>
            <select
              className="form-control"
              id="Currentyear"
              name="Currentyear"
              value={formData.Currentyear}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select year
              </option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="intern">Intern</option>
            </select>
          </div>

          <div className="col-md-5">
            <label htmlFor="Alternatmobile" className="form-label">
              Alternate Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="Alternatmobile"
              name="Alternatmobile"
              value={formData.Alternatmobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
        </div> */}

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-register btn-warning">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
