import React, { useState } from "react";
import { MasterButton, MasterInput } from "../components/shared";
import { api, auth } from "../api";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [sellerData, setSellerData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerData({ ...sellerData, [name]: value });
  };

  const onRegister = async () => {
    try {
      const res = await api.post(auth.registration, sellerData);
      console.log(res.msg);
      if(res.success){
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disabled =
    !sellerData.name ||
    !sellerData.phone ||
    !sellerData.email ||
    !sellerData.password ||
    sellerData.password !== sellerData.confirmPassword;

  return (
    <div className="bg-gray-200 min-h-screen grid grid-cols-1 md:grid-cols-3">
      <div className="col-start-2 my-5 ">
        <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t-lg">
          Registration Form
        </h2>

        <div className="shadow-lg rounded-lg p-5">
          <MasterInput
            label="Name"
            type="text"
            placeholder="Enter Your Name"
            className="master-input mb-2"
            name="name"
            value={sellerData.name}
            onChange={handleChange}
          />
         
          <MasterInput
            label="Phone"
            type="number"
            placeholder="Enter Phone"
            className="master-input mb-2"
            name="phone"
            value={sellerData.phone}
            onChange={handleChange}
          />
          <MasterInput
            label="Email"
            type="email"
            placeholder="Enter Email"
            className="master-input mb-2"
            name="email"
            value={sellerData.email}
            onChange={handleChange}
          />
          <MasterInput
            label="Password"
            type="password"
            placeholder="Enter Password"
            className="master-input mb-2"
            name="password"
            value={sellerData.password}
            onChange={handleChange}
          />
          <MasterInput
            label="Confirm Password"
            type="password"
            placeholder="Enter Same Password"
            className="master-input mb-2"
            name="confirmPassword"
            value={sellerData.confirmPassword}
            onChange={handleChange}
          />

          <MasterButton
            btnText="SUBMIT"
            className="event-btn-primary w-full mt-5 py-3 tracking-wide"
            onClick={onRegister}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
