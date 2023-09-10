const generateCode = (categoryName = '') => {
  let arrCode = categoryName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .split(' ');
  //if name has only one word return the word
  arrCode =
    arrCode.length > 1
      ? arrCode
          .filter((e) => e.length > 2)
          .map((e) => (e.length <= 5 ? e : e.substring(0, 3)))
      : arrCode;
  // Code should contain a max of 10 char length
  let code = arrCode.join('-');
  return code.length > 10 ? code.substring(0, 10) : code;
};

export const checkCategoryCodeProp = (category) => {
  if (!category['code']) {
    // Generate code category
    let code = generateCode(category.name)
    category = { ...category, code };
  }
  return category
}