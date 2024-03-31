export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByFilters(filter) {
  // {category: 'smartphones', _sort: price, _order: asc}
  let queryString = '';
  for (let key in filter) {
    if (filter[key]) {
      queryString += `${key}=${filter[key]}&`;
    }
  }

  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?' + queryString);
    const data = await response.json();
    resolve({ data });
  });
}