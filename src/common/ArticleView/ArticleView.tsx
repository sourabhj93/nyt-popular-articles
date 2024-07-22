import React from "react";

interface IArticleViewDetails {
  abstract: string;
  title: string;
  media: any;
}

const getMediaPicture = (media: any) => {
  const pictureObject = media?.[0]?.["media-metadata"]?.[1];
  return pictureObject;
};

export function ArticleView(props: IArticleViewDetails) {
  const { abstract, title, media } = props;
  return (
    <>
      <div className="flex-card-image">
        <img src={getMediaPicture(media)?.url} alt={title} />
      </div>
      <div className="flex-card-content">
        <h3 className="flex-card-heading">{title}</h3>
        <p>{abstract}</p>
      </div>
    </>
  );
}
