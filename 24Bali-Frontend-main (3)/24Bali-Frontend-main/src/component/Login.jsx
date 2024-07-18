import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, reset } from "../features/authSlice";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(loginUser({ Username, Password }));
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-[#37B9C2] to-[#98C3C4] min-h-screen w-full h-[100vh]">
      <div className="w-[25%] h-[50%]">
        <form
          onSubmit={Auth}
          className=" bg-white  text-[#F09F0C] shadow-lg rounded-lg p-6 h-full"
        >
          <div className="flex justify-center">
            <p className="font-bold text-center  text-[#F09F0C] text-3xl">
              Login
            </p>
          </div>
          <div className="mt-6 ">
            <p htmlFor="" className="font-semibold  text-black text-xs">
              ID
            </p>
            <div className="control w-full">
              <input
                type="text"
                className="input border w-full p-2 rounded-lg  border-gray-300 "
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="3173071709020002"
                required
              />
            </div>
          </div>
          <div className="mt-1">
            <p htmlFor="" className="font-semibold  text-black text-xs">
              Password
            </p>
            <div className="control w-full">
              <input
                type="password"
                className="input border w-full p-2 rounded-lg  border-gray-300 "
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type Here"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center text-xs mt-2 text-[#F09F0C]">
            <button>Forgot Password?</button>
            <Link to={"/signup"}>Sign Up</Link>
          </div>
          <div className=" mt-6">
            <button
              type="submit"
              className="w-full p-2 bg-[#F09F0C] text-white rounded-lg hover:bg-[#ffbd43] "
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          {isError && (
            <div className="flex justify-center">
              <p className=" text-red-600 px-2 py-1 text-sm">
                {message}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
