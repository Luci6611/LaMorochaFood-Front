import Cookies from "universal-cookie";

const url = "https://lamorochafood-backend.vercel.app/api/";

const cookie = new Cookies();

export const traerMenus = async () => {
    const response = await fetch(`${url}productos?limite=0`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": cookie.get('token')
        },
    });
    const data = await response.json();

    return data.productos;
};

export const traerCategorias = async () => {
    const response = await fetch(`${url}categorias?limite=0`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": cookie.get('token')
        },
    });
    const data = await response.json();

    return data.categorias;
};

export const createCate = async (categ) => {
    const response = await fetch(`${url}categorias`,
        {
            method: "POST",
            body: JSON.stringify({
                nombre: categ.nombre,
                estado: categ.estado,
                usuario: categ.nombreUsuario
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": cookie.get('token'),
            },
        }

    );

    const data = await response.json();

    return data.msg;

};

export const putCate = async (categ) => {
    const response = await fetch(`${url}categorias/${categ.id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                nombre: categ.nombre
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": cookie.get('token'),
            },
        }

    );

    const data = await response.json();
    return data.msg;

};

export const createMenu = async (menu) => {
    const response = await fetch(`${url}productos`,
        {
            method: "POST",
            body: JSON.stringify({
                categoria: menu.categoria,
                nombre: menu.nombre,
                descripcion: menu.descripcion,
                autor: menu.autor,
                precio: menu.precio,
                categoria: menu.categoria,
                img: menu.img
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": cookie.get('token'),
            },
        }

    );

    const data = await response.json();
    return data.msg;


};

export const putMenus = async (menu) => {
    const response = await fetch(`${url}productos/${menu._id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                _id: menu._id,
                categoria: menu.categoria,
                nombre: menu.nombre,
                descripcion: menu.descripcion,
                autor: menu.autor,
                precio: menu.precio,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": cookie.get('token'),
            },
        }

    );

    const data = await response.json();


    return data.msg;
};

export const cambiarDisponibilidadMenu = async (id, estado) => {
    const response = await fetch(`${url}productos/${id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                _id: id,
                disponible: estado
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": cookie.get('token'),
            },
        }

    );

    const data = await response.json();


    return data;
};

export const eliminarMenus = async (id) => {
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
