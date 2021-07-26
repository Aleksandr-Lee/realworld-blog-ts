import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { v4 } from "uuid";
import CreateEditForm from "../CreateEditForm";
import LoadingIndicator from "../LoadingIndicator";
import BlogService from "../../services/BlogService";
import route from "../../route";
import rootState from "../../types/rootState";
import { ICreateArticle } from "../../types/types";
import ErrorIndicator from "../ErrorIndicator";
import {
  actionArticles,
  actionCreateArticle,
  actionSuccessfulCreateArticle,
  actionCompleteDownloadArticle,
  actionErrorDownload,
} from "../../redux/actions/listArticles";

interface IEditArticle {
  slug: {
    slug: string;
  };
}

interface ITags {
  id: string;
  text: string;
}

interface IValueInput {
  title: string;
  shortDescription: string;
  text: string;
  tagList: ITags[];
}

const EditArticle: React.FC<IEditArticle> = ({ slug }) => {
  const dispatch = useDispatch();
  const successfulCreateArticle = useSelector(
    (state: rootState) => state.articlesReducer.successfulCreateArticle
  );
  const articles: any = useSelector(
    (state: rootState) => state.articlesReducer.articles
  );
  const completeDownloadArticle = useSelector(
    (state: rootState) => state.articlesReducer.completeDownloadArticle
  );
  const errorDownload = useSelector(
    (state: rootState) => state.articlesReducer.errorDownload
  );

  const getSlug = () => {
    dispatch(actionCompleteDownloadArticle());
    new BlogService().getArticle(slug.slug).then((article) => {
      dispatch(actionArticles(article.article));
    });
  };

  if (articles === null) {
    getSlug();
  }

  if (!completeDownloadArticle) {
    return <LoadingIndicator />;
  }

  const valueInput: IValueInput = {
    title: articles.title,
    shortDescription: articles.description,
    text: articles.body,
    tagList: articles.tagList.map((tag: string) => ({
      id: v4(),
      text: tag,
    })),
  };

  if (successfulCreateArticle) {
    setTimeout(() => {
      dispatch(actionSuccessfulCreateArticle(false));
    }, 500);
    return <Redirect to={route.listArticles} />;
  }

  const editArticle = (data: ICreateArticle) => {
    console.log(data);
    const { title, shortDescription, text, tagList } = data;
    new BlogService()
      .editArticle(title, shortDescription, text, tagList, slug.slug)
      .then((article) => {
        dispatch(actionCreateArticle(article));
        dispatch(actionSuccessfulCreateArticle(true));
      })
      .catch(() => {
        dispatch(actionErrorDownload());
      });
  };

  if (errorDownload) {
    return <ErrorIndicator />;
  }

  return (
    <CreateEditForm
      title="Edit article"
      submit={editArticle}
      valueInput={valueInput}
    />
  );
};

export default EditArticle;
