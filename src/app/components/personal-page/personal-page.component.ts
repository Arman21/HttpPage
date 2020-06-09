import { Component , OnInit } from '@angular/core';
import { HttpStorageService } from '../../http-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../sign-up/person';
import { Girl , Boy } from '../personal-page/girl';

@Component({
    selector  : 'app-personal-page',
    templateUrl : './personal-page.component.html',
    styleUrls : ['./personal-page.component.css']
})

export class PersonalPageComponent implements OnInit  {
    public title : any;
    public exp1 : boolean = true;
    public exp2 : boolean = false;

    public userInfo : Object = {
        first_name : '',
        last_name : ''
    };

    public stylesObj : Object = {
        'send' : this.exp1,
        'send2' : this.exp2
    };

    public user1 : Person = new Person('Arman',true,22,'Armenia',['098-77-44-23','43-55-78']);
    public user2 : Person = new Person('Arsen','Movsisyan',21,'Russia',['098-77-44-35','72-22-63']);
    public user3 : Person = new Person('Elen','Movsisyan',14,'Russia',['098-77-44-31','72-22-63']);

    public girl1 : Girl = new Girl('Qristine','Karapetyan',45,'Armenia',['098-77-44-28','43-55-78']);
    public girl2 : Girl = new Girl('Alisa','Karapetyan',43,'Armenia',['098-77-44-32','72-22-63']);

    public boy1 : Boy = new Boy('Artyom','Adamyan',10,'Armenia',['098-77-41-28','43-55-78']);

    constructor(private storage : HttpStorageService , private route : ActivatedRoute) { 

    }

    ngOnInit() {
        this.route.params.subscribe(param => {
            this.storage.takeAuser(param.id).subscribe(
                (success : any) => {
                    console.log(success);
                    this.title = success.data.first_name;
                },
                (error : any) => {
                    console.log(error);
                }
            );
        });

        console.log(this.user1);
        console.log(this.user2);
        console.log(this.user2.surName);
        console.log(this.user3);
        console.log(typeof this.user1.surName);
        this.user1.giveInfo();
       
        console.log(this.girl1);
        console.log(this.girl2);
        console.log(this.girl2.giveInfo());
        console.log(this.girl1.returnSome());

        console.log(this.boy1);
        this.boy1.takeInfos();
        //console.log(this.boy1.country); - protected(--private)

        console.log(this.girl1.giveInfo2());
    }

    sendInfo(className,newClass) {
        let numb = 1;
        for(let key in this.stylesObj) {
            if (numb == 1) {
                if (key == className) {
                    this.stylesObj[key] = !this.stylesObj[key];
                }
                numb = 2;
            }
            if (numb == 2) {
                if (key == newClass) {
                    this.stylesObj[key] = !this.stylesObj[key];
                }
                numb = 1;
            }
        }
        this.title = this.userInfo['first_name'];
        this.route.params.subscribe(param => {
            this.storage.updateInfo(param.id,this.userInfo).subscribe(
                (success : any) => {
                    console.log(success);
                },
                (error : any) => {
                    console.log(error);
                }
            );
        });
    }

}
