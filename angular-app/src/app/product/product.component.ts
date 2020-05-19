import { Component, OnInit } from '@angular/core';
import { NgForm, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { Product } from '../services/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProduct();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.productService.selectedProduct = {
      _id: "",
      productName: "",
      createdDate: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "" || form.value._id == null) {
      this.productService.createProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProduct();
      });
    }
  }

  refreshProduct() {
    this.productService.getProduct().subscribe((res) => {
      this.productService.products = res as Product[];
    });
  }

  onDelete(_id: string, form: NgForm) {
      this.productService.deleteProduct(_id).subscribe((res) => {
        this.resetForm(form);
        this.refreshProduct();
      });
  }

}
