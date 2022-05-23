import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "Caramalized White Chocolate",
    price: "500",
    categories: ["chocolate", "eggless"],
    subCategories: ["white", "caramalized"],
    rating: "3",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722538/ecomm/images/chocolates/caramalized-white-chocolate_agzx3k.jpg"
  },
  {
    _id: uuid(),
    title: "assorted chocolates 1",
    price: "1000",
    categories: ["chocolate", "eggless"],
    subCategories: ["white", "dark", "milk", "ruby"],
    rating: "4",
    reviewers: "725",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/chocolates/assorted_xjof7a.png"
  },
  {
    _id: uuid(),
    title: "Dark Chocolate",
    price: "250",
    categories: ["chocolate", "eggless"],
    subCategories: ["dark"],
    rating: "4.5",
    reviewers: "725",
    inStock: false,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/chocolates/dark-chocolate_smansh.jpg"    
  },
  {
    _id: uuid(),
    title: "German Chocolate",
    price: "375",
    categories: ["chocolate", "eggless"],
    subCategories: ["milk"],
    rating: "4",
    reviewers: "725",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722538/ecomm/images/chocolates/german-chocolate_ukeywz.jpg"
  },
  {
    _id: uuid(),
    title: "Irish Chocolate",
    price: "375",
    categories: ["chocolate", "eggless"],
    subCategories: ["milk"],
    rating: "4.5",
    reviewers: "725",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/chocolates/irish-chocolate_ik2qo1.jpg"
  },
  {
    _id: uuid(),
    title: "Milk Chocolate",
    price: "150",
    categories: ["chocolate", "eggless"],
    subCategories: ["milk"],
    rating: "3.5",
    reviewers: "725",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/milk-chocolate_fdkr2l.jpg"
  },
  {
    _id: uuid(),
    title: "Ruby Chocolate",
    price: "525",
    categories: ["chocolate", "eggless"],
    subCategories: ["ruby"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: true,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/ruby-chocolate_rjggpc.png"
  },
  {
    _id: uuid(),
    title: "Swiss Chocolate",
    price: "350",
    categories: ["chocolate"],
    subCategories: ["milk"],
    rating: "3.5",
    reviewers: "1050",
    inStock: false,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/swiss-chocolate_lhjmjc.jpg"
  },
  {
    _id: uuid(),
    title: "Unsweetened Dark Chocolate",
    price: "450",
    categories: ["chocolate", "eggless"],
    subCategories: ["dark", "unsweetened"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    featured: true,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722547/ecomm/images/chocolates/unsweetened-chocolate_vfffhy.jpg"
  },
  {
    _id: uuid(),
    title: "Vegan Caramalized White Chocolate with nuts",
    price: "450",
    categories: ["chocolate", "vegan", "eggless"],
    subCategories: ["white", "caramalized"],
    rating: "4",
    reviewers: "374",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/vegan-white-chocolate-caramalized-with-nuts_itvy0l.jpg"
  },
  {
    _id: uuid(),
    title: "White Chocolate",
    price: "225",
    categories: ["chocolate", "eggless"],
    subCategories: ["white"],
    rating: "3.5",
    reviewers: "374",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/chocolates/white-chocolate_vqeclm.jpg"
  },
  {
    _id: uuid(),
    title: "Cream & Double Chocolate cookie",
    price: "275",
    categories: ["cookies"],
    subCategories: ["bar"],
    rating: "4",
    reviewers: "374",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722539/ecomm/images/Cookies/bar-cookies/cream-and-cookie_zz4l7n.jpg"
  },
  {
    _id: uuid(),
    title: "Mixed berries and nuts Cholcolate cookie",
    price: "225",
    categories: ["cookies"],
    subCategories: ["bar"],
    rating: "3.5",
    reviewers: "374",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/Cookies/bar-cookies/mixed-berries-and-nuts_o9yr4o.jpg"
  },
  {
    _id: uuid(),
    title: "Soft Choco-chip cookies",
    price: "225",
    categories: ["cookies"],
    subCategories: ["bar"],
    rating: "4.5",
    reviewers: "1050",
    inStock: false,
    featured: true,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/Cookies/bar-cookies/soft-chocolate-chip-cookie-bars_matmgw.jpg"
  },
  {
    _id: uuid(),
    title: "Plain Choco-chip cookies",
    price: "175",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722540/ecomm/images/Cookies/drop-cookies/choco-chip_osslyf.jpg"
  },
  {
    _id: uuid(),
    title: "Vanilla Drop cookies - Assorted cookies 1",
    price: "195",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "3",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/assorted-vanilla_wqdrfy.jpg"
  },
  {
    _id: uuid(),
    title: "Cranberry Drop cookies",
    price: "175",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    featured: true,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/cranberry-drop_ohmvve.jpg"
  },
  {
    _id: uuid(),
    title: "Double Chocolate cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop", "filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/Double-Chocolate-Drop_uk4u9j.jpg"
  },
  {
    _id: uuid(),
    title: "Lemon drop cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/drop-cookies/lemon-drop_pemwh1.jpg"
  },
  {
    _id: uuid(),
    title: "Pumpkin drop cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "3",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/drop-cookies/pumpkin-drop_tfpjpa.jpg"
  },
  {
    _id: uuid(),
    title: "Sour cream cookies",
    price: "220",
    categories: ["cookies"],
    subCategories: ["drop"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/drop-cookies/sour-cream_uvzesj.jpg"
  },
  {
    _id: uuid(),
    title: "jam filled - Assorted cookies 1",
    price: "220",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: false,
    featured: false,
    media: "https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/filled/assorted-jam-filled_m9jesc.jpg"
  },
  {
    _id: uuid(),
    title: "Cream-Cheese Stuffed soft chocolate cookies",
    price: "290",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/cream-cheese-stuffed-choco_aszl72.jpg'
  },
  {
    _id: uuid(),
    title: "Choco-filled cookies",
    price: "230",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/filled/chocolate-filled-cookies_btvhoy.jpg'
  },
  {
    _id: uuid(),
    title: "Caramel-filled chocolate cookies",
    price: "199",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "2.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722541/ecomm/images/Cookies/filled/caramel-filled_apgyos.jpg'
  },
  {
    _id: uuid(),
    title: "Date-filled cookie cups",
    price: "275",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/date-filled_g1eern.jpg'
  },
  {
    _id: uuid(),
    title: "Nutella-filled drop cookies",
    price: "260",
    categories: ["cookies"],
    subCategories: ["filled", "drop"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/nutella-stuffed_r20y7a.jpg'
  },
  {
    _id: uuid(),
    title: "Strawberry Delight",
    price: "259",
    categories: ["cookies"],
    subCategories: ["filled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/filled/strawberry-delight_ks1jaq.jpg'
  },
  {
    _id: uuid(),
    title: "Deep-fried cookie dough",
    price: "250",
    categories: ["cookies"],
    subCategories: ["fried"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722542/ecomm/images/Cookies/fried/cookie-dough-deep-fried_i6d9uh.jpg'
  },
  {
    _id: uuid(),
    title: "Butter - Assorted Molded Cookies 1",
    price: "250",
    categories: ["cookies"],
    subCategories: [ "molded"],
    rating: "2.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/molded/assorted-butter_sefro8.jpg'
  },
  {
    _id: uuid(),
    title: "Cream Pie cookie cups",
    price: "300",
    categories: ["cookies"],
    subCategories: [ "molded", "filled"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/molded/Cream-Pie-Cookie-Cups_ob2r3d.jpg'
  },
  {
    _id: uuid(),
    title: "Ginger-bread man Cookies",
    price: "250",
    categories: ["cookies"],
    subCategories: [ "molded"],
    rating: "3.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/molded/gingerbread-man_ugigsh.png'
  },
  {
    _id: uuid(),
    title: "Almond butter Cookies",
    price: "209",
    categories: ["cookies"],
    subCategories: [ "nobake"],
    rating: "4",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/no-bake/almond-butter_dsttzi.jpg'
  },
  {
    _id: uuid(),
    title: "Choco peanut butter Cookies",
    price: "219",
    categories: ["cookies"],
    subCategories: [ "nobake"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: true,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/no-bake/choco-peanut-butter_giwdvh.jpg'
  },
  {
    _id: uuid(),
    title: "Oatmeal peanut butter Cookies",
    price: "219",
    categories: ["cookies"],
    subCategories: [ "nobake"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/no-bake/oatmeal-peanut-butter_httzcf.jpg'
  },
  {
    _id: uuid(),
    title: "Butter Spritz - Assorted pressed Cookies 1",
    price: "219",
    categories: ["cookies"],
    subCategories: [ "pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/pressed/assorted-butter_itmwpy.jpg'
  },
  {
    _id: uuid(),
    title: "Cream-cheese Spritz - Assorted pressed Cookies 2",
    price: "219",
    categories: ["cookies"],
    subCategories: [ "pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: true,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/pressed/cream-cheese-assorted_babm2r.jpg'
  },
  {
    _id: uuid(),
    title: "flower-shaped butter Spritz",
    price: "209",
    categories: ["cookies"],
    subCategories: [ "pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722543/ecomm/images/Cookies/pressed/flower_v6dvyn.jpg'
  },
  {
    _id: uuid(),
    title: "snowflake-shaped vanilla almond Spritz",
    price: "209",
    categories: ["cookies"],
    subCategories: [ "pressed"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/pressed/snow-flake_zz65mu.jpg'
  },
  {
    _id: uuid(),
    title: "Butter Refrigerator cookies",
    price: "150",
    categories: ["cookies"],
    subCategories: [ "refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/butter_l4badx.jpg'
  },
  {
    _id: uuid(),
    title: "Cherry Almond Icebox cookies",
    price: "175",
    categories: ["cookies"],
    subCategories: [ "refrigerator"],
    rating: "4",
    reviewers: "157",
    inStock: false,
    featured: true,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/cherry-almond_e51kup.jpg'
  },
  {
    _id: uuid(),
    title: "Choco-chip Icebox cookies",
    price: "200",
    categories: ["cookies"],
    subCategories: [ "refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/choco-chip_a1vhqu.jpg'
  },
  {
    _id: uuid(),
    title: "Choco-dipped Icebox cookies",
    price: "200",
    categories: ["cookies"],
    subCategories: [ "refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652724323/ecomm/images/Cookies/refrigerator/choco-dipped_ydlfw2.jpg'
  },
  {
    _id: uuid(),
    title: "Choco-Ice Sandwich cookies",
    price: "329",
    categories: ["cookies"],
    subCategories: [ "refrigerator", "sandwich"],
    rating: "4.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/choco-ice-sandwich_x6bcg2.jpg'
  },
  {
    _id: uuid(),
    title: "Double-Chocolate Icebox cookies",
    price: "250",
    categories: ["cookies"],
    subCategories: [ "refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/refrigerator/double-chocolate_et5ptu.jpg'
  },
  {
    _id: uuid(),
    title: "Choco-pinwheel swirl cookies",
    price: "195",
    categories: ["cookies"],
    subCategories: [ "rolled", "refrigerator"],
    rating: "3.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/rolled/choco-pinwheel-swirl_pbfhnj.jpg'
  },
  {
    _id: uuid(),
    title: "Cinnamon roll cookies",
    price: "266",
    categories: ["cookies"],
    subCategories: [ "rolled"],
    rating: "4.5",
    reviewers: "157",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722544/ecomm/images/Cookies/rolled/cinnamon-roll_rvpa7y.jpg'
  },
  {
    _id: uuid(),
    title: "Coconut-sugar roll cookies",
    price: "199",
    categories: ["cookies"],
    subCategories: [ "rolled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/rolled/coconut-sugar_c4raaz.jpg'
  },
  {
    _id: uuid(),
    title: "Nutella roll cookies",
    price: "255",
    categories: ["cookies"],
    subCategories: [ "rolled"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/rolled/nutella-roll_jjlnau.jpg'
  },
  {
    _id: uuid(),
    title: "Choco-chip Mint sandwich cookies",
    price: "250",
    categories: ["cookies"],
    subCategories: [ "sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/choco-chip-mint_nqqraw.jpg'
  },
  {
    _id: uuid(),
    title: "Dark chocolate Mint sandwich cookies",
    price: "279",
    categories: ["cookies"],
    subCategories: [ "sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/dark-choco-mint_oi1vjo.jpg'
  },
  {
    _id: uuid(),
    title: "Choco peanut butter sandwich cookies",
    price: "270",
    categories: ["cookies"],
    subCategories: [ "sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/choco-peanut-butter_mu64i2.jpg'
  },
  {
    _id: uuid(),
    title: "Dark Chocolate sandwich cookies",
    price: "270",
    categories: ["cookies"],
    subCategories: [ "sandwich"],
    rating: "4",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/dark-choco_uqxjy1.jpg'
  },
  {
    _id: uuid(),
    title: "German Chocolate sandwich cookies",
    price: "289",
    categories: ["cookies"],
    subCategories: [ "sandwich"],
    rating: "4.5",
    reviewers: "1050",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/german-choco_b4uhrp.jpg'
  },
  {
    _id: uuid(),
    title: "Vanilla citrus sandwich cookies",
    price: "245",
    categories: ["cookies"],
    subCategories: [ "sandwich"],
    rating: "4.5",
    reviewers: "260",
    inStock: true,
    featured: true,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/vanilla-citrus_z68ogy.jpg'
  },
  {
    _id: uuid(),
    title: "Vegan - chocolate sandwich cookies",
    price: "295",
    categories: ["cookies", "vegan", "eggless"],
    subCategories: [ "sandwich"],
    rating: "4.5",
    reviewers: "260",
    inStock: true,
    featured: false,
    media: 'https://res.cloudinary.com/harshna/image/upload/v1652722545/ecomm/images/Cookies/sandwich/vegan-cookie_xlirdy.jpg'
  },
];
