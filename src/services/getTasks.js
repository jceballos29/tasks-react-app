import axios from "axios";

export const getTasks = async () => {
    const response = await axios({
        method: "GET",
        baseURL: "https://todos-go.herokuapp.com/api",
        url: "/todos"  
    });

    return response.data;
}