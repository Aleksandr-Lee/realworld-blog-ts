import LocalStorageService from "./LocalStorageService";
import { ICreateArticle } from "../types/types";
const LIMIT_ARTICLES = 5;

interface IHeaders {
  "Content-Type": string;
  Authorization?: string;
}

export default class BlogService {
  apiBase = "https://conduit.productionready.io/api/";

  postRequest() {
    const token = LocalStorageService.getToken();
    const headers: IHeaders = {
      "Content-Type": "application/json;charset=utf-8",
    };
    if (token) {
      headers.Authorization = `Token ${token}`;
    }
    return headers;
  }

  async getResource(url: string, postRequest: any) {
    const res = await fetch(url, postRequest).then((response) => response);
    // .catch((error) => error);
    return res.json();
  }

  async getListArticles(changeOffset: number = 1) {
    const offset = (changeOffset - 1) * LIMIT_ARTICLES;
    const url = `${this.apiBase}articles?limit=${LIMIT_ARTICLES}&offset=${offset}`;
    const request = {
      method: "GET",
      headers: this.postRequest(),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async getArticle(slug: string) {
    const url = `${this.apiBase}articles/${slug}`;
    const request = {
      method: "GET",
      headers: this.postRequest(),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async myArticles(users: string) {
    const url = `${this.apiBase}articles?author=${users}`;
    const request = {
      method: "GET",
      headers: this.postRequest(),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async setUserRegistration(username: string, email: string, password: string) {
    const url = `${this.apiBase}users`;
    const request = {
      method: "POST",
      headers: this.postRequest(),
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async getUsers(email: string, password: string) {
    const url = `${this.apiBase}users/login`;
    const request = {
      method: "POST",
      headers: this.postRequest(),
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async updateUser(
    username: string,
    email: string,
    password: string,
    image: string
  ) {
    const url = `${this.apiBase}user`;
    const request = {
      method: "PUT",
      headers: this.postRequest(),
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          image,
        },
      }),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async getCurrentUsers() {
    const url = `${this.apiBase}user`;
    const request = {
      method: "GET",
      headers: this.postRequest(),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async createArticle({
    title,
    shortDescription,
    text,
    tagList,
  }: ICreateArticle) {
    const url = `${this.apiBase}articles`;
    const request = {
      method: "POST",
      headers: this.postRequest(),
      body: JSON.stringify({
        article: {
          title,
          description: shortDescription,
          body: text,
          tagList,
        },
      }),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async editArticle(
    title: string,
    description: string,
    body: string,
    tagList: string[],
    slug: string
  ) {
    const url = `${this.apiBase}articles/${slug}`;
    const request = {
      method: "PUT",
      headers: this.postRequest(),
      body: JSON.stringify({
        article: {
          title,
          description,
          body,
          tagList,
        },
      }),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async deleteArticle(slug: string) {
    const url = `${this.apiBase}/articles/${slug}`;
    const request = {
      method: "DELETE",
      headers: this.postRequest(),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async likeArticle(slug: string) {
    const url = `${this.apiBase}/articles/${slug}/favorite`;
    const request = {
      method: "POST",
      headers: this.postRequest(),
    };
    const res = await this.getResource(url, request);
    return res;
  }

  async dislikeArticle(slug: string) {
    const url = `${this.apiBase}/articles/${slug}/favorite`;
    const request = {
      method: "DELETE",
      headers: this.postRequest(),
    };
    const res = await this.getResource(url, request);
    return res;
  }
}
