import { Component , OnInit } from '@angular/core';
import { HttpStorageService } from '../../http-storage.service';

@Component({
    selector : 'app-users-page',
    templateUrl : './users-page.component.html',
    styleUrls : ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit  {
    public mainBlock : boolean = false;
    public users : any;
    public info : any;

    constructor(private storage : HttpStorageService) { 

    }

    ngOnInit() {
        this.storage.getInfo().subscribe(
            (success : any) => {
                console.log(success);  
                this.mainBlock = true; 
                this.users = success.data;           
            },
            (error : any) => {
                console.log(error);
                alert('Sorry dear user,something was wrong! :(');
            }
        );
    }

    removeUser(index,id) {
        this.info = id;
        this.storage.deleteInfo(this.info).subscribe(
            (success : any) => {
                console.log(success);
                this.users.splice(index,1);
            },
            (error : any) => {
                console.log(error);
            }
        );
    }

}
