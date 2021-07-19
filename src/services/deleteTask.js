import axios from "axios";

export const deleteTask = async (id) =>{
    await axios({
        method: "DELETE",
        baseURL: "https://todos-go.herokuapp.com/api",
        url: `/todos/${id}`,
    })
}