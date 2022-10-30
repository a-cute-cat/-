export interface ApiRes<T> {
    code: string,
    msg: string,
    result: T
}

export type CategoryItem = {
  id: string,
  name: string,
  picture: string,
  open: boolean,
  children: CategoryItem[],
  goods: CategoryGoods[]
}

interface CategoryGoods {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}

export type BannerItem = {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

export type GoodItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export type HotGoods = {
  id: string;
  picture: string;
  title: string;
  alt: string;
}

export type Brand = {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type?: any;
  desc: string;
  place: string;
}