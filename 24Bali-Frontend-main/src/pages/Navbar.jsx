import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { waktuFormat } from "../utils/helper";
import LogoAPk from "../img/LogoApk.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { useParams } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const waktu = new Date();
  
  const [detail, setDetail] = useState ([])
  const { user } = useSelector((state) => state.auth);
  const {id} = useParams () 
  const getBeritabyId = async (idBerita) => {
    try {
      const response = await axios.get(`http://localhost:5000/laporan/${idBerita}`);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeritabyId(id);
  }, [id]);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between items-center py-2 px-4">
        <img src={LogoAPk} className="w-[50px]" alt="logo apk" />
        <div className="flex jutify-between gap-9  text-[#F09F0C] font-bold">
         
          <Link to={`/detail/${id}`}>BaliNews</Link>
          <Link to={"/balireport"}>BaliReport</Link>
          <Link to={"/Response"}>BaliResponse</Link>
          <Link to={"/HoaxCheck"}>HoaxCheck</Link>
          <Link to={"/emergency"}>BaliEmergency</Link>
        </div>
        <div className="flex justify-between  w-[400px] items-center">
          <div className="flex border rounded-md shadow-sm p-1 w-[200px]">
            <p>Cari...</p>
          </div>
          <h1 className="w-[90px] text-[#37B9C2] font-semibold drop-shadow-md ">
            {waktuFormat(waktu)}
          </h1>
          {!user ? (
            <Link
              to={"/login"}
              className="bg-[#6a4b4b] text-[#F09F0C] text-md py-1 px-3 rounded-lg"
            >
              SIGN IN
            </Link>
          ) : (
            <button
              onClick={logout}
              className="bg-[#624040] text-[#F09F0C] text-md py-1 px-3 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
