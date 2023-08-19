class Product {
  constructor({ code, name, price, type, description, urlPhoto }) {
    this.code = code;
    this.name = name;
    this.price = price;
    this.type = type;
    this.description = description;
    this.urlPhoto = urlPhoto;
  }

  toJSON() {
    return {
      code: this.code,
      name: this.name,
      price: this.price,
      type: this.type,
      description: this.description,
      urlPhoto: this.urlPhoto,
    };
  }
}

module.exports = Product;
