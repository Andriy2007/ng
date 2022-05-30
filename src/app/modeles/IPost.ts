import {ICompany} from "./ICompany";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  company: ICompany
}
