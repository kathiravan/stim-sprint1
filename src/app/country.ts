export class Country {
  constructor(
    public id: number,
    public name: string) {

  }
}

export class State {
  constructor(
    public id: number,
    public name: string) {

  }
}

export class CustomerType {
  constructor(
    public id: number,
    public name: string) {

  }
}

export class LocationType {
  constructor(
    public id: number,
    public name: string) {

  }
}

export class ShippingMode {
  constructor(
    public id: number,
    public name: string) {

  }
}

export class ShipPackage {
  constructor(
    public id: number,
    public name: string) {

  }
}

export class ShipClass {
  constructor(
    public id: number,
    public name: string) {

  }
}

export class ShipMeasurement {
  constructor(
    public id: number,
    public name: string) {

  }
}

interface AfterViewChecked {
    ngAfterViewChecked(): void
}




