import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "WROGN Casual",
    author: "Shiv Khera",
    price: "300",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "HIGHLANDER Shirt",
    author: "Junaid Qureshi",
    price: "250",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "ZARA Ethnic",
    author: "Shiv Khera",
    price: "450",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "HM Streetwear",
    author: "Shiv Khera",
    price: "400",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "ADIDAS Footwear",
    author: "Shiv Khera",
    price: "200",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "Jockey innerwear",
    author: "Shiv Khera",
    price: "300",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "HRX Sports",
    author: "Shiv Khera",
    price: "250",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    title: "Fitbit Smartwear",
    author: "Shiv Khera",
    price: "100",
    categoryName: "fiction",
  },
];
