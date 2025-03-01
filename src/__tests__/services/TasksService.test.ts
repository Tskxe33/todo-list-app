import { describe, it, expect, vi, beforeEach } from "vitest";
import TasksService from "../../services/TasksService";
import ApiService from "../../services/HttpService";
import { ENDPOINTS } from "../../constants/Endpoints";
import { generateRandomNumberFrom1To100 } from "../../utils/Numbers";

vi.mock("../../services/HttpService", () => ({
  default: {
    get: vi.fn(),
  },
}));

vi.mock("../../utils/Numbers", () => ({
  generateRandomNumberFrom1To100: vi.fn(),
}));

describe("TasksService", () => {
  const mockTodos = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getAll", () => {
    it("should fetch todos with default limit of 10", async () => {
      vi.mocked(ApiService.get).mockResolvedValue({
        data: mockTodos,
        status: 200,
        statusText: "OK",
        headers: {},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config: {} as any,
      });

      const result = await TasksService.getAll();

      expect(ApiService.get).toHaveBeenCalledWith(ENDPOINTS.TODOS, {
        params: {
          _limit: 10,
        },
      });
      expect(result).toEqual(mockTodos);
    });

    it("should fetch todos with custom limit", async () => {
      const customLimit = 5;
      vi.mocked(ApiService.get).mockResolvedValue({
        data: mockTodos,
        status: 200,
        statusText: "OK",
        headers: {},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config: {} as any,
      });

      const result = await TasksService.getAll(customLimit);

      expect(ApiService.get).toHaveBeenCalledWith(ENDPOINTS.TODOS, {
        params: {
          _limit: customLimit,
        },
      });
      expect(result).toEqual(mockTodos);
    });

    it("should handle API errors", async () => {
      const error = new Error("API Error");
      vi.mocked(ApiService.get).mockRejectedValue(error);

      await expect(TasksService.getAll()).rejects.toThrow("API Error");
    });
  });

  describe("getRandom", () => {
    it("should fetch a random todo", async () => {
      const randomNumber = 42;
      const mockTodo = {
        id: randomNumber,
        title: "Random Todo",
        completed: false,
      };

      vi.mocked(generateRandomNumberFrom1To100).mockReturnValue(randomNumber);
      vi.mocked(ApiService.get).mockResolvedValue({
        data: mockTodo,
        status: 200,
        statusText: "OK",
        headers: {},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config: {} as any,
      });

      const result = await TasksService.getRandom();

      expect(generateRandomNumberFrom1To100).toHaveBeenCalled();
      expect(ApiService.get).toHaveBeenCalledWith(
        `${ENDPOINTS.TODOS}/${randomNumber}`
      );
      expect(result).toEqual(mockTodo);
    });

    it("should handle API errors when fetching random todo", async () => {
      const error = new Error("API Error");
      vi.mocked(generateRandomNumberFrom1To100).mockReturnValue(42);
      vi.mocked(ApiService.get).mockRejectedValue(error);

      await expect(TasksService.getRandom()).rejects.toThrow("API Error");
    });
  });
});
