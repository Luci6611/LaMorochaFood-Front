const url = "https://lamorochafood-backend.vercel.app/api/";


export const traerMenusMasVendidos = async () => {
    const response = await fetch(`${url}productos?limite=0`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();

    return data.productos;
};

export const traerMenus = async () => {
    const response = await fetch(`${url}productos?limite=0`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();

    return data.productos;
};
