import React from "react";
import LayoutHome from "../components/layouts/LayoutHome";
import { useDispatch } from "react-redux";
import { logoutreducer } from "../store/reducers/authReducer";
import { MasterButton } from "../components/shared";

const Account = () => {
  const dispatch = useDispatch();

  const handlLogout = () => {
    dispatch(logoutreducer());
  };
  return (
    <LayoutHome>
      <div>
        <h1>Account</h1>
        <MasterButton
          btnText="Logout"
          className="event-btn-primary w-[100px] mt-5 py-3 tracking-wide"
          onClick={handlLogout}
        />
      </div>
    </LayoutHome>
  );
};

export default Account;
