const baseURL = "http://localhost:5000/api/users/";

export const getUsers = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postUser = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const deleteUser = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};

export const updateUser = (id, data) => {
  return fetch("http://localhost:5000/api/users/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
