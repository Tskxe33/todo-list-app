import { describe, it, expect, vi, beforeEach } from "vitest";
import ApiService from "../../services/HttpService";
import instance from "../../services/axios-instance";

vi.mock("../../services/axios-instance", () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}));

describe("ApiService", () => {
  const mockResponse = { data: { id: 1, name: "test" } };
  const baseUrl = "/api/test";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("get", () => {
    it("should make a GET request", async () => {
      vi.mocked(instance.get).mockResolvedValue(mockResponse);

      const response = await ApiService.get(baseUrl);

      expect(instance.get).toHaveBeenCalledWith(baseUrl, undefined);
      expect(response).toEqual(mockResponse);
    });

    it("should make a GET request with options", async () => {
      const options = { params: { page: 1 } };
      vi.mocked(instance.get).mockResolvedValue(mockResponse);

      const response = await ApiService.get(baseUrl, options);

      expect(instance.get).toHaveBeenCalledWith(baseUrl, options);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("getById", () => {
    it("should make a GET request with ID", async () => {
      const id = 1;
      vi.mocked(instance.get).mockResolvedValue(mockResponse);

      const response = await ApiService.getById(baseUrl, id);

      expect(instance.get).toHaveBeenCalledWith(`${baseUrl}/${id}`);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("post", () => {
    it("should make a POST request", async () => {
      const data = { name: "test" };
      vi.mocked(instance.post).mockResolvedValue(mockResponse);

      const response = await ApiService.post(baseUrl, data);

      expect(instance.post).toHaveBeenCalledWith(baseUrl, data);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("put", () => {
    it("should make a PUT request", async () => {
      const id = 1;
      const data = { name: "test" };
      vi.mocked(instance.put).mockResolvedValue(mockResponse);

      const response = await ApiService.put(baseUrl, id, data);

      expect(instance.put).toHaveBeenCalledWith(`${baseUrl}/${id}`, data);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("patch", () => {
    it("should make a PATCH request with ID", async () => {
      const id = 1;
      const data = { name: "test" };
      vi.mocked(instance.patch).mockResolvedValue(mockResponse);

      const response = await ApiService.patch(baseUrl, data, id);

      expect(instance.patch).toHaveBeenCalledWith(`${baseUrl}/${id}`, data);
      expect(response).toEqual(mockResponse);
    });

    it("should make a PATCH request without ID", async () => {
      const data = { name: "test" };
      vi.mocked(instance.patch).mockResolvedValue(mockResponse);

      const response = await ApiService.patch(baseUrl, data);

      expect(instance.patch).toHaveBeenCalledWith(baseUrl, data);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("delete", () => {
    it("should make a DELETE request", async () => {
      const id = 1;
      vi.mocked(instance.delete).mockResolvedValue(mockResponse);

      const response = await ApiService.delete(baseUrl, id);

      expect(instance.delete).toHaveBeenCalledWith(`${baseUrl}/${id}`);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("error handling", () => {
    it("should handle request errors", async () => {
      const error = new Error("Network Error");
      vi.mocked(instance.get).mockRejectedValue(error);

      await expect(ApiService.get(baseUrl)).rejects.toThrow("Network Error");
    });
  });
});
