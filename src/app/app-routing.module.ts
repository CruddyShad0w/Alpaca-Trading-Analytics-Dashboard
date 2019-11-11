import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";

import { PortfolioComponent } from "./portfolio/portfolio.component";
import { PortfolioDetailsComponent } from "./portfolio-details/portfolio-details.component";
import { PortfolioPurchaseComponent } from "./portfolio-purchase/portfolio-purchase.component";
import { PortfolioWatchedComponent } from "./portfolio-watched/portfolio-watched.component";

import { UserPageComponent } from "./user-page/user-page.component";
import { UserPagePreferencesComponent } from "./user-page-preferences/user-page-preferences.component";
import { UserPageSettingsComponent } from "./user-page-settings/user-page-settings.component";


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'signIn', component:SignInComponent},
  { path:'portfolio', component:PortfolioComponent,
    children:[
      {path: 'details', component:PortfolioDetailsComponent},
      {path: 'purchase', component:PortfolioPurchaseComponent},
      {path: 'watched', component:PortfolioWatchedComponent}
    ]
  },
  { path:'userPage', component:UserPageComponent,
    children:[
      {path: 'preferences', component:UserPagePreferencesComponent},
      {path: 'settings', component:UserPageSettingsComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
