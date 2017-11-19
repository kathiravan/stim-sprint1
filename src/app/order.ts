export class OrderInfo {
 public bookerName: string;
 public bosContract: string;
 public carrierProNbr: string;
 public cbaddress1: string;
 public cbaddress2: string;
 public cbcity: string;
 public cbmainFax: string;
 public cbmainPhone: string;
 public cbstateId: string;
 public cbzip: string;
 public claimFlag: number;
 public contactName: string;
 public contactPhone: string;
 public custRefNumber: string;
 public customerCarrierId: number;
 public customerName: string;
 public customerid: string;
 public deliveryDate: string;
 public finalMileMiles: number;
 public fmbosContract: string;
 public freightAvailable: string;
 public orderStatusID: number;
 public pONumber: string;
 public pickupMiles: number;
 public salesrep: string;
 public scacid: string;
 public serviceLevelID: number;
 public orderTemplate: string;
 public serviceLevelDesc: string;

 public partnerId:number;
 public performingPartner:string;
 public partnerAddress1:string;
 public partnerAddress2:string;
 public partnerCity:string;
 public partnerStateId:string;
 public partnerZip:string;
 public partnerMainPhone:string;
 public partnerMainFax:string;
 public partnerContact:string;
 public partnerEmail:string;
 public partnerCountryId:number;
 public partnerStateName:string;
 public projectid:number;
 public salesPersonName:string;
 public cbCountryId:number;
 public cbStateName:string;
 public cbEmail:string;
 public cbCountryName:string;
 public countryName:string;
 public partnerCountryName:string;

 constructor(){

  this.bookerName="";
  this.bosContract = "";
  this.carrierProNbr = "";
  this.cbaddress1 = "";
  this.cbaddress2 = "";
  this.cbcity = "";
  this.cbmainFax = "";
  this.cbmainPhone = "";
  this.cbstateId = "";
  this.cbzip = "";
  this.claimFlag = -1;
  this.contactName = "";
  this.contactPhone = "";
  this.custRefNumber = "";
  this.customerCarrierId = -1;
  this.customerName = "";
  this.customerid = "";
  this.deliveryDate = "";
  this.finalMileMiles = -1;
  this.fmbosContract = "";
  this.freightAvailable = "";
  this.orderStatusID = -1;
  this.pONumber = "";
  this.pickupMiles = -1;
  this.salesrep = "";
  this.scacid = "";
  this.serviceLevelID = -1;
  this.orderTemplate = "";;
  this.serviceLevelDesc = "";

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
  this.partnerStateName="";
  this.projectid=-1;
  this.salesPersonName="";
  this.cbCountryId=-1;
  this.cbStateName="";
  this.cbEmail="";
  this.cbCountryName="";
  this.countryName="";
  this.partnerCountryName="";

 }
}

export class OrderShippingInfo {
    public oaddress1: string;
    public oaddress2: string;
    public ocity: string;
    public ostateId: string;
    public ozip: string;
    public ocountrycode: string;
    public daddress1: string;
    public daddress2: string;
    public dcity: string;
    public dstateId: string;
    public dzip: string;
    public dcountrycode: string;
    public projectid:number;
    public oName: string;
    public oPhone: string;
    public oCellPhone: string;
    public oEmail: string;
    public oWorkphone: string;
    public dName: string;
    public dPhone: string;
    public dCellPhone: string;
    public dEmail: string;
    public dWorkphone: string;
    public partnerId:number;
    public performingPartner: string;
    public partnerAddress1: string;
    public partnerAddress2: string;
    public partnerCity: string;
    public partnerStateId: string;
    public partnerZip: string;
    public partnerMainPhone: string;
    public partnerMainFax: string;
    public partnerContact: string;
    public partnerEmail: string;
    public partnerCountryId:number;
    public partnerStateName: string;
    public partnerCountryName: string;
  
   constructor(){
    this.oaddress1="";
    this.oaddress2="";
    this.ocity="";
    this.ostateId="";
    this.ozip="";
    this.ocountrycode="";
    this.daddress1="";
    this.daddress2="";
    this.dcity="";
    this.dstateId="";
    this.dzip="";
    this.dcountrycode="";
    this.projectid=-1;
    this.oName="";
    this.oPhone="";
    this.oCellPhone="";
    this.oEmail="";
    this.oWorkphone="";
    this.dName="";
    this.dPhone="";
    this.dCellPhone="";
    this.dEmail="";
    this.dWorkphone="";
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
    this.partnerStateName="";
    this.partnerCountryName="";
    
  }
}

 