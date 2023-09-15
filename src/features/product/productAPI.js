export function fetchAllProducts(page) {
  // console.log(page);
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/products?_page=${page}&limit=10`
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllProductsId(id) {
  // console.log(page);
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/products/` + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllProductsSort(sort, order, arr) {
  let queryString = "";
  for (let i = 0; i < arr.length; i++) {
    queryString += `${arr[i]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" +
        queryString +
        `_sort=${sort}&_order=${order}` +
        `&_page=${1}&limit=10`
    );
    const data = await response.json();
    resolve({ data });
  });
}

// http://localhost:8080/products?_sort=price&_order=asc

export function fetchAllProductsByFilters(arr) {
  let queryString = "";
  for (let i = 0; i < arr.length; i++) {
    queryString += `${arr[i]}&`;
  }
  console.log("Qywerq", queryString, arr);
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString + `&_page=${1}&limit=10`
    );
    const data = await response.json();
    console.log("filterData", data);
    resolve({ data });
  });
}
