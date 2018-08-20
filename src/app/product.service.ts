import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  

  getAll() {
    return this.db.list('/kakus-products');
  }

  getBeers() {
    return this.db.list('/products/Beers');
  }

  getWhiskeys() {
    return this.db.list('/products/Whiskeys');
  }

  getCiders() {
    return this.db.list('/products/Ciders');
  }

  getRhumCognac() {
    return this.db.list('/products/Rhum-Cognac');
  }
  
  getSnacks() {
    return this.db.list('/products/Snacks');
  }

  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  create(category, product) {
    this.db.list('/products/' + category).push(product);
  }

  update(category, productId, product) {
    return this.db.object('/products/' + category + '/' + productId).update(product);
  }

  delete(category, productId) {
    return this.db.object('/products/' + category + '/' + productId).remove();
  }

  // getAll() {
  //   return this.db.list('/bombus-products');
  // }

  // get(productId) {
  //   return this.db.object('/bombus-products/' + productId).valueChanges();
  // }

  // get(productId) {
  //   return this.db.object('/bombus-products/' + productId).valueChanges();
  // }

  // create(product) {
  //   this.db.list('/bombus-products').push(product);
  // }

  // update(productId, product) {
  //   return this.db.object('/bombus-products/' + productId).update(product);
  // }

  // delete(productId) {
  //   return this.db.object('/bombus-products/' + productId).remove();
  // }

}
