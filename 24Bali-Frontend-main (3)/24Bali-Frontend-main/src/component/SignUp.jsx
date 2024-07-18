import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [Nama, setNama] = useState("");
  const [Id, setId] = useState("");
  const [Tgl_lahir, setTgl_lahir] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [noHp, setnoHp] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()
  const SignUp = async () => {
    try {
      await axios.post("http://localhost:5000/user", {
        Nama: Nama,
        Id: Id,
        Tgl_lahir: Tgl_lahir,
        Alamat: Alamat,
        noHp: noHp,
        Username: Username,
        Password: Password,
        confPassword: Password,
      });
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body class="bg-gradient-to-br from-blue-400 to-blue-300 flex justify-center items-center h-screen m-0">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 class="text-center text-orange-500 mb-6 text-4xl">Sign Up</h2>
      <form onSubmit={SignUp}>
        <label for="fullName" class="block mb-1">Full Name</label>
        <input
          value={Nama}
          onChange={(e) => setNama(e.target.value)}
          type="text"
          placeholder="John Doe"
          required
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <label for="id" class="block mb-1">ID</label>
        <input
          value={Id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="3173071709020002"
          required
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <label for="birthdate" class="block mb-1">Birthdate</label>
        <input
          value={Tgl_lahir}
          onChange={(e) => setTgl_lahir(e.target.value)}
          type="text"
          placeholder="MM/DD/YYYY"
          required
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <label for="address" class="block mb-1">Address</label>
        <input
          value={Alamat}
          onChange={(e) => setAlamat(e.target.value)}
          type="text"
          placeholder="JL KS TUBUN III NO 23"
          required
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <label for="phone" class="block mb-1">Phone Number</label>
        <input
          value={noHp}
          onChange={(e) => setnoHp(e.target.value)}
          type="tel"
          placeholder="081384002161"
          required
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <label for="email" class="block mb-1">Email</label>
        <input
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          placeholder="faisal.ahmadgifari@gmail.com"
          required
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <label for="password" class="block mb-1">Password</label>
        <input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Type here"
          required
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <label class="block mb-3">
          <input type="checkbox" name="policy" required class="mr-1" />
          <span class="text-sm text-gray-600">
            By selecting "Create account", you are confirming that you have read and agree to
            <a href="#" class="text-orange-500">24Bali's Terms of Use</a> and
            <a href="#" class="text-orange-500">Privacy Policy</a>
          </span>
        </label>

        <button type="submit" class="w-full p-3 bg-orange-500 text-white rounded hover:bg-orange-600">
          Create Account
        </button>
      </form>
    </div>
  </body>
  );
};

export default SignUp;