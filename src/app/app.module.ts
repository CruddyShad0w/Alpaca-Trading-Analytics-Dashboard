import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioWatchedComponent } from './portfolio-watched/portfolio-watched.component';
import { PortfolioPurchaseComponent } from './portfolio-purchase/portfolio-purchase.component';
import { UserPagePreferencesComponent } from './user-page-preferences/user-page-preferences.component';
import { UserPageSettingsComponent } from './user-page-settings/user-page-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PortfolioComponent,
    SignInComponent,
    UserPageComponent,
    PortfolioDetailsComponent,
    PortfolioWatchedComponent,
    PortfolioPurchaseComponent,
    UserPagePreferencesComponent,
    UserPageSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
