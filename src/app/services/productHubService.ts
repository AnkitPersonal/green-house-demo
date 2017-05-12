import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductHubService {

  products: Product[];
  selectedProduct: Product;

  constructor() {
    let imageUrl = "/assets/images/flowers/";
    this.products = [
      new Product(1, 'Balance', imageUrl + "balance.gif",
        "red", "flower", "it is a flower", "45", 5, 89, "10 days", "within 5 hours"),
      new Product(2, "Cacharelle", imageUrl + "cacharelle.gif",
        "yellow", "flower", "stanza", "45", 5, 89, "10 days", "within 5 hours"),
      new Product(3, "Coyota", imageUrl + "coyota.jpg",
        "green", "flower", "stanza", "45", 5, 89, "10 days", "within 5 hours"),
      new Product(4, "Dalma", imageUrl + "dalma.gif",
        "pink", "flower", "stanza", "45", 5, 89, "10 days", "within 5 hours"),
      new Product(5, "Dana-Ellen", imageUrl + "dana-ellen.gif",
        "orange", "flower", "stanza", "45", 5, 89, "10 days", "within 5 hours"),
      new Product(6, "Dune", imageUrl + "dune.gif", "red", "flower", "stanza", "45", 5, 89,
        "10 days", "within 5 hours"),
      new Product(7, "Goliath", imageUrl + "goliath.gif",
        "green", "flower", "stazna", "45", 5, 89, "10 days", "within 5 hours")
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  search(id: number): Product {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].productID == id) {
        this.selectedProduct = this.products[i];
        return this.selectedProduct;
      }
    }
  }

  remove(id: number): boolean {
    var status: boolean = false;
    for (var i = 0; i < this.products.length; i++) {
      var data: number = this.products[i].productID;
      if (data == id) {
        this.products.splice(i, 1);
        status = true;
        break;
      }
    }
    return status;
  }

  insert(newProduct: Product): void {
    this.products.push(newProduct);
  }

  update(product: Product): boolean {
    var status: boolean = false;

    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].productID == product.productID) {
        this.products[i] = product;
        console.log(this.products[i]);
        status = true;
        break;
      }
    }

    return status;
  }
}

export var ESTORE_PROVIDERS: Array<any> = [
  { provide: ProductHubService, useClass: ProductHubService }
];
