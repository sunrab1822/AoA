import Axios from "axios";
Axios.defaults.baseURL = "https://art-of-ai-auction.jedlik.cloud/api";

export default {
  getAllKategoria() {
    return Axios.get("/categories")
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  getPaintingsByCatId(id) {
    return Axios.get(`/paintings/${id}`)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  saveBid(újobjektum) {
    return Axios.post("/bid", újobjektum).then(() => {}).catch((err) => err);
  },
  updateUser(módosítottObjektum, id) {
    return Axios.put(`/valamik/${id}`, módosítottObjektum).then(() => {});
  },
};
