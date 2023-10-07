export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "post",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = response.json;
    resolve({ data });
  });
}