

const url = "https://morocha-backend.vercel.app/api/auth";

export const usuarios = {usuario:""};



export const login = async (datos) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  usuarios.usuario=data.usuario;

  return data;
};