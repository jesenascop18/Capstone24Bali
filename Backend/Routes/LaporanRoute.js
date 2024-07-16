import express from "express"
import { getLaporan, getLaporanByid, createLaporan, deleteLaporan, terimaLaporan, tolakLaporan } from "../Controller/Laporan.js"

const router = express.Router();

router.get("/laporan", getLaporan);
router.get("/laporan/:id", getLaporanByid);
router.patch("/laporan/terima/:id", terimaLaporan);
router.patch("/laporan/tolak/:id", tolakLaporan);
router.post("/laporan", createLaporan);
router.delete("/laporan/:id", deleteLaporan);

export default router;
