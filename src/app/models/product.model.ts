export class Product {
  imageUrl: string;
  name: string;
  size: string;
  color: string;
  material: string;
  seller: string;
  price: number;

  constructor(
    imageUrl: string,
    name: string,
    size: string,
    color: string,
    material: string,
    seller: string,
    price: number
  ) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.size = size;
    this.color = color;
    this.material = material;
    this.seller = seller;
    this.price = price;
  }

}
