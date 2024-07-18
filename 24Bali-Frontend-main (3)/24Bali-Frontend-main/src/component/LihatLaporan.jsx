import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const LihatLaporan = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const getBeritabyId = async (idBerita) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/laporan/${idBerita}`
      );
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const formatContent = (content) => {
    if (!content) return null;
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  useEffect(() => {
    getBeritabyId(id);
  }, [id]);


  
  const handleAccept = async (id) => {
    // Implementasi fungsi untuk menerima laporan
    try {
      await axios.patch(`http://localhost:5000/laporan/terima/${id}`);
      getBeritabyId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id) => {
    // Implementasi fungsi untuk menolak laporan
    try {
      await axios.patch(`http://localhost:5000/laporan/tolak/${id}`);
      getBeritabyId(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex bg-gradient-to-b from-[#37B9C2] to-[#98C3C4] mt-3 z-10">
      <div className="p-10">
        <div className="bg-white rounded-xl px-6 pt-3 pb-4">
          <Link
            to={"/balireport"}
            className="flex gap-1 items-center font-semibold mb-5"
          >
            <FaArrowLeft />
            Back
          </Link>
          <div className="border border-black-rounded p-3">
            <div className="flex justify-between items-start">
              <p className="text-lg mb-5">
                {detail.Title}{" "}
                <span
                  className="px-4 py-1 rounded text-white text-md"
                  style={{ background: getStatusColor(detail.Keterangan) }}
                >
                  {detail.Keterangan}
                </span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleAccept(detail.id_laporan)}
                  className="bg-gray-100 text-black border border-gray-200 p-1 rounded"
                >
                  Terima
                </button>
                <button
                  onClick={() => handleReject(detail.id_laporan)}
                  className="bg-gray-100 text-black border border-gray-200 p-1 rounded"
                >
                  Tolak
                </button>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-full col-span-2">
                {formatContent(detail.Content)}
              </div>
              <div className="">
                <img
                  className="w-[900px]"
                  style={{ objectFit: "cover" }}
                  src={detail.url}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LihatLaporan;
