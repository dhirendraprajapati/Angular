import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { BrandsComponent } from './brands/brands.component';
import { RewardsComponent } from './rewards/rewards.component';
import { FaqComponent } from './faq/faq.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';

const myRoute: Routes = [
  {path:'', component:HomeComponent},
  {path:'howitworks', component:HowitworksComponent},
  {path:'brands', component:BrandsComponent},
  {path:'rewards', component:RewardsComponent},
  {path:'faq', component:FaqComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    HowitworksComponent,
    BrandsComponent,
    RewardsComponent,
    FaqComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
