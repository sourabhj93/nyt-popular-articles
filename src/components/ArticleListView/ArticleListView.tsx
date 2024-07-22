import { ArticleView } from "../../common/ArticleView/ArticleView";
import "./ArticleListView.css";

export function ArticleListView({ item, index, handleClick }: any) {
  const { abstract, title, media, id } = item;
  return (
    <div
      className="flex-card"
      data-testid={`article-clickHandler-${index}`}
      key={id}
      onClick={() => handleClick(item)}
    >
      <ArticleView abstract={abstract} title={title} media={media} />
    </div>
  );
}
