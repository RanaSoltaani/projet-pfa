import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes , RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JournalComponent } from './journal/journal.component';
import { GestionComponent } from './gestion/gestion.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    JournalComponent,
    GestionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
     
      { path:'login' ,component: AuthentificationComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
