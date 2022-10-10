import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JournalComponent } from './journal/journal.component';
import { GestionComponent } from './gestion/gestion.component';
const routes: Routes = [
  { path: 'acceuil' , component: GestionComponent },
  { path: 'login' , component: AuthentificationComponent },
  {path: 'sign' , component:  SignupComponent },
  {path: 'A propos' , component:  JournalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
