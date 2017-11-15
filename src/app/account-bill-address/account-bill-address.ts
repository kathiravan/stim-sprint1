export class accountbilladdress {
    public customerBillId: Number;
    public customerBillAddress1: string;
    public customerBillAddress2: string;    
    public customerBillCity: string;
    public customerBillZip: string;
    public customerBillState: string;
    public customerBillCountry: string;

    constructor(){
        this.customerBillId = 0;
        this.customerBillAddress1 = "";         
        this.customerBillAddress2 = "";
        this.customerBillCity = "";
        this.customerBillZip = "";
        this.customerBillState = "";
        this.customerBillCountry = "";
    }
}