import Admin from "../Models/AdminModel.js";
import argon2, { hash } from "argon2";

export const getAdmin = async (req, res) => {
  try {
    const response = await Admin.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak ditemukan" });
  }
};

export const getAdminbyId = async (req, res) => {
  try {
    const response = await Admin.findAll({
      where: {
        Id_admin: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Admin Tidak ditemukan" });
  }
};

export const createAdmin = async (req, res) => {
  const {
    Email,
    Username,
    Password,
    confPassword,
  } = req.body;
  if (Password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan confirm password tidak sama" });
  try {
    const hashPassword = await argon2.hash(Password); // Hash password
    await Admin.create({
      Email : Email,
      Username: Username,
      Password: hashPassword,
      role : "Admin"
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(Email, Username, Password, confPassword);
    res.status(400).json({ msg: "Harap Masukan Semua Field" });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        Id_admin: req.params.id,
      },
    });
    if (!user) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    await admin.destroy();
    res.status(200).json({ msg: "Data telah dihapus" });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan dalam menghapus data" });
  }
};
