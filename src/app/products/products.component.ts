import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products$: any;
  // products: any[] = [];
  beers$: any;
  whiskeys$: any;
  ciders$: any;
  rhumCognac$: any;
  snacks$: any;

  constructor(private productService: ProductService) { 
    // this.products$ = this.productService.getAll().snapshotChanges()
    // .map(actions => {
    //   return actions.map(snap => {
    //     let id = snap.payload.key;
    //     let data = { id, ...snap.payload.val() };
      
    //     return data;
    //   });
    // });
    // this.products$ = this.productService.getAll().snapshotChanges().
    // subscribe(res => {
    //   return res.map(snap => {
    //     let id = snap.payload.key;
    //     let data = { id...snap.payload.val() };
    //     console.log(snap.payload.key);
        
        // for(let mem in snap.payload.val()) {
        //   if (snap.payload.val().hasOwnProperty(mem)) {
        //     let member = data[mem];
        //     member.id = mem
            
        //     this.products.push(member);
        //   }
        // }
    //     return data
    //   });
    // });
    this.beers$ = this.productService.getBeers().snapshotChanges()
    .map(actions => {
      return actions.map(snap => {
        let id = snap.payload.key;
        let data = { id, ...snap.payload.val() };
        
        return data;
      });
    });

    this.whiskeys$ = this.productService.getWhiskeys().snapshotChanges()
    .map(actions => {
      return actions.map(snap => {
        let id = snap.payload.key;
        let data = { id, ...snap.payload.val() };
      
        return data;
      });
    });

    this.ciders$ = this.productService.getCiders().snapshotChanges()
    .map(actions => {
      return actions.map(snap => {
        let id = snap.payload.key;
        let data = { id, ...snap.payload.val() };
      
        return data;
      });
    });

    this.rhumCognac$ = this.productService.getRhumCognac().snapshotChanges()
    .map(actions => {
      return actions.map(snap => {
        let id = snap.payload.key;
        let data = { id, ...snap.payload.val() };
      
        return data;
      });
    });

    this.snacks$ = this.productService.getSnacks().snapshotChanges()
    .map(actions => {
      return actions.map(snap => {
        let id = snap.payload.key;
        let data = { id, ...snap.payload.val() };
      
        return data;
      });
    });

  }

  ngOnInit() {
  }

}
