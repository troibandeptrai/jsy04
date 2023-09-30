const getProducts= async ()=> {
    const response = await fetch(" https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
  }
  getProducts();//goi ham o tren ra'