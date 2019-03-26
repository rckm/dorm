export function findName(names, id) {
  return names.find(name => id === name.id);
}

/**
 * @param {} values state that will be sended
 * @param  {...any} fields state that will be deleted
 */
export function withoutFields(values, ...fields) {
  const newValues = { ...values };
  fields.forEach(field => {
    delete newValues[field];
  });

  return newValues;
}

export const gender = {
  1: "Мужской",
  2: "Женский"
};

export function sortByKeys(obj) {
  const keys = Object.keys(obj).sort();

  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}
