import { fireEvent, render, waitFor } from "@testing-library/react";
import { Layout } from "./Layout";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

it("render page layout", async () => {
  const { getByTestId } = render(<Layout />);
  const navToBeClicked = getByTestId("home-nav");
  const handleNavClick = fireEvent.click(navToBeClicked);
  expect(handleNavClick).toBeTruthy();
});
