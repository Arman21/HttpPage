export class Person {
    public name : string = '';
    public surName : string = '';
    public age : number;
    public mobile : any;

    protected country : string = '';

    private id : string = '55770';

    constructor(firstName,lastName : any,age,country,phones : Array<string>) {
        this.name = firstName;
        this.surName = lastName;
        this.age = age;
        this.country = country;
        this.mobile = phones;
    }

    public giveInfo() {
        console.log(this.name + ' ' + this.surName + ',' + this.age + ' years, ' + 'from ' + this.country + '.');
    }

    private saveInfo() {
        console.log(this.id);
    }

    public giveInfo2() {
        return `${this.name} lives in ${this.country}.`;
    }

}
