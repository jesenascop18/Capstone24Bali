import React, { useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
import { useSelector } from "react-redux";

const AddLaporan = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [lokasi, setLokasi] = useState("");
  const [massage, setMassage] = useState("");
  const [title, setTitle] = useState("");
  const {user} = useSelector((state) => state.auth)

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const buatLaporan = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id_user", user && user.id_user);
    formData.append("Title", title);
    formData.append("Lokasi", lokasi);
    formData.append("Content", massage);
    formData.append("Keterangan", "Diproses");

    try {
      const response = await axios.post(
        "http://localhost:5000/laporan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setFile(null);
      setLokasi("");
      setMassage("");
      setTitle("");

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form className="p-10" onSubmit={buatLaporan}>
      <div className="mt-[60px] h-[100vh] bg-white rounded-xl">
        <div className="flex px-6 pt-3">
          <div className="w-full">
            <Link
              to={"/balireport"}
              className="flex gap-1 items-center font-semibold"
            >
              <FaArrowLeft />
              Back
            </Link>
            <div className="mt-6 flex justify-center items-center w-full p-6 border border-b-2 rounded-lg shadow-md h-full">
              <div className="flex grid w-full grid-cols-2 gap-10 p-5 relative">
                <div className="w-full grid gap-y-5">
                  <div className="w-full grid">
                    <h1 className="font-bold">Judul Laporan</h1>
                    <input
                      className="p-2 shadow-none border rounded-md border-b-2"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="w-full grid">
                    <h1 className="font-bold">Lokasi Kejadian</h1>
                    <input
                      className="p-2 shadow-none border rounded-md border-b-2"
                      type="text"
                      value={lokasi}
                      onChange={(e) => setLokasi(e.target.value)}
                    />
                  </div>
                  <div className="w-full grid">
                    <h1 className="font-bold">Massage</h1>
                    <textarea
                      name=""
                      rows={6}
                      className="p-2 resize-none shadow-none border rounded-md border-b-2"
                      id=""
                      value={massage}
                      onChange={(e) => setMassage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <h1 className="font-bold">Attachment</h1>
                  <div
                    className={`w-full border-2 border-dashed p-6 rounded-md ${
                      dragging ? "border-blue-500" : "border-gray-300"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      id="fileInput"
                    />
                    <label
                      htmlFor="fileInput"
                      className="flex flex-col items-center justify-center w-full h-32 cursor-pointer"
                    >
                      {file ? (
                        <p>{file.name}</p>
                      ) : (
                        <div className="">
                          <div className="flex justify-center mb-1">
                            <BsUpload size={25} />
                          </div>
                          <p className="text-gray-500 text-lg">
                            Drop here to attach or{" "}
                            <span className="text-blue-500">upload</span>
                          </p>
                          <p className="text-[12px] text-gray-500 mt-2 text-center">
                            Max 5GB
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#F09F0C] px-10 py-2 rounded-md text-white absolute bottom-0 right-0"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddLaporan;
