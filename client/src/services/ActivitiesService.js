const baseURL = "http://localhost:5000/api/activities/";

export const getActivities = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postActivity = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const deleteActivity = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};

export const updateActivity = (id, updateData) => {
  return fetch("http://localhost:5000/api/activities/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  }).then((res) => res.json());
};
