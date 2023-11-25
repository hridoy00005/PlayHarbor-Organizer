import React from "react";
import { MasterButton } from "../components/shared";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const handlLogout = () => {
    dispatch(logoutreducer());
  };
  return (
    <div>
      <h1>Profile</h1>
      <MasterButton
        btnText="Logout"
        className="event-btn-primary w-full mt-5 py-3 tracking-wide"
        onClick={handlLogout}
      />
    </div>
  );
};

export default Profile;
