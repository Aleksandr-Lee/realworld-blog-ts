import ActionTypes from "../actionsTypes";
import { IArticle, ICreateArticle } from "../../types/types";
import { ArticlesListType } from "../../types/articlesListTypes";

interface StateInitial {
  myArticles: IArticle[];
  articlesList: IArticle[];
  articles: IArticle;
  completeDownload: boolean;
  completeDownloadArticle: boolean;
  errorDownload: boolean;
  articlesCount: number;
  page: number;
  successfulDeleteArticle: boolean;
  createArticle: ICreateArticle | null;
  successfulCreateArticle: boolean;
  modalConfirmationWindow: boolean;
}

const initialState: StateInitial = {
  myArticles: [],
  articlesList: [],
  articles: {} as IArticle,
  completeDownload: false,
  completeDownloadArticle: false,
  errorDownload: false,
  articlesCount: 1,
  page: 1,
  successfulDeleteArticle: false,
  createArticle: null,
  successfulCreateArticle: false,
  modalConfirmationWindow: false,
};

const articlesReducer = (
  state = initialState,
  action: ArticlesListType
): StateInitial => {
  switch (action.type) {
    case ActionTypes.getMyArticles:
      return {
        ...state,
        myArticles: action.myArticles,
        completeDownload: true,
      };
    case ActionTypes.getArticlesList:
      return {
        ...state,
        articlesList: action.articlesList,
        completeDownload: true,
      };
    case ActionTypes.getArticles:
      return {
        ...state,
        articles: action.articles,
        completeDownloadArticle: true,
      };
    case ActionTypes.completeDownload:
      return {
        ...state,
        myArticles: [],
        articlesList: [],
        completeDownload: false,
      };
    case ActionTypes.completeDownloadArticle:
      return {
        ...state,
        articles: {} as IArticle,
        completeDownloadArticle: false,
      };
    case ActionTypes.errorDownload:
      return {
        ...state,
        errorDownload: true,
      };
    case ActionTypes.articlesCount:
      return {
        ...state,
        articlesCount: state.articlesCount + action.articlesCount - 1,
      };
    case ActionTypes.page:
      return {
        ...state,
        page: action.page,
      };
    case ActionTypes.successfulDeleteArticle:
      return {
        ...state,
        successfulDeleteArticle: action.successfulDeleteArticle,
      };
    case ActionTypes.createArticle:
      return {
        ...state,
        createArticle: action.createArticle,
      };
    case ActionTypes.successfulCreateArticle:
      return {
        ...state,
        successfulCreateArticle: action.successfulCreateArticle,
      };
    case ActionTypes.modalConfirmationWindow:
      return {
        ...state,
        modalConfirmationWindow: action.modalConfirmationWindow,
      };
    default:
      return state;
  }
};

export default articlesReducer;
