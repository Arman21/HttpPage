import { Person } from '../sign-up/person';


export class Girl extends Person {

    constructor(firstName,lastName : any,age,country,phones : Array<string>) {
        super(firstName,lastName,age,country,phones); 
            this.name = firstName;
            this.surName = lastName;
            this.age = age;
            this.country = country;
            this.mobile = phones;
    }

    public returnSome() {
        //console.log(this.id); - private
        console.log(this.country); // - protected +
        //this.saveInfo(); - private
    }

    public giveInfo2() {
        return `${this.name} lives in ${this.country}.`;
    }

}

export class Boy extends Girl {

    /*constructor() {
        super();
    }*/

    public takeInfos() {
        console.log(this.name);
        console.log(this.surName);
        console.log(this.country);
    }
}