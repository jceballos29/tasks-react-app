import axios from "axios";

export const completeTask = async (id,data) => {
    await axios({
        method: "PUT",
        baseURL: "https://todos-go.herokuapp.com/api",
        url: `/todos/${id}`,
        data: data
    })
}