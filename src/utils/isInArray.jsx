export const isInArray = (array, id) => array.filter((item) => item["_id"] === id).length ? true : false;
