import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    private query :string = "";
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }

    getProducts(): Array<Product> {
      return this.searchProducts(this.query);
    }

    saveProducts(prd: Product): Array<Product> {
      let isExistingProduct = false;
      for (let p of this.products){
        if(p.ProductId == prd.ProductId)
          {
            p.Price = prd.Price
            p.ProductName = prd.ProductName
            p.Category = prd.Category
            
            isExistingProduct = true;
            break;
          }
      }
      if(!isExistingProduct)
        this.products.push(Object.assign({}, prd));
      return this.searchProducts(this.query);
    }
    deleteProduct(prd: Product): Array<Product> {
      let newProducts = []
      for (let p of this.products){
        if(p.ProductId != prd.ProductId)
          {
            newProducts.push(p);
          }
      }
      this.products = newProducts
      return this.searchProducts(this.query);
    }
    sortProducts(): Array<Product>{
      this.products.sort((p1, p2) => {
        if(p1.ProductName < p2.ProductName)
                return -1;
            else if(p1.ProductName > p2.ProductName)
                return 1;
            return 0;
      })

      return this.searchProducts(this.query);
    }
    reverseProducts(): Array<Product>{
      this.products = this.products.reverse()
      return this.searchProducts(this.query);
    }
    searchProducts(query: string): Array<Product>{
      this.query = query;
      return this.products.filter((p,i) => p.ProductName.includes(query) || p.Category.includes(query) )
    }
}
