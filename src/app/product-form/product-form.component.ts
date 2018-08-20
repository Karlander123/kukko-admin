import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  beer_types: any;
  whiskey_types: any[];
  cider_types: any[];
  rhumCognac_types: any[];
  years: number[] = [];
  tastes: any[];
  categories: any[];
  gluten_check: boolean = false;
  bottle_check: boolean = false;
  draft_check: boolean = false;
  
  // types: any[];
  product = <any>{};
  id;
  cat;
  // ref: AngularFireStorageReference;
  // task: AngularFireUploadTask;
  // selectedFile: any;
  // imgName: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage
  ) {
    this.categories = [
      'Beers', 'Whiskeys', 'Ciders', 'Rhum-Cognac', 'Snacks'
    ];

    this.beer_types = [
      { 'name': 'Pale Lager', 'value': 1 },
      { 'name': 'Dark Lager', 'value': 2 },
      { 'name': 'Ale', 'value': 3 },
      { 'name': 'Porter/Stout', 'value': 4 },
      { 'name': 'Special', 'value': 5 }
    ];

    this.whiskey_types = [
      { 'name': 'Single Malt', 'value': 1 },
      { 'name': 'Blended', 'value': 2 },
      { 'name': 'Bourbon', 'value': 3 }
    ];

    this.cider_types = [
      { 'name': 'Cider', 'value': 1 },
      { 'name': 'Mixed drink', 'value': 2 }
    ];

    this.rhumCognac_types = [
      { 'name': 'Rhum', 'value': 1 },
      { 'name': 'Cognac', 'value': 2 }
    ];

    this.tastes = [
      { 'name': 'Dry', 'value': 1 },
      { 'name': 'Sweet', 'value': 2 }
    ];

    for(var i = 0; i < 50; i++) {
      this.years[i] = i + 1;
    }

    this.id = this.route.snapshot.paramMap.get('id');
    this.cat = this.route.snapshot.paramMap.get('cat');
    
    if(this.id) this.productService.get(this.cat + '/' + this.id).take(1).subscribe(p => {
      this.product = p;
      console.log(this.product);
    }); 
   }

  //  selectFile(file) {
  //   this.imgName = file.name;
  //   this.selectedFile = file;
  //   console.log(this.imgName);
  // }

   save(product) {
    // this.task = this.afStorage.ref(this.product.title).put(this.selectedFile);

    // this.task.then(snapshot => {
      // if(this.product.imgUrl && this.imgName) this.afStorage.ref(this.product.imgName).delete();
      
      // product.imgUrl = snapshot.downloadURL;
      // product.imgName = product.title;
      
      if (this.id) {
        this.productService.update(this.cat ,this.id, product);
      } 
      else {
        this.productService.create(product.category, product); 
      } 

      this.router.navigate(['/products']);
    // });
  }

  delete() {
    if (!confirm('Do you really want to delete this product?')) return;

    this.afStorage.ref(this.product.title).delete();
    this.productService.delete(this.cat, this.id);
    this.router.navigate(['/products']);
  }


  ngOnInit() {
  }

}
