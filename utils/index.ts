export async function fetchProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    
    const result = await response.json();

    return result;
}