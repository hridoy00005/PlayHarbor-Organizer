import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { api, auth } from "../api";
import { useDispatch } from "react-redux";
import { MasterButton, MasterInput } from "../components/shared";

// import { notify } from "../utils";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [forgotpassword, setForgotpassword] = useState({
    email: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForgotpassword({ ...forgotpassword, email: value });
  };

  const onSubmit = async () => {
    try {
      //   const result = await api.post(auth.forgotPassword, forgotpassword);
      //     notify(result);
      //     if(result.success){
      //       notify(result);
      //   }else{
      //     notify(result);
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  const disabled = !(
    forgotpassword.email.indexOf("@") >= 0 &&
    forgotpassword.email.indexOf(".com") >= 0
  );

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className="border w-[70%] md:w-[40%] rounded-lg shadow">
        <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t-lg">
          Forgot Password?
        </h2>
        <div className="p-6">
          <MasterInput
            label="Enter Your Email For Verification"
            type="email"
            placeholder="Enter Your Email"
            className="master-input mt-2 mb-3 w-full"
            name="email"
            value={forgotpassword.email}
            onChange={onChange}
          />

          <MasterButton
            btnText="Verification"
            className="event-btn-primary w-full mt-5 py-3 tracking-wide"
            onClick={onSubmit}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
