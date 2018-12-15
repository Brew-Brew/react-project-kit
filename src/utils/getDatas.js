
import axios from "axios";

const client = axios.create({
  baseURL: "https://reqres.in/api"
});

export async function getDatas() {
    const response = await client.get("/users?page=1");
    return response.data;
  }


export default getDatas;