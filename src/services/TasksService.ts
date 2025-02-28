import { ENDPOINTS } from "../constants/Endpoints";
import ApiService from "./HttpService";
import { Todo } from "../models/todo.model";
import { generateRandomNumberFrom1To100 } from "../utils/Numbers";

const TasksService = {
  getAll: async (limit: number = 10) => {
    const res = await ApiService.get<Todo[]>(ENDPOINTS.TODOS, {
      params: {
        _limit: limit,
      },
    });
    return res.data;
  },

  getRandom: async () => {
    const res = await ApiService.get<Todo>(
      `${ENDPOINTS.TODOS}/${generateRandomNumberFrom1To100()}`
    );
    return res.data;
  },
};

export default TasksService;
