// src/routes/index.js
import { Router } from "express";
import cancionRoutes from "./cancionRoutes.js";
// ... aqui importaríamos routers de otros modelos

/*
    Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
    */
const router = Router();

router.use("/api/canciones", cancionRoutes);

export default router;
