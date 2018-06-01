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

export const ALL_ROUTES: any[] = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'check-out', component: CheckOutComponent },
    { path: 'order-success', component: OrderSuccessComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login', component: RegisterComponent },
    { path: 'admin/products', component: AdminProductsComponent },
    { path: 'admin/orders', component: AdminOrdersComponent },
    { path: '**', component: NotFoundComponent },
]