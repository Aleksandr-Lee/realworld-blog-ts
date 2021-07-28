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

export interface IUsers {
  user: {
    bio: string | null;
    createdAt: string;
    email: string;
    id: number;
    image: string | undefined;
    token: string;
    updatedAt: string;
    username: string;
  };
}

export interface ICreateArticle {
  title: string;
  shortDescription: string;
  text: string;
  tagList: string[];
}

export interface ISlug {
  slug: {
    slug: string;
  };
}

export interface ITags {
  id: string;
  text: string;
}

export interface IValueInput {
  title: string;
  shortDescription: string;
  text: string;
  tagList: ITags[];
}

export interface ISubmitUser {
  userName: string;
  emailAddress: string;
  password: string;
  avatarImage: string;
}
