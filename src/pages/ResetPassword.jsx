import React, { useState } from "react";
import { MasterButton, MasterInput } from "../components/shared";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setResetPassword({ ...resetPassword, [name]: value });
  };

  const onUpdate = async()=>{
    try {
        
    } catch (error) {
        
    }
  }
  const disabled = !resetPassword.newPassword || !resetPassword.confirmPassword;

  return (
    <div className=" w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="border w-[70%] md:w-[40%] rounded-lg shadow">
        <h2 className="bg-gray-400 bg-opacity-30 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t-lg">
          Reset Password
        </h2>
        <div className="p-6">
          <MasterInput
            label="New Password"
            type="password"
            placeholder="Enter New Password"
            className="master-input mt-2 mb-3 bg-transparent"
            name="newPassword"
            value={resetPassword.newPassword}
            onChange={onChange}
          />

          <MasterInput
            label="Confirm New Password"
            type="password"
            placeholder="Confirm New Password"
            className="master-input mt-2 mb-3 bg-transparent"
            name="confirmPassword"
            value={resetPassword.confirmPassword}
            onChange={onChange}
          />

          <MasterButton
            btnText="Update"
            className="event-btn-primary w-full mt-5 py-3 tracking-wide bg-opacity-30 hover:bg-opacity-60"
            onClick={onUpdate}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
