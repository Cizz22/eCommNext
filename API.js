const API_URL = "http://localhost:5000/api/";
const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
//Products CRUD
export const apiProducts = {
  getProducts: async (category, newProduct) => {
    const endpoint = newProduct
      ? `${API_URL}products?new=true`
      : category
      ? `${API_URL}products?category=${category}`
      : `${API_URL}products`;

    return await (await fetch(endpoint)).json();
  },
  getProduct: async (id) => {
    const endpoint = `${API_URL}find/${id}`;
    return await (await fetch(endpoint)).json();
  },
  postProduct: async (data, token) => {
    const endpoint = `${API_URL}products`;
    return await (
      await fetch(endpoint, {
        ...defaultConfig,
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
    ).json();
  },
  updateProduct: async (data, token, productid) => {
    const endpoint = `${API_URL}products/${productid}`;
    return await (
      await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
    ).json();
  },

  deleteProduct: async (token, productid) => {
    const endpoint = `${API_URL}products/${productid}`;

    return await (
      await fetch(endpoint, {
        method: "DELETE",
        headers: {
          token: `Bearer ${token}`,
        },
      })
    ).json();
  },
};

//Auth API
export const apiAuth = {
  authRegister: async (data) => {
    const endpoint = `${API_URL}auth/register`;

    return await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify(data),
      })
    ).json();
  },
  authLogin: async (data) => {
    const endpoint = `${API_URL}auth/login`;

    return await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify(data),
      })
    ).json();
  },
};
