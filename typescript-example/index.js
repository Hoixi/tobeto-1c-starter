let j;
j = 10.5;
console.log(j);
const myFunction = () => {
    return 10;
};
function myFunction2() { }
let function1 = myFunction();
let function2 = myFunction2();
class ProductService {
    getAll() {
        return true;
    }
    getById(id) {
        return { id: 1, name: "telefon", price: 10 };
    }
}
let productService = new ProductService();
let product = productService.getById(1);
console.log(product.price);
