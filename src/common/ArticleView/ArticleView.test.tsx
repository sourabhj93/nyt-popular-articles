import React from "react";
import { render } from "@testing-library/react";
import { ArticleView } from "./ArticleView";
import { apiMockData } from "../../mockData";

it("renders article detail", async () => {
  const { abstract, title, media } = apiMockData.results[0];
  render(<ArticleView abstract={abstract} title={title} media={media} />);
});
