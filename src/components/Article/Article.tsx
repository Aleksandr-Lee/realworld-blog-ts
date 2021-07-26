import React from "react";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import Like from "../Like";
import route from "../../route";
import classes from "./Article.module.scss";

interface IArticle {
  title: string;
  username: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  image: string;
  updatedAt: string;
  tagList: string[];
  slug: string;
}

const Article: React.FC<IArticle> = ({
  title,
  username,
  description,
  favorited,
  favoritesCount,
  image,
  updatedAt,
  tagList,
  slug,
}) => {
  const dateArticle = format(new Date(updatedAt), "MMMM dd, yyyy");
  const tag = tagList.map((item) => (
    <span className={classes.article__tag} key={item}>
      {item}
    </span>
  ));

  return (
    <li className={classes.article}>
      <div className={classes.article__header}>
        <div>
          <div className={classes.article__data}>
            <Link
              to={`${route.articles}${slug}`}
              className={classes.article__title}
            >
              {title}
            </Link>
            <Like
              favorited={favorited}
              favoritesCount={favoritesCount}
              slug={slug}
            />
          </div>
          {tag}
        </div>
        <div className={classes.profile}>
          <div className={classes.profile__data}>
            <span className={classes.profile__name}>{username}</span>
            <span className={classes.profile__date}>{dateArticle}</span>
          </div>
          <img className={classes.profile__foto} src={image} alt="foto" />
        </div>
      </div>
      <p className={classes.article__description}>{description}</p>
    </li>
  );
};

export default Article;
