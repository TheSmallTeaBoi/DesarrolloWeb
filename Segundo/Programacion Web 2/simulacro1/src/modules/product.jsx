import _, { useState } from "react";

export default function ({ producto }) {
    const [modalVisible, setModalVisible] = useState(false);

    var cuotas = <p>Este producto solo está disponible para pago de contado</p>;
    const financiacion = producto.financiacion;

    if (financiacion) {
        cuotas = financiacion.cuotas.map((e, i) => {
            const precioTotal =
                producto.precioBase +
                producto.precioBase * (financiacion.intereses[i] / 100);
            return (
                <p>
                    {e} Cuotas - {financiacion.intereses[i]}% - ${precioTotal} -{" "}
                    <span className="text-red-500">
                        ${precioTotal - producto.precioBase}
                    </span>
                </p>
            );
        });
    }

    return (
        <>
            {modalVisible ? (
                <div
                    onClick={() => setModalVisible(false)}
                    className="fixed inset-0 z-50 bg-white"
                >
                    <div className="flex flex-col h-full p-12 bg-blue-100 ">
                        <h1>{producto.nombre}</h1>
                        <img
                            className="size-fit"
                            src={producto.imagen}
                            alt={producto.nombre}
                        />
                        <p>{producto.descripcion}</p>
                        <p className="text-xl font-bold">
                            ${producto.precioBase}
                        </p>
                        {cuotas}
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div
                onClick={() => setModalVisible(true)}
                className="border-3 flex flex-col p-4 m-4 w-1/3 rounded-xl bg-blue-100 "
            >
                <h1>{producto.nombre}</h1>
                <img
                    className="size-1/2"
                    src={producto.imagen}
                    alt={producto.nombre}
                />
                <p>{producto.descripcion}</p>
                <p className="text-xl font-bold">${producto.precioBase}</p>
            </div>
        </>
    );
}
