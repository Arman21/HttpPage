import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
    {path : '' , redirectTo : 'users-page' , pathMatch : 'full'},
    {path : 'users-page' , component : UsersPageComponent},
    {path : 'personal-page/:id' , component : PersonalPageComponent},
    {path : 'sign-up' , component : SignUpComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule  { 
    
}
