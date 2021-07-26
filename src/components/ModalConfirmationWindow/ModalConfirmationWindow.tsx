import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import BlogService from "../../services/BlogService";
import route from "../../route";
import rootState from "../../types/rootState";
import {
  actionSuccessfulDeleteArticle,
  actionModalConfirmationWindow,
} from "../../redux/actions/listArticles";
import exclamation from "../../Assets/Images/exclamation-circle.svg";
import classes from "./ModalConfirmationWindow.module.scss";

interface IModalConfirmationWindow {
  slug: {
    slug: string;
  };
}

const ModalConfirmationWindow: React.FC<IModalConfirmationWindow> = ({
  slug,
}) => {
  const dispatch = useDispatch();
  const successfulDeleteArticle = useSelector(
    (state: rootState) => state.articlesReducer.successfulDeleteArticle
  );

  const onDeleteArticle = () => {
    new BlogService().deleteArticle(slug.slug).then(() => {
      dispatch(actionSuccessfulDeleteArticle(true));
      dispatch(actionSuccessfulDeleteArticle(false));
      dispatch(actionModalConfirmationWindow(false));
    });
  };

  if (successfulDeleteArticle) {
    return <Redirect to={route.listArticles} />;
  }
  return (
    <div className={classes.modalWindow}>
      <div className={classes.modalWindow__container}>
        <div className={classes.modalWindow__header}>
          <img
            className={classes.modalWindow__img}
            src={exclamation}
            alt="exclamation"
          />
          <span className={classes.modalWindow__title}>
            Are you sure to delete this article?
          </span>
        </div>
        <div className={classes.modalWindow__buttons}>
          <button
            className={`${classes.buttonModal} ${classes.buttonModal__no}`}
            type="button"
            onClick={() => dispatch(actionModalConfirmationWindow(false))}
          >
            NO
          </button>
          <button
            className={`${classes.buttonModal} ${classes.buttonModal__yes}`}
            type="button"
            onClick={onDeleteArticle}
          >
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmationWindow;
