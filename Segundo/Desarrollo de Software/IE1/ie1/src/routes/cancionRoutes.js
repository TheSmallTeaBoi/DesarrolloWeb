import { Router } from "express";

import Cancion from "../models/cancion.js";

const router = Router();

router.get("/", async (_, res) => {
    try {
        /*
            Cancion.findAll(): Obtiene todos las canciones que haya guardados en la DB
            */
        const canciones = await Cancion.findAll();
        res.status(200).json(canciones);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener cancions",
            error: error.message,
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        /*
            Cancion.findByPk(id): Similar a findAll, pero obteniendo sólo el registro que coincida con el ID proporcionado.
            */
        const cancion = await Cancion.findByPk(id);
        if (cancion) {
            res.status(200).json(cancion);
        } else {
            res.status(404).json({ message: "Cancion no encontrada" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener cancion",
            error: error.message,
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const nuevoCancion = await Cancion.create(req.body);
        res.status(201).json(nuevoCancion);
    } catch (error) {
        if (
            error.name === "SequelizeValidationError" ||
            error.name === "SequelizeUniqueConstraintError"
        ) {
            // A veces, pueden ocurrir multiples errores a la vez, el detalle lo encontramos en `error.errors`, el cual es un array y podemos mapearlo.
            return res.status(400).json({
                message: "Error de validación",
                errors: error.errors
                    ? error.errors.map((e) => e.message)
                    : error.message,
            });
        }
        res.status(500).json({
            message: "Error al crear cancion",
            error: error.message,
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cancion = await Cancion.findByPk(id);
        if (cancion) {
            const cancionActualizado = await cancion.update(req.body);
            res.status(200).json(cancionActualizado);
        } else {
            res.status(404).json({
                message: "Cancion no encontrada para actualizar",
            });
        }
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            return res
                .status(400)
                .json({ message: "Error de validación", error: error.message });
        }
        res.status(500).json({
            message: "Error al actualizar cancion",
            error: error.message,
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await Cancion.destroy({ where: { id: id } });
        if (resultado > 0) {
            res.status(200).json({
                message: "Cancion eliminada exitosamente",
            });
        } else {
            res.status(404).json({
                message: "Cancion no encontrada para eliminar",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar cancion",
            error: error.message,
        });
    }
});

export default router;
