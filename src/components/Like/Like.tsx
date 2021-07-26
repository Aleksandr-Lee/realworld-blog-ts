import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogService from "../../services/BlogService";
import { actionArticles } from "../../redux/actions/listArticles";
import rootState from "../../types/rootState";
import classes from "./Like.module.scss";

interface ILike {
  favorited: boolean;
  favoritesCount: number;
  slug: string;
}

const Like: React.FC<ILike> = ({ favorited, favoritesCount, slug }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: rootState) => state.usersReducer.isAuth);
  const [like, setLike] = useState<boolean>(favorited);
  const [likeCount, setLikeCount] = useState<number>(favoritesCount);

  const onLiked = () => {
    if (isAuth) {
      if (!like) {
        new BlogService().likeArticle(slug).then((articles) => {
          if (articles.article) {
            setLike(true);
            setLikeCount((count) => count + 1);
            dispatch(actionArticles(articles.article));
          }
        });
      } else {
        new BlogService().dislikeArticle(slug).then((articles) => {
          if (articles.article) {
            setLike(false);
            setLikeCount((count) => count - 1);
          }
        });
      }
    }
  };

  return (
    <>
      <button
        type="button"
        className={`${classes.like__button} ${classes.like__button} ${
          like ? `${classes.liked}` : `${classes.noLike}`
        }`}
        onClick={onLiked}
      />
      <span className={classes.like__likeCount}>{likeCount}</span>
    </>
  );
};

export default Like;
