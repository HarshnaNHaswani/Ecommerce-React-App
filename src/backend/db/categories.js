import { v4 as uuid } from "uuid";

const cookieCategories = [
  {
    _id: 'c-coookies-1',
    categoryName: "bar",
    featured: true,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/Cookies/bar-cookies/cream-and-cookie_zz4l7n.jpg",
    description:
      "batter or other ingredients are poured or pressed into a rectangular pan (sometimes in multiple layers), then baked and cut into individual-sized squares that have a dense cake-like consistency. Brownies and lemon bars are examples of bar cookies.",
  },
  {
    _id: 'c-coookies-2',
    categoryName: "drop",
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/lemon-drop_pemwh1.jpg",
    description:
      "A relatively soft dough is dropped by the spoonful onto the baking sheet. During baking, the mounds of dough spread and flatten. Chocolate chip cookies, oatmeal cookies and coconut macaroons are examples of drop cookies.",
  },
  {
    _id: 'c-coookies-3',
    categoryName: "molded",
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/molded/gingerbread-man_ugigsh.png",
    description:
      "Made from a stiffer dough that is molded into balls or other shapes (wreaths, for example) before baking. Almond crescents are an example of molded cookies",
  },
  {
    _id: 'c-coookies-4',
    categoryName: "fried",
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/fried/cookie-dough-deep-fried_i6d9uh.jpg",
    description: "These are fried dough, often dusted with powdered sugar.",
  },
  {
    _id: 'c-coookies-5',
    categoryName: "filled",
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/cream-cheese-stuffed-choco_aszl72.jpg",
    description:
      "Cookie dough is stuffed with fruit, jam or other confection. They can be like thumbprint cookies; or the fruit/jam can be totally enclosed in the dough, like a dumpling.",
  },
  {
    _id: 'c-coookies-6',
    categoryName: "sandwich",
    featured: true,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/choco-peanut-butter_mu64i2.jpg",
    description:
      "Rolled or pressed cookies that are assembled as a sandwich with a sweet filling: frosting, ganache, jam, vanilla creme, marshmallow creme, or peanut butter creme.",
  },
  {
    _id: 'c-coookies-7',
    categoryName: "rolled",
    featured: true,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/rolled/nutella-roll_jjlnau.jpg",
    description:
      "Made from a stiffer dough that is chilled and then rolled out and cut into shapes with a cookie cutter, knife or pastry wheel.",
  },
  {
    _id: 'c-coookies-8',
    categoryName: "pressed",
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/pressed/assorted-butter_itmwpy.jpg",
    description:
      "Made from a soft dough that is extruded from a cookie press (cookie gun) or pastry bag into various decorative shapes. Spritz cookies and French macarons are examples.",
  },
  {
    _id: 'c-coookies-9',
    categoryName: "nobake",
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/no-bake/oatmeal-peanut-butter_httzcf.jpg",
    description: " A 'faux' cookie, a kind of candy-cookie hybrid.",
  },
  {
    _id: 'c-coookies-10',
    categoryName: "refrigerator",
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/butter_l4badx.jpg",
    description:
      "Made from a stiff dough that is refrigerated in logs until whiteit becomes hard. It is then sliced into rounds and baked. Examples include pinwheels and shortbread.",
  },
];

const chocolateCategories = [
  {
    _id: 'c-choco-1',
    categoryName: "dark",
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/chocolates/dark-chocolate_smansh.jpg",
    description: "Greater than 30% Cacao",
  },
  {
    _id: 'c-choco-2',
    categoryName: "milk",
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/milk-chocolate_fdkr2l.jpg",
    description: "10-30% Cacao",
  },
  {
    _id: 'c-choco-3',
    categoryName: "ruby",
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/ruby-chocolate_rjggpc.png",
    description: "Made with Ruby Cacao",
  },
  {
    _id: 'c-choco-4',
    categoryName: "white",
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/white-chocolate_vqeclm.jpg",
    description: "0% Cacao, made with at least 20% cacao-butter",
  },
  // {
  //   _id: 'c-choco-7',
  //   categoryName: "raw",
  //   featured: false,
  //   media: "",
  //   description: "100% Cacao, unroasted chocolates",
  // },
  {
    _id: 'c-choco-5',
    categoryName: "unsweetened",
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722547/ecomm/images/chocolates/unsweetened-chocolate_vfffhy.jpg",
    description: "no added sugar",
  },
  {
    _id: 'c-choco-6',
    categoryName: "caramalized",
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722538/ecomm/images/chocolates/caramalized-white-chocolate_agzx3k.jpg",
    description: "caramalized chocolate",
  },
];
export const categories = [
  {
    _id: 'c-1',
    categoryName: "cookies",
    subCategories: cookieCategories,
  },
  {
    _id: 'c-2',
    categoryName: "chocolate",
    subCategories: chocolateCategories,
  },
  {
    _id: '3',
    categoryName: "eggless",
    subCategories: [],
  },
  {
    _id: '4',
    categoryName: "vegan",
    subCategories: [],
  },
];
