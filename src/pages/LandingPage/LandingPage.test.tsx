import { fireEvent, render, waitFor } from "@testing-library/react";
import { apiMockData } from "../../mockData";
import * as api from "../../services/api";
import { LandingPage } from "./LandingPage";

const mockNavigate = jest.fn();
const mockLocation = { pathname: "/detailedArticle" };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

jest.mock("../../services/api", () => ({
  getListOfArticles: jest.fn(),
}));

it("renders list of article and click on 1st article to read the description of article", async () => {
  (api.getListOfArticles as jest.Mock).mockResolvedValue(apiMockData.results);

  const { getByTestId } = render(<LandingPage />);
  await waitFor(() => {
    const articleToBeClicked = getByTestId("article-clickHandler-0");
    const handleArticleClick = fireEvent.click(articleToBeClicked);
    expect(handleArticleClick).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith("/detailedArticle", {
      state: apiMockData.results[0],
    });
  });
});
