import requests from '@/api/requests'
import {ApiRes, CategoryItem, BannerItem, GoodItem, HotGoods, Brand} from '@/types/data'

// 首页多级列表
export const reqCategory = () => requests.get<ApiRes<CategoryItem[]>>("/home/category/head");
// 首页轮播图
export const reqBannerList = () => requests.get<ApiRes<BannerItem[]>>("/home/banner");
// 新鲜好物
export const reqNewList = () => requests.get<ApiRes<GoodItem[]>>('/home/new');
// 人气推荐
export const reqHotList = () => requests.get<ApiRes<HotGoods[]>>('/home/hot');
// 热卖品牌
export const reqBrandList = () => requests.get<ApiRes<Brand[]>>('/home/brand');