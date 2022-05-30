import {ICompany} from "./ICompany";

export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
  company: ICompany
}
