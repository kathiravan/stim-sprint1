export class accountbookeraddress {
    public customerBookerId: Number;
    public customerBookerName: string;
    public customerBookerContactName1: string;    
    public customerBookerPhone: string;
    public customerBookerExtn: string;
    public customerBookersalesrep: string;
    public customerBookerAccountRef: string;

    constructor(){
        this.customerBookerId = 0;
        this.customerBookerName = "";         
        this.customerBookerContactName1 = "";
        this.customerBookerPhone = "";
        this.customerBookerExtn = "";
        this.customerBookersalesrep = "";
        this.customerBookerAccountRef = "";
    }
}