export default class Address {
    public Name: string;
    public Email: string;
    public Phone: string;

    constructor(name: string, email: string, phone: string){
        this.Name = name;
        this.Email = email;
        this.Phone = phone;
    }
}