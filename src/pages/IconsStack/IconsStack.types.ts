export interface IIcon {
  title: string;
  src: string;
  colored: boolean;
  type: string;
}

export interface IPage {
  Title: string;
  Description: string;
  Fulltext: string;
  Image: string;
  icons: IIcon[];
}

export interface IDataIconsStack {
  pages: IPage[];
}
