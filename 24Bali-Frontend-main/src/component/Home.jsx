import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../img/Bali24.png"

const Home = () => {
  const [berita, setBerita] = useState([]);
  
  const getBerita = async () => {
    try {
      const response = await axios.get("http://localhost:5000/laporan");
      setBerita(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getBerita();
  });

  return (
    <div className="p-10">
      <div className=" mt-[60px] ">
        {/* //berita */}
        <div className="bg-[#98C3C4] px-[35px] py-[30px] rounded-xl grid gap-x-8 gap-y-4 grid-cols-3 ">
          {berita.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-xl drop-shadow-lg bg-opacity-[80%]"
            >
              <p className=" text-[#F09F0C] my-1 font-bold">BaliNews</p>
              <img
                className="w-full h-[170px]"
                style={{ objectFit: "cover" }}
                src={item && item.url}
                alt=""
              />
              
              <p className="my-1 ">{item && item.Title}</p>
              <div className="flex justify-end">
                <Link to={`/detail/${item && item.id_laporan}`}>
                  Selengkapnya...
                </Link>
              </div>
            </div>
          ))}
          
        </div>
        {/* //hoax check */}
        <div className="flex justify-between grid grid-flow-row-dense grid-cols-3 gap-5 mt-[20px]">
          <div className="bg-white rounded-xl p-5 text-center col-span-2">
            <div className="flex justify-center my-3  text-[#F09F0C] font-bold ">
              <p>HoaxCheck</p>
            </div>
            <div className="w-full bg-gray-200 flex justify-center items-center rounded-xl p-5 mb-5">
              <div className="">
                <p className="mb-3">Bali Banjir bandang?</p>
                <Link className="bg-black font-bold w-full px-4 py-1 mt-3 text-white rounded-xl">
                  FAKTA
                </Link>
              </div>
            </div>
            <div className="w-full bg-gray-200 flex justify-center items-center rounded-xl p-5 mb-5">
              <div className="">
                <p className="mb-3">Vincent ke KKN Jalan Kaki</p>
                <Link className="bg-black font-bold w-full px-4 py-1 mt-3 text-white rounded-xl">
                  HOAXXXXXX
                </Link>
              </div>
            </div>
            <div className="w-full bg-gray-200 flex justify-center items-center rounded-xl p-5 mb-5">
              <div className="">
                <p className="mb-3">KUMALALA DATANG KE BALI MENGGUNAKAN MOBIL GTR</p>
                <Link className="bg-black font-bold w-full px-4 py-1 mt-3 text-white rounded-xl">
                  FAKTA
                </Link>
              </div>
            </div>
            <div className="w-full bg-gray-200 flex justify-center items-center rounded-xl p-5 mb-5">
              <div className="">
                <p className="mb-3">text</p>
                <Link className="bg-black font-bold w-full px-4 py-1 mt-3 text-white rounded-xl">
                  Check
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 ">
            <div className="flex justify-center my-3  text-[#F09F0C] font-bold">
              <p>Bali Response</p>
            </div>
          </div>
        </div>

        {/* //footer */}
        <div className="flex items-center gap-[30px] w-full mt-[20px] pt-[80px] px-[80px]">
          <img className="mr-4 w-[200px]" src={LogoFooter} alt="gambar" />
          <div className="flex items-start w-full gap-[100px]">
            <div className="">
              <p className="font-semibold mb-3">Company</p>
              <div className="">
                <Link>About us</Link>
              </div>
              <div className="">
                <Link>Products Digital</Link>
              </div>
              <div className="">
                <Link>Customer Reviews</Link>
              </div>
            </div>
            <div className="">
              <p className="font-semibold mb-3">Information</p>
              <div className="">
                <Link>Help Center</Link>
              </div>
              <div className="">
                <Link>Payments Methods</Link>
              </div>
              <div className="">
                <Link>Return & Refund</Link>
              </div>
            </div>
            <div className="">
              <p className="font-semibold mb-3">Contact</p>
              <div className="">
                <Link>(+62) 123-2341-9521</Link>
              </div>
              <div className="">
                <Link>faisal.ghifari@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
