import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from "axios";

const Balireport = () => {
  const [laporans, setLaporan] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const getLaporan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/laporan");
      setLaporan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLaporan();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredLaporans = laporans
    .filter((laporan) =>
      laporan.Title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      const order = { Diproses: 1, Diterima: 2, Ditolak: 3 };
      return order[a.Keterangan] - order[b.Keterangan];
    });

  const getStatusColor = (status) => {
    switch (status) {
      case "Diterima":
        return "green";
      case "Diproses":
        return "yellow";
      case "Ditolak":
        return "red";
      default:
        return "silver";
    }
  };

  return (
    <div className="p-10 h-full">
      <div className="mt-[60px]">
        <div className="bg-white h-full rounded-xl px-6 pt-3 pb-4">
          <Link to={"/"} className="flex gap-1 items-center font-semibold">
            <FaArrowLeft />
            Back
          </Link>
          {user && user.role === "Admin" && (
            <div className="">
              <div className="flex justify-between grid grid-cols-4 gap-3 mt-3">
                <Link
                  to={"/addlaporan"}
                  className="bg-[#5684F9] h-[160px] flex justify-center items-center p-3 text-white rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <IoAddCircleOutline /> Buat Laporan
                  </div>
                </Link>
                <div className="relative bg-[#00FF57] h-[160px] items-center p-3 text-white rounded-xl">
                  <div className="w-full h-full">
                    <p className="absolute top-0 left-0 m-3 font-semibold">
                      Laporan Diterima
                    </p>
                    <p className="absolute bottom-0 right-0 m-3 text-3xl font-bold">
                      12
                    </p>
                  </div>
                </div>
                <div className="relative bg-[#FFEA2A] h-[160px] items-center p-3 text-white rounded-xl">
                  <div className="w-full h-full">
                    <p className="absolute top-0 left-0 m-3 font-semibold">
                      Laporan Diproses
                    </p>
                    <p className="absolute bottom-0 right-0 m-3 text-3xl font-bold">
                      12
                    </p>
                  </div>
                </div>
                <div className="relative bg-[#FD0000] h-[160px] items-center p-3 text-white rounded-xl">
                  <div className="w-full h-full">
                    <p className="absolute top-0 left-0 m-3 font-semibold">
                      Laporan Ditolak
                    </p>
                    <p className="absolute bottom-0 right-0 m-3 text-3xl font-bold">
                      12
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border mt-3 py-2 px-5 bg-white border-black rounded-md"
                type="search"
                placeholder="search..."
                value={searchText}
                onChange={handleSearch}
              />
              <div className="flex justify-between grid grid-cols-4 gap-3 mt-3">
                {filteredLaporans.map((item, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      navigate(`/lihat/${item && item.id_laporan}`)
                    }
                    className="relative bg-white shadow-md h-[160px] rounded-xl p-4 border-l-4 cursor-pointer"
                    style={{
                      borderLeft: `12px solid ${getStatusColor(
                        item.Keterangan
                      )}`,
                    }}
                  >
                    <div className="w-full h-full">
                      <p className="font-semibold text-lg">{item.Title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {user && user.role === "User" && (
            <div className="flex justify-between grid grid-cols-4 gap-3 mt-3">
              <Link
                to={"/addlaporan"}
                className="bg-[#5684F9] h-[160px] flex justify-center items-center p-3 text-white rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <IoAddCircleOutline /> Buat Laporan
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balireport;
