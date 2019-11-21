const productsBase =  "/api/products";
export class Products {
  getProducts() {
    return fetch(productsBase).then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then(responseText => {
        throw new Error(`Unable to fetch Products: GET "${productsBase}" status code was ${response.status}, "${responseText}"`);
      });
    });
  }
  getProduct(id) {
    const escapedId = encodeURIComponent(id);
    return fetch(`${productsBase}/${escapedId}`).then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then(responseText => {
        throw new Error(`Unable to fetch Product: GET "${productsBase}/${escapedId}" status code was ${response.status}, "${responseText}"`);
      });
    });
  }
  createProduct(title, content) {
    return fetch(productsBase, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, content}),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then(responseText => {
        throw new Error(`Unable to create Product: POST "${productsBase}" status code was ${response.status}, "${responseText}"`);
      });
    });
  }
}
