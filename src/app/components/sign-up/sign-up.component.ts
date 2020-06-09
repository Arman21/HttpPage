import { Component , OnInit } from '@angular/core';
import { HttpStorageService } from '../../http-storage.service';
import { FormGroup , FormControl , Validators } from '@angular/forms';

@Component({
    selector  : 'app-sign-up',
    templateUrl : './sign-up.component.html',
    styleUrls : ['./sign-up.component.css']
})  

export class SignUpComponent implements OnInit {
    public signUpForm : FormGroup;

    constructor(private storage : HttpStorageService) { 

    }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            'name' : new FormControl('' , Validators.required),
            'surName' : new FormControl('' , Validators.required),
            'mobile' : new FormControl('0' , [Validators.required , Validators.pattern('[0-9]{9}')]),
            'eMail' : new FormControl('' , [Validators.required , Validators.email])
        });  
    }

    toSend() {
        this.storage.addAuser(this.signUpForm.value).subscribe(
            (success : any) => {
                this.signUpForm.reset();
                setTimeout(() => {
                    alert('Dear user , you successfully signed up!');
                },500);
            },
            (error : any) => {
                console.log(error);
            }
        ); 
    }

}
