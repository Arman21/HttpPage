import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpStorageService } from './http-storage.service';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersPageComponent,
        PersonalPageComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers : [HttpStorageService],
    bootstrap : [AppComponent]
})

export class AppModule { }
