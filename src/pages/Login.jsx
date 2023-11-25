import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MasterButton from "../components/shared/MasterButton";
import { MasterInput } from "../components/shared";
import { api, auth } from "../api";
import { useDispatch } from "react-redux";
import { loginReducer } from "../store/reducers/authReducer";

const Login = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const res = await api.post(auth.login, credential);
      console.log(res.msg);
      if(res.success){
        dispatch(loginReducer({user: res?.user, token:res?.token}))
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disabled = !credential.email || !credential.password;

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="col-start-2 my-5 w-[33%]">
        <h2 className="bg-gray-700 text-white text-2xl md:text-3xl text-center py-4 font-semibold rounded-t-lg">
          Login Form
        </h2>
        <div className="p-5 shadow-lg rounded-lg">
          <MasterInput
            label="Email"
            type="email"
            placeholder="Enter Email"
            className="master-input mb-2"
            name="email"
            value={credential.email}
            onChange={handleChange}
          />

          <MasterInput
            label="Password"
            type="password"
            placeholder="Enter Password"
            className="master-input"
            name="password"
            value={credential.password}
            onChange={handleChange}
          />

          <Link
            className="text-sm text-blue-600 hover:text-blue-700 font-semibold mb-2"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>

          <MasterButton
            btnText="SIGN IN"
            className="event-btn-primary w-full mt-5 py-3 tracking-wide"
            onClick={onSubmit}
            disabled={disabled}
          />
          <Link
            className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
            to="/registration"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
