import { v4 as uuid } from "uuid";

const cookieCategories = [
  {
    _id: uuid(),
    categoryName: "bar",
    description:
      "batter or other ingredients are poured or pressed into a rectangular pan (sometimes in multiple layers), then baked and cut into individual-sized squares that have a dense cake-like consistency. Brownies and lemon bars are examples of bar cookies.",
  },
  {
    _id: uuid(),
    categoryName: "drop",
    description:
      "A relatively soft dough is dropped by the spoonful onto the baking sheet. During baking, the mounds of dough spread and flatten. Chocolate chip cookies, oatmeal cookies and coconut macaroons are examples of drop cookies.",

  },
  {
    _id: uuid(),
    categoryName: "molded",
    description:
      "Made from a stiffer dough that is molded into balls or other shapes (wreaths, for example) before baking. Almond crescents are an example of molded cookies",

  },
  {
    _id: uuid(),
    categoryName: "fried",
    description:
      "These are fried dough, often dusted with powdered sugar.",

  },
  {
    _id: uuid(),
    categoryName: "filled",
    description:
      "Cookie dough is stuffed with fruit, jam or other confection. They can be like thumbprint cookies; or the fruit/jam can be totally enclosed in the dough, like a dumpling.",

  },
  {
    _id: uuid(),
    categoryName: "sandwich",
    description:
      "Rolled or pressed cookies that are assembled as a sandwich with a sweet filling: frosting, ganache, jam, vanilla creme, marshmallow creme, or peanut butter creme.",

  },
  {
    _id: uuid(),
    categoryName: "rolled",
    description:
      "Made from a stiffer dough that is chilled and then rolled out and cut into shapes with a cookie cutter, knife or pastry wheel.",

  },
  {
    _id: uuid(),
    categoryName: "pressed",
    description:
      "Made from a soft dough that is extruded from a cookie press (cookie gun) or pastry bag into various decorative shapes. Spritz cookies and French macarons are examples.",

  },
  {
    _id: uuid(),
    categoryName: "nobake",
    description:
      " A 'faux' cookie, a kind of candy-cookie hybrid.",

  },
  {
    _id: uuid(),
    categoryName: "refrigerator",
    description:
      "Made from a stiff dough that is refrigerated in logs until whiteit becomes hard. It is then sliced into rounds and baked. Examples include pinwheels and shortbread.",

  }
];

const chocolateCategories = [
  {
    _id: uuid(),
    categoryName: "dark",
    description: 'Greater than 30% Cocoa',
  },
  {
    _id: uuid(),
    categoryName: "milk",
    description: '10-30% Cocoa',
  },
  {
    _id: uuid(),
    categoryName: "ruby",
    description: 'Made with Ruby Cocoa',
  },
  {
    _id: uuid(),
    categoryName: "white",
    description: '0% Cocoa, made with at least 20% cocoa-butter',
  },
  {
    _id: uuid(),
    categoryName: "raw",
    description: '100% Cocoa',
  },
  {
    _id: uuid(),
    categoryName: "unsweetened",
    description: 'no added sugar',
  },
  {
    _id: uuid(),
    categoryName: "caramalized",
    description: 'caramalized chocolate',
  }
]
export const categories = [
  {
    _id: uuid(),
    categoryName: "cookies",
    subCategories:  cookieCategories
  },
  {
    _id: uuid(),
    categoryName: "chocolate",
    subCategories:  chocolateCategories
  },
  {
    _id: uuid(),
    categoryName: "eggless",
    subCategories:  []
  },
  {
    _id: uuid(),
    categoryName: "vegan",
    subCategories:  []
  },
]