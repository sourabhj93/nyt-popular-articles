import axios from "axios";
import { getListOfArticles } from "./api";
import { apiMockData } from "../mockData";

jest.mock("axios");

describe("getListOfArticles", () => {
  const mockResponse: any = {
    data: {
      results: apiMockData.results,
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: undefined,
  };

  it("fetches articles successfully", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      mockResponse
    );

    const periodValue = "7";
    const articles = await getListOfArticles(periodValue);

    expect(articles).toEqual(mockResponse.data.results);
  });

  it("handles errors", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
      new Error(errorMessage)
    );

    const periodValue = "7";
    const articles = await getListOfArticles(periodValue);

    expect(articles).toBeUndefined();
  });
});
