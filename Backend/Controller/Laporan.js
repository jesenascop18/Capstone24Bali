import { where } from "sequelize";
import Laporan from "../Models/LaporanModel.js";
import User from "../Models/UserModel.js";
import fs from "fs"
import path from "path";

export const getLaporan = async (req, res) => {
  try {
    const response = await Laporan.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak ditemukan" });
  }
};

export const getLaporanByid = async (req, res) => {
  try {
    const response = await Laporan.findOne({
      where: req.params.id,
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak ditemukan" });
  }
};

export const createLaporan = async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ msg: "Tidak Ada File Dipilih" });
  }

  const file = req.files.file;
  const fileSize = file.size;
  const ext = path.extname(file.name);
  const allowedTypes = [".png", ".jpg", ".jpeg", ".pdf", ".docx"];

  if (!allowedTypes.includes(ext.toLowerCase())) {
    return res.status(422).json({ msg: "Format Tidak Mendukung" });
  }

  if (fileSize > 5000000) {
    return res.status(422).json({ msg: "File Tidak Bisa Lebih Dari 5 MB" });
  }

  const timestamp = new Date().getTime(); // Waktu saat ini sebagai timestamp
  const uniqueFileName = `${timestamp}_${file.md5}${ext}`; // Menggabungkan timestamp dan nama file yang unik
  const url = `${req.protocol}://${req.get("host")}/24Bali/${uniqueFileName}`;

  file.mv(`./public/24Bali/${uniqueFileName}`, async (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    } else {
      const { id_user, Title, Content, Lokasi, Keterangan } = req.body;

      try {
        await Laporan.create({
          id_user: id_user,
          Title: Title,
          Content: Content,
          Lokasi: Lokasi,
          Keterangan: Keterangan,
          file: uniqueFileName,
          url: url,
        });
        res.status(200).json({ msg: "File Berhasil Terupload" });
      } catch (error) {
        res.status(404).json({ msg: "File Gagal Terupload" });
      }
    }
  });
};

export const deleteLaporan = async (req, res) => {
  const laporan = await Laporan.findOne({
    where: {
      id_laporan: req.params.id,
    },
  });
  if (!laporan) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/24Bali/${laporan.file}`;
    fs.unlinkSync(filepath);
    await laporan.destroy();
    res.status(200).json({ msg: "Laporan Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const terimaLaporan = async (req, res) => {
  const laporan = await Laporan.findOne({
    where: {
      id_laporan: req.params.id,
    },
  });
  if (!laporan) return res.status(404).json({ msg: "laporan tidak ditemukan" });

  const { Title, Content, Lokasi } = req.body;
  try {
    await laporan.update(
      {
        Title: Title,
        Content: Content,
        Lokasi: Lokasi,
        Keterangan: "Diterima",
      },
      {
        where: {
          id_laporan: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Lporan Diterima" });
  } catch (error) {
    console.log(error.message);
  }
};
export const tolakLaporan = async (req, res) => {
  const laporan = await Laporan.findOne({
    where: {
      id_laporan: req.params.id,
    },
  });
  if (!laporan) return res.status(404).json({ msg: "laporan tidak ditemukan" });
  let fileName = laporan.file;
  if (req.files !== null) {
    const file = req.files.file;
    const timestamp = new Date().getTime();
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + timestamp + ext;
    const allowedType = [".jpg", ".jpeg", ".png"];
    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "File type not supported" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "File size too large (Max 5MB)" });

    const filePath = `./public/24Bali/${laporan.file}`;
    fs.unlinkSync(filePath);

    file.mv(`./public/24Bali/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const { Title, Content, Lokasi } = req.body;
  const url = `${req.protocol}://${req.get("host")}/24Bali//${fileName}`;
  try {
    await laporan.update(
      {
        Title: Title,
        Content: Content,
        Lokasi: Lokasi,
        Keterangan: "DiTolak",
        url: url,
      },
      {
        where: {
          id_laporan: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Laporan Ditolak" });
  } catch (error) {
    console.log(error.message);
  }
};

