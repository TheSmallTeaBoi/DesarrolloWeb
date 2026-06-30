import { Router } from "express";
import librosRoutes from "./librosRoutes.js";
import talleresRoutes from "./talleresRoutes.js";

const router = Router();

router.use("/libros", librosRoutes);
router.use("/talleres", talleresRoutes);

router.get("/", (_, res) => {
    res.json({});
});

export default router;
