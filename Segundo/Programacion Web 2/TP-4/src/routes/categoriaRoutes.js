import { Router } from "express";
import { Categoria as model } from "../models/index.js";

let nombre = {
    modelo: "categoria",
    modeloPlural: "categorias",
    modeloMayuscula: "Categoria",
};

const router = Router();

router.get("/", async (req, res) => {
    try {
        const instace = await model.findAll();
        res.status(200).json(instace);
    } catch (error) {
        res.status(500).json({
            message: `Error al obtener ${nombre.modeloPlural}`,
            error: error.message,
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const instance = await model.findByPk(id);
        if (instance) {
            res.status(200).json(instance);
        } else {
            res.status(404).json({
                message: `${nombre.modeloMayuscula} no encontrado`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Error al obtener ${nombre.modelo}`,
            error: error.message,
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newInstance = await model.create(req.body);
        res.status(201).json(newInstance);
    } catch (error) {
        if (
            error.name === "SequelizeValidationError" ||
            error.name === "SequelizeUniqueConstraintError"
        ) {
            return res.status(400).json({
                message: "Error de validación",
                errors: error.errors
                    ? error.errors.map((e) => e.message)
                    : error.message,
            });
        }
        res.status(500).json({
            message: `Error al crear ${nombre.modelo}`,
            error: error.message,
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const instance = await model.findByPk(id);
        if (instance) {
            const updatedInstance = await instance.update(req.body);
            res.status(200).json(updatedInstance);
        } else {
            res.status(404).json({
                message: `${nombre.modelo} no encontrado para actualizar`,
            });
        }
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            return res
                .status(400)
                .json({ message: "Error de validación", error: error.message });
        }
        res.status(500).json({
            message: `Error al actualizar ${nombre.modelo}`,
            error: error.message,
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await model.destroy({ where: { id: id } });
        if (resultado > 0) {
            res.status(200).json({
                message: `${nombre.modeloMayuscula} eliminado exitosamente`,
            });
        } else {
            res.status(404).json({
                message: `${nombre.modeloMayuscula} no encontrado para eliminar`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Error al eliminar ${nombre.modelo}`,
            error: error.message,
        });
    }
});

export default router;
