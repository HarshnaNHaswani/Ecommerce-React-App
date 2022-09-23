import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: '1',
    title: "Caramalized White Chocolate",
    price: "500",
    categories: ["chocolate", "eggless"],
    subCategories: ["white", "caramalized"],
    rating: "3",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 15,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722538/ecomm/images/chocolates/caramalized-white-chocolate_agzx3k.jpg",
  },
  {
    _id: '2',
    title: "assorted chocolates 1",
    price: "1000",
    categories: ["chocolate", "eggless"],
    subCategories: ["white", "dark", "milk", "ruby"],
    rating: "4",
    reviewers: "725",
    inStock: true,
    fastDelivery: false,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/chocolates/assorted_xjof7a.png",
  },
  {
    _id: '3',
    title: "Dark Chocolate",
    price: "250",
    categories: ["chocolate", "eggless"],
    subCategories: ["dark"],
    rating: "4.5",
    reviewers: "725",
    inStock: false,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/chocolates/dark-chocolate_smansh.jpg",
  },
  {
    _id: '4',
    title: "German Chocolate",
    price: "375",
    categories: ["chocolate", "eggless"],
    subCategories: ["milk"],
    rating: "4",
    reviewers: "725",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722538/ecomm/images/chocolates/german-chocolate_ukeywz.jpg",
  },
  {
    _id: '5',
    title: "Irish Chocolate",
    price: "375",
    categories: ["chocolate", "eggless"],
    subCategories: ["milk"],
    rating: "4.5",
    reviewers: "725",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/chocolates/irish-chocolate_ik2qo1.jpg",
  },
  {
    _id: '6',
    title: "Milk Chocolate",
    price: "150",
    categories: ["chocolate", "eggless"],
    subCategories: ["milk"],
    rating: "3.5",
    reviewers: "725",
    inStock: true,
    fastDelivery: true,
    discount: 110,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/milk-chocolate_fdkr2l.jpg",
  },
  {
    _id: '7',
    title: "Ruby Chocolate",
    price: "525",
    categories: ["chocolate", "eggless"],
    subCategories: ["ruby"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/ruby-chocolate_rjggpc.png",
  },
  {
    _id: '8',
    title: "Swiss Chocolate",
    price: "350",
    categories: ["chocolate"],
    subCategories: ["milk"],
    rating: "3.5",
    reviewers: "1050",
    inStock: false,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/swiss-chocolate_lhjmjc.jpg",
  },
  {
    _id: '9',
    title: "Unsweetened Dark Chocolate",
    price: "450",
    categories: ["chocolate", "eggless"],
    subCategories: ["dark", "unsweetened"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722547/ecomm/images/chocolates/unsweetened-chocolate_vfffhy.jpg",
  },
  {
    _id: '10',
    title: "Vegan Caramalized White Chocolate with nuts",
    price: "450",
    categories: ["chocolate", "vegan", "eggless"],
    subCategories: ["white", "caramalized"],
    rating: "4",
    reviewers: "374",
    inStock: true,
    fastDelivery: false,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/vegan-white-chocolate-caramalized-with-nuts_itvy0l.jpg",
  },
  {
    _id: '11',
    title: "White Chocolate",
    price: "225",
    categories: ["chocolate", "eggless"],
    subCategories: ["white"],
    rating: "3.5",
    reviewers: "374",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/white-chocolate_vqeclm.jpg",
  },
  {
    _id: '12',
    title: "Cream & Double Chocolate cookie",
    price: "275",
    categories: ["cookies"],
    subCategories: ["bar"],
    rating: "4",
    reviewers: "374",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/Cookies/bar-cookies/cream-and-cookie_zz4l7n.jpg",
  },
  {
    _id: '13',
    title: "Mixed berries and nuts Cholcolate cookie",
    price: "225",
    categories: ["cookies"],
    subCategories: ["bar"],
    rating: "3.5",
    reviewers: "374",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/Cookies/bar-cookies/mixed-berries-and-nuts_o9yr4o.jpg",
  },
  {
    _id: '14',
    title: "Soft Choco-chip cookies",
    price: "225",
    categories: ["cookies"],
    subCategories: ["bar"],
    rating: "4.5",
    reviewers: "1050",
    inStock: false,
    fastDelivery: true,
    discount: 0,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/Cookies/bar-cookies/soft-chocolate-chip-cookie-bars_matmgw.jpg",
  },
  {
    _id: '15',
    title: "Plain Choco-chip cookies",
    price: "175",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/Cookies/drop-cookies/choco-chip_osslyf.jpg",
  },
  {
    _id: '16',
    title: "Vanilla Drop cookies - Assorted cookies 1",
    price: "195",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "3",
    reviewers: "1050",
    inStock: true,
    fastDelivery: false,
    discount: 15,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/assorted-vanilla_wqdrfy.jpg",
  },
  {
    _id: '17',
    title: "Cranberry Drop cookies",
    price: "175",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/cranberry-drop_ohmvve.jpg",
  },
  {
    _id: '18',
    title: "Double Chocolate cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop", "filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/Double-Chocolate-Drop_uk4u9j.jpg",
  },
  {
    _id: '19',
    title: "Lemon drop cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/lemon-drop_pemwh1.jpg",
  },
  {
    _id: '20',
    title: "Pumpkin drop cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "3",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 15,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/drop-cookies/pumpkin-drop_tfpjpa.jpg",
  },
  {
    _id: '21',
    title: "Sour cream cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: false,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/drop-cookies/sour-cream_uvzesj.jpg",
  },
  {
    _id: '22',
    title: "jam filled - Assorted cookies 1",
    price: "220",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: false,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/filled/assorted-jam-filled_m9jesc.jpg",
  },
  {
    _id: '23',
    title: "Cream-Cheese Stuffed soft chocolate cookies",
    price: "290",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/cream-cheese-stuffed-choco_aszl72.jpg",
  },
  {
    _id: '24',
    title: "Choco-filled cookies",
    price: "230",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/filled/chocolate-filled-cookies_btvhoy.jpg",
  },
  {
    _id: '25',
    title: "Caramel-filled chocolate cookies",
    price: "199",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "2.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: false,
    discount: 20,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/filled/caramel-filled_apgyos.jpg",
  },
  {
    _id: '26',
    title: "Date-filled cookie cups",
    price: "275",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/date-filled_g1eern.jpg",
  },
  {
    _id: '27',
    title: "Nutella-filled drop cookies",
    price: "260",
    categories: ["cookies"],
    subCategories: ["filled", "drop"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/nutella-stuffed_r20y7a.jpg",
  },
  {
    _id: '28',
    title: "Strawberry Delight",
    price: "259",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/strawberry-delight_ks1jaq.jpg",
  },
  {
    _id: '29',
    title: "Deep-fried cookie dough",
    price: "250",
    categories: ["cookies"],
    subCategories: ["fried"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/fried/cookie-dough-deep-fried_i6d9uh.jpg",
  },
  {
    _id: '30',
    title: "Butter - Assorted Molded Cookies 1",
    price: "250",
    categories: ["cookies"],
    subCategories: ["molded"],
    rating: "2.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: false,
    discount: 20,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/molded/assorted-butter_sefro8.jpg",
  },
  {
    _id: '31',
    title: "Cream Pie cookie cups",
    price: "300",
    categories: ["cookies"],
    subCategories: ["molded", "filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/molded/Cream-Pie-Cookie-Cups_ob2r3d.jpg",
  },
  {
    _id: '32',
    title: "Ginger-bread man Cookies",
    price: "250",
    categories: ["cookies"],
    subCategories: ["molded"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/molded/gingerbread-man_ugigsh.png",
  },
  {
    _id: '33',
    title: "Almond butter Cookies",
    price: "209",
    categories: ["cookies"],
    subCategories: ["nobake"],
    rating: "4",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/no-bake/almond-butter_dsttzi.jpg",
  },
  {
    _id: '34',
    title: "Choco peanut butter Cookies",
    price: "219",
    categories: ["cookies"],
    subCategories: ["nobake"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/no-bake/choco-peanut-butter_giwdvh.jpg",
  },
  {
    _id: '35',
    title: "Oatmeal peanut butter Cookies",
    price: "219",
    categories: ["cookies"],
    subCategories: ["nobake"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/no-bake/oatmeal-peanut-butter_httzcf.jpg",
  },
  {
    _id: '36',
    title: "Butter Spritz - Assorted pressed Cookies 1",
    price: "219",
    categories: ["cookies"],
    subCategories: ["pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/pressed/assorted-butter_itmwpy.jpg",
  },
  {
    _id: '37',
    title: "Cream-cheese Spritz - Assorted pressed Cookies 2",
    price: "219",
    categories: ["cookies"],
    subCategories: ["pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/pressed/cream-cheese-assorted_babm2r.jpg",
  },
  {
    _id: '38',
    title: "flower-shaped butter Spritz",
    price: "209",
    categories: ["cookies"],
    subCategories: ["pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/pressed/flower_v6dvyn.jpg",
  },
  {
    _id: '39',
    title: "snowflake-shaped vanilla almond Spritz",
    price: "209",
    categories: ["cookies"],
    subCategories: ["pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: false,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/pressed/snow-flake_zz65mu.jpg",
  },
  {
    _id: '40',
    title: "Butter Refrigerator cookies",
    price: "150",
    categories: ["cookies"],
    subCategories: ["refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/butter_l4badx.jpg",
  },
  {
    _id: '41',
    title: "Cherry Almond Icebox cookies",
    price: "175",
    categories: ["cookies"],
    subCategories: ["refrigerator"],
    rating: "4",
    reviewers: "157",
    inStock: false,
    fastDelivery: true,
    discount: 0,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/cherry-almond_e51kup.jpg",
  },
  {
    _id: '42',
    title: "Choco-chip Icebox cookies",
    price: "200",
    categories: ["cookies"],
    subCategories: ["refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/choco-chip_a1vhqu.jpg",
  },
  {
    _id: '43',
    title: "Choco-dipped Icebox cookies",
    price: "200",
    categories: ["cookies"],
    subCategories: ["refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652724323/ecomm/images/Cookies/refrigerator/choco-dipped_ydlfw2.jpg",
  },
  {
    _id: '44',
    title: "Choco-Ice Sandwich cookies",
    price: "329",
    categories: ["cookies"],
    subCategories: ["refrigerator", "sandwich"],
    rating: "4.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/choco-ice-sandwich_x6bcg2.jpg",
  },
  {
    _id: '45',
    title: "Double-Chocolate Icebox cookies",
    price: "250",
    categories: ["cookies"],
    subCategories: ["refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/double-chocolate_et5ptu.jpg",
  },
  {
    _id: '46',
    title: "Choco-pinwheel swirl cookies",
    price: "195",
    categories: ["cookies"],
    subCategories: ["rolled", "refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 10,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/rolled/choco-pinwheel-swirl_pbfhnj.jpg",
  },
  {
    _id: '47',
    title: "Cinnamon roll cookies",
    price: "266",
    categories: ["cookies"],
    subCategories: ["rolled"],
    rating: "4.5",
    reviewers: "157",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/rolled/cinnamon-roll_rvpa7y.jpg",
  },
  {
    _id: '48',
    title: "Coconut-sugar roll cookies",
    price: "199",
    categories: ["cookies"],
    subCategories: ["rolled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/rolled/coconut-sugar_c4raaz.jpg",
  },
  {
    _id: '49',
    title: "Nutella roll cookies",
    price: "255",
    categories: ["cookies"],
    subCategories: ["rolled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/rolled/nutella-roll_jjlnau.jpg",
  },
  {
    _id: '50',
    title: "Choco-chip Mint sandwich cookies",
    price: "250",
    categories: ["cookies"],
    subCategories: ["sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/choco-chip-mint_nqqraw.jpg",
  },
  {
    _id: '51',
    title: "Dark chocolate Mint sandwich cookies",
    price: "279",
    categories: ["cookies"],
    subCategories: ["sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/dark-choco-mint_oi1vjo.jpg",
  },
  {
    _id: '52',
    title: "Choco peanut butter sandwich cookies",
    price: "270",
    categories: ["cookies"],
    subCategories: ["sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/choco-peanut-butter_mu64i2.jpg",
  },
  {
    _id: '53',
    title: "Dark Chocolate sandwich cookies",
    price: "270",
    categories: ["cookies"],
    subCategories: ["sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/dark-choco_uqxjy1.jpg",
  },
  {
    _id: '54',
    title: "German Chocolate sandwich cookies",
    price: "289",
    categories: ["cookies"],
    subCategories: ["sandwich"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/german-choco_b4uhrp.jpg",
  },
  {
    _id: '55',
    title: "Vanilla citrus sandwich cookies",
    price: "245",
    categories: ["cookies"],
    subCategories: ["sandwich"],
    rating: "4.5",
    reviewers: "260",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: true,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/vanilla-citrus_z68ogy.jpg",
  },
  {
    _id: '56',
    title: "Vegan - chocolate sandwich cookies",
    price: "295",
    categories: ["cookies", "vegan", "eggless"],
    subCategories: ["sandwich"],
    rating: "4.5",
    reviewers: "260",
    inStock: true,
    fastDelivery: true,
    discount: 0,
    featured: false,
    media:
      "https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/vegan-cookie_xlirdy.jpg",
  },
];
