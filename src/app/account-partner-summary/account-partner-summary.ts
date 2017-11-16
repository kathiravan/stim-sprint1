export class accountpartnersummary {
    public partnerId:number;
    public performingPartner:string;
    public partnerAddress1:string;
    public partnerAddress2:string;
    public partnerCity:string;
    public partnerStateId:string;
    public partnerStateName:string;
    public partnerZip:string;
    public partnerMainPhone:string;
    public partnerMainFax:string;
    public partnerContact:string;
    public partnerEmail:string;
    public partnerCountryId:number;
    public partnerCountryName:string;

    constructor(){
        this.partnerId=-1;
        this.performingPartner="";
        this.partnerAddress1="";
        this.partnerAddress2="";
        this.partnerCity="";
        this.partnerStateId="";
        this.partnerZip="";
        this.partnerMainPhone="";
        this.partnerMainFax="";
        this.partnerContact="";
        this.partnerEmail="";
        this.partnerCountryId=-1;
        this.partnerCountryName="";
        this.partnerStateName="";
    }
}