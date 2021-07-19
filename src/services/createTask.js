import axios from "axios";

export const createTask = async (data) => {
    await axios({
        method: "POST",
        baseURL: "https://todos-go.herokuapp.com/api",
        url: "/todos",
        data: data
    })
}