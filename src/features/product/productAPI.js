export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
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
  console.log("Qywerq", queryString);
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    console.log("filterData", data);
    resolve({ data });
  });
}
