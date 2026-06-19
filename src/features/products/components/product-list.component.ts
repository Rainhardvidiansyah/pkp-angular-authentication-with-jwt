import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../data/services/product.service';
import { Product } from '../../../core/models/product.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;
  errorMessage = '';
  searchQuery = ''; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Gagal ambil data!';
        this.isLoading = false;
      }
    });
  }

  loadProductById(): void{
    this.isLoading = true;
    this.productService.getProductById(1)
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.loadProducts();
      return;
    }
    this.isLoading = true;
    this.productService.searchProducts(this.searchQuery).subscribe({
      next: (res) => {
        this.products = res.products;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Gagal search!';
        this.isLoading = false;
      }
    });
  }
}