import { render } from "@testing-library/react";
import { ArticleDetailedView } from "./ArticleDetailedView";
import { apiMockData } from "../../mockData";

const mockDataForState = apiMockData.results[0];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "/", state: mockDataForState }),
}));

it("renders selected article", async () => {
  render(<ArticleDetailedView />);
});
