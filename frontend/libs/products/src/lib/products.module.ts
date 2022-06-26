import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

import { OrdersModule } from '@eshop/orders';
import { UiModule } from '@eshop/ui';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { GalleriaModule } from 'primeng/galleria';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'category/:categoryId',
    component: ProductsListComponent,
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    OrdersModule,
    RouterModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CheckboxModule,
    RatingModule,
    FormsModule,
    InputNumberModule,
    GalleriaModule,
    UiModule,
  ],
  declarations: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  exports: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductsListComponent,
    ProductDetailsComponent,
  ],
})
export class ProductsModule {}
