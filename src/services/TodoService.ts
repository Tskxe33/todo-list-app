import { ENDPOINTS } from "../constants/Endpoints";
import ApiService from "./HttpService";
import { Todo } from "../models/todo.model";

const TodoService = {
  getAll: async (limit: number = 10) => {
    const res = await ApiService.get<Todo[]>(ENDPOINTS.TODOS, {
      params: {
        _limit: limit,
      },
    });
    return res.data;
  },
};

export default TodoService;
