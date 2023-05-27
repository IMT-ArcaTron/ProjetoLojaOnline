class Product {
    constructor({
        code, 
        name, 
        price, 
        type, 
        description, 
        urlPhoto
    }) {
      this.code = code;
      this.name = name;
      this.price = price;
      this.type = type;
      this.description = description;
      this.urlPhoto = urlPhoto;
    }
}

module.exports = Product;