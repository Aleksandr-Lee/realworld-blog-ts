import ActionTypes from "../redux/actionsTypes";
import { IArticle, ICreateArticle } from "./types";

interface IActionMyArticles {
  type: typeof ActionTypes.getMyArticles;
  myArticles: IArticle[];
}
interface IActionListArticles {
  type: typeof ActionTypes.getArticlesList;
  articlesList: IArticle[];
}
interface IActionArticles {
  type: typeof ActionTypes.getArticles;
  articles: IArticle;
}

interface IActionCompleteDownload {
  type: typeof ActionTypes.completeDownload;
}

interface IActionCompleteDownloadArticle {
  type: typeof ActionTypes.completeDownloadArticle;
}

interface IActionErrorDownload {
  type: typeof ActionTypes.errorDownload;
}

interface IActionArticlesCount {
  type: typeof ActionTypes.articlesCount;
  articlesCount: number;
}

interface IActionPage {
  type: typeof ActionTypes.page;
  page: number;
}

interface IActionSuccessfulDeleteArticle {
  type: typeof ActionTypes.successfulDeleteArticle;
  successfulDeleteArticle: boolean;
}

interface IActionCreateArticle {
  type: typeof ActionTypes.createArticle;
  createArticle: ICreateArticle;
}

interface IActionSuccessfulCreateArticle {
  type: typeof ActionTypes.successfulCreateArticle;
  successfulCreateArticle: boolean;
}

interface IActionModalConfirmationWindow {
  type: typeof ActionTypes.modalConfirmationWindow;
  modalConfirmationWindow: boolean;
}

export type ArticlesListType =
  | IActionMyArticles
  | IActionListArticles
  | IActionArticles
  | IActionCompleteDownload
  | IActionCompleteDownloadArticle
  | IActionErrorDownload
  | IActionArticlesCount
  | IActionPage
  | IActionSuccessfulDeleteArticle
  | IActionSuccessfulCreateArticle
  | IActionCreateArticle
  | IActionModalConfirmationWindow;
