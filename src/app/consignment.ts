export class Consignment {
    
        public serviceLevelDesc: Date;
        public freightAvailable: Date;
        public estimatedDeliveryDate: Date;
        public transpotationType: string;
        public requestedDeliveryTime: number;
        public willAdvice: number;
        public loadPick_Up_Date_From: Date;
        public deliveryDate_From: Date;
        public loadPick_Up_Date_To: Date;
        public deliveryDate_To: Date;
        public totalServiceCharge: number;
       
    
        constructor(){
            this.serviceLevelDesc= new Date();
            this.freightAvailable = new Date();
            this.estimatedDeliveryDate = new Date();
            this.transpotationType = "";
            this.requestedDeliveryTime = 0;
            this.willAdvice = 0;
            this.loadPick_Up_Date_From = new Date();
            this.deliveryDate_From = new Date();
            this.loadPick_Up_Date_To = new Date();
            this.deliveryDate_To = new Date();
            this.totalServiceCharge = 0.0;
            
        }
        
    }
    