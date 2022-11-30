import axios from "axios";

const getDataApi = () => {
    const responseTodo = axios
      .get(`https://638026512f8f56e28e9c895b.mockapi.io/martin`)
      .then((res) => {
        const data = res.data;
        return data;
    });
    return responseTodo;
}
export default getDataApi