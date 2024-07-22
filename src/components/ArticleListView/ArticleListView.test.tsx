import { fireEvent, render, waitFor } from "@testing-library/react";
import { ArticleListView } from "./ArticleListView";
import { apiMockData } from "../../mockData";

it("renders list of article and click on 2nd article to read the description of article", async () => {
  const { getByTestId } = render(
    <ArticleListView
      item={apiMockData.results[0]}
      index={1}
      handleClick={jest.fn()}
    />
  );
  await waitFor(() => {
    const articleToBeClicked = getByTestId("article-clickHandler-1");
    const handleArticleClick = fireEvent.click(articleToBeClicked);
    expect(handleArticleClick).toBeTruthy();
  });
});
