export function findName(names, id) {
  return names.find(name => id === name.id);
}

export function withoutFields(values, ...fields) {
  const newValues = { ...values };
  fields.forEach(field => {
    delete newValues[field];
  });

  return newValues;
}
