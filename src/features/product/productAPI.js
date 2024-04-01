export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByFilters(filter, pagination) {
  // {category: 'smartphones', _sort: price, _order: asc}
  // { _page: page, _per_page: ITEM_PER_PAGE}
  let queryString = '';
  for (let key in filter) {
    if (filter[key]) {
      queryString += `${key}=${filter[key]}&`;
    }
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?' + queryString);
    const paginatedItem = await response.json();
    resolve({ data: { products: paginatedItem.data, totalItems: paginatedItem.items, totalPages: paginatedItem.pages } });
  });
}