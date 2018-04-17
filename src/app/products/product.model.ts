export class Product {
      constructor(
        public type: string,
        public name: string,
        public description: string,
        public image: string,
        public imagePathSm: string,
        public price: number,
        public qty: number = 1,
        public id?: string
      ) { }
    }
    