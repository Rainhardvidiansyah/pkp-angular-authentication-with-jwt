import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../data/services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { CommonModule } from '@angular/common';
import th from '@angular/common/locales/th';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product: Product | null = null;
  isLoading = false;
  errorMessage = ''

  constructor(
    private readonly productService: ProductService,
    private route: ActivatedRoute
  ){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.loadProduct(+id);
      }
    }

    loadProduct(id: number): void {
      this.isLoading = true;
      this.productService.getProductById(id)
      .subscribe({
        next: (res) => {
          this.product = res;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to consume Product API';
          this.isLoading = false;
        }
      })
    }




}
