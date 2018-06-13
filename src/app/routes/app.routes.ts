import { AdminAuthGuardService } from './../services/admin/admin-auth-guard.service';
import { AuthGuardService } from './../services/auth-guard/auth-guard.service';
import { CanActivate } from '@angular/router';
import { Component } from '@angular/core';
import { RegisterComponent } from './../pages/auth/register/register.component';
import { AdminOrdersComponent } from './../pages/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './../pages/admin/admin-products/admin-products.component';
import { OrderSuccessComponent } from './../pages/order-success/order-success.component';
import { CheckOutComponent } from './../pages/check-out/check-out.component';
import { HomeComponent } from './../pages/home/home.component';
import { ProductsComponent } from '../pages/products/products.component';
import { ShoppingCartComponent } from '../pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { MyOrdersComponent } from '../pages/my-orders/my-orders.component';

export const ALL_ROUTES: any[] = [
    { 
        path: '', 
        component: HomeComponent },
    { 
        path: 'products', 
        component: ProductsComponent },
    { 
        path: 'login', 
        component: LoginComponent },
    { 
        path: 'register', 
        component: RegisterComponent },
    { 
        path: 'shopping-cart', 
        component: ShoppingCartComponent 
    },
    
    { 
        path: 'check-out', 
        component: CheckOutComponent, 
        canActivate: [AuthGuardService] 
    },
    { 
        path: 'order-success', 
        component: OrderSuccessComponent, 
        canActivate: [AuthGuardService] 
    },
    { 
        path: 'my/orders', 
        component: MyOrdersComponent, 
        canActivate: [AuthGuardService] 
    },

    { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] },
    { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] },

    { 
        path: '**', 
        component: NotFoundComponent 
    },
]