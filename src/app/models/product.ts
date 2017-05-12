export class Product {

    constructor(
        public productID: number,
        public title: string,
        public picture: string,
        public color: string,
        public category: string,
        public description: string,
        public variety: string,
        public price: number,
        public quantity: number,
        public paymentTerm: string,
        public delivery: string) {}
}
