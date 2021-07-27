export interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
}

export interface IUserAuth {
  email: string;
  password: string;
}

export interface IUserRegistration {
  email: string;
  bio: string | null;
  image: string;
}

export interface IUserUpdate {
  username: string;
  email: string;
  password: string;
}

export interface IUsers {
  bio: string | null;
  createdAt: string;
  email: string;
  id: number;
  image: string;
  token: string;
  updatedAt: string;
  username: string;
}

export interface ICreateArticle {
  title: string;
  shortDescription: string;
  text: string;
  tagList: string[];
}
