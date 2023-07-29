import Cookies from "universal-cookie";

const url = "https://lamorochafood-backend.vercel.app/api/";

const cookie = new Cookies();

export const traerMenus = async () => {
    const response = await fetch(`${url}productos`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": cookie.get('token')
        },
    });
    const data = await response.json();

    return data.productos;
};

export const eliminarMenu = async (id) => {
    const response = await fetch(`${url}productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": cookie.get('token')
        },
    });
    const data = await response.json();

    return data;
};
