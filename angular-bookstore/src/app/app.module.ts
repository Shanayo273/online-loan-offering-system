import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminsComponent } from './components/admin/admins/admins.component';
import { AdduserComponent } from './components/admin/admins/adduser/adduser.component';
import { ViewuserComponent } from './components/admin/admins/viewuser/viewuser.component';
import { AddbookComponent } from './components/admin/admins/addbook/addbook.component';
import { ViewbookComponent } from './components/admin/admins/viewbook/viewbook.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { InstallmentpageComponent } from './components/installmentpage/installmentpage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

//client side paging
//import { JwPaginationComponent } from 'jw-angular-pagination';


const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'books', component: BookListComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: 'admin/users', component: AdminsComponent },
  {path: 'admin/books', component: AddbookComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'installment',component:InstallmentpageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    AdminsComponent,
    AdduserComponent,
    ViewuserComponent,
    AddbookComponent,
    ViewbookComponent,
    LoginComponent,
    RegisterComponent,
    BoardModeratorComponent,
    AdminloginComponent,
    InstallmentpageComponent,
    AboutusComponent,
    ContactusComponent
    //client side paging
    //JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,      
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
