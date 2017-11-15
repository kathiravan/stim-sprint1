export class contracttemplateinfo {
    public accounttemplateId: Number;
    public accountServiceLevel: Number;
    public accountFreightdate: string;    
    public accountdeliverydate: string;
    public accountcarrierPRONumber: string;
    public accountcarrierPONumber: string;

    constructor(){
        this.accounttemplateId = -1;
        this.accountServiceLevel = -1;         
        this.accountFreightdate = "";
        this.accountdeliverydate = "";
        this.accountcarrierPRONumber = "";
        this.accountcarrierPONumber = "";
    }
}