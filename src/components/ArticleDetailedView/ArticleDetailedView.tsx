import { useLocation } from "react-router-dom";
import "./ArticleDetailedView.css";
import { ArticleView } from "../../common/ArticleView/ArticleView";

export function ArticleDetailedView() {
  const location = useLocation();
  const { abstract, title, media, id } = location.state;

  return (
    <>
      <div className="articleContainer">
        <div
          className="flex-card"
          data-testid={`article-clickHandler`}
          key={id}
        >
          <ArticleView abstract={abstract} title={title} media={media} />
        </div>
      </div>
    </>
  );
}
