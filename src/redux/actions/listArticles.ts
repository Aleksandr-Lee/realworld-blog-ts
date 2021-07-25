import ActionTypes from "../actionsTypes";
import { IArticle, ICreateArticle } from "../../types/types";
import { ArticlesListType } from "../../types/articlesListTypes";

export const actionMyArticles = (myArticles: IArticle[]): ArticlesListType => ({
  type: ActionTypes.getMyArticles,
  myArticles,
});

export const actionListArticles = (
  articlesList: IArticle[]
): ArticlesListType => ({
  type: ActionTypes.getArticlesList,
  articlesList,
});

export const actionArticles = (articles: IArticle): ArticlesListType => ({
  type: ActionTypes.getArticles,
  articles,
});

export const actionCompleteDownload = (): ArticlesListType => ({
  type: ActionTypes.completeDownload,
});
export const actionCompleteDownloadArticle = (): ArticlesListType => ({
  type: ActionTypes.completeDownloadArticle,
});

export const actionErrorDownload = (): ArticlesListType => ({
  type: ActionTypes.errorDownload,
});

export const actionArticlesCount = (
  articlesCount: number
): ArticlesListType => ({
  type: ActionTypes.articlesCount,
  articlesCount,
});

export const actionPage = (page: number): ArticlesListType => ({
  type: ActionTypes.page,
  page,
});

export const actionSuccessfulDeleteArticle = (
  successfulDeleteArticle: boolean
): ArticlesListType => ({
  type: ActionTypes.successfulDeleteArticle,
  successfulDeleteArticle,
});

export const actionCreateArticle = (
  createArticle: ICreateArticle
): ArticlesListType => ({
  type: ActionTypes.createArticle,
  createArticle,
});

export const actionSuccessfulCreateArticle = (
  successfulCreateArticle: boolean
): ArticlesListType => ({
  type: ActionTypes.successfulCreateArticle,
  successfulCreateArticle,
});

export const actionModalConfirmationWindow = (
  modalConfirmationWindow: boolean
): ArticlesListType => ({
  type: ActionTypes.modalConfirmationWindow,
  modalConfirmationWindow,
});
