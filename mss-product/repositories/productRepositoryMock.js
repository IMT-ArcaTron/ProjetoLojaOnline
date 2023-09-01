const IProductRepository = require("../interfaces/productRepositoryInterface");
const Product = require("../entities/product");

class ProductRepositoryMock extends IProductRepository {
  constructor() {
    super();
    // Inicialize qualquer estado necessário para o repositório de produtos
    this.products = [
      new Product({
        code: "1",
        name: "Micro Pong",
        price: 500,
        type: "Portátil",
        description: "Mini console do jogo clásico Pong",
        urlPhoto:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAD///+lpaWpqano6OhMTEy2trbt7e1DQ0MsLCyIiIhdXV26urqtra3b29vAwMBUVFQ9PT3i4uJXWFfV1dWVlZUwMDARERHHx8c2NjZ/f39wcHAlJSX19fViYmLPz88dHR2Dg4MVFRV0dHSbm5soKCiPj49ltTyZAAAD+UlEQVR4nO3d63aiMBRA4SlesFVEsfVaqh1t3/8RBxLryghEjgWJuL9fnTUxxN0bUsA/f2rWfcrz8vuJe7kTPw1+P3NziCVALIFrYr29KiPrIGJpIz0osg4ilvbosfxIqz5WV0/cbVGsnzp+5bGOdVbEsjiLNX3UWOHxG8w6iFjaPuik3qyDiCVALAFiCRBLgFgCxBIglgCxNC8aJ6KldRCxNF7uaMSyIZYAsQSIJcAhGoFrYm0Ob6lP6yBiCRBLoMWx1sd/Vh9rpf85b1Gs8SgMw9EojCuPtU1nDsNli2Kd4VyHXMQSuCrWQvlrHUMsLYj9RPxqHUQs7WFPDPGviNV/1FhBssOQEX5YH1Mq1jRn3mTmeZWLvwelYkEjlkCpQzTQJvtNyv6DDQAAQNt9vSe+3ptex10IYmXc9DruQqlDNNCIJUAsAWIJEEuAQzQCgw9l1vQ6AOAu7SZK08u4D0P967npZdyHmcOxpj3Fnb/EuxzLuZ3SU6xwrC7B6jS9IINzf5E+xRrrD+zXq92W87HCphdkIJYAsQSIJeDc8SyXY+3mz4n5c9PrOHE5lnOIJVBbrE3HyxWYg/YFg45Dp6eZOp19dhOHs0GWmVaVPKfaYgVPBRZlBmlDNaijPs65AWecGVSomkPTtcUqXP2VsfrZTfjGIM8+UzXHoIglQCyB28cyBxFL008x6p8brT/X6/Wn3tPUsaLgfFCQ/dm93ScPW2/MTWRjZTd33Oi0kudUc6wg+x+x8akOigb5mVjauGiQVzRTle4s1mvRIK/oe7VKxDKsBkrhHiyxDK96I4VHi4ll2F5oUHOssDeZTf4zuDKWv1XvOtCbJSbZQWas3XB2ZrgrteaGYxUSx9IdVj/LPR9kxppkN1futWHLYg3Ux3F20IVY5XZKiVVhrNO5DsS6/Ntw0A9SrYqVc/eCcrG+5srl61/qiRV38/k9NUgca+qnj44W6VU9hbEGvrElSazSbrafZRLHOjK/aC7sZ/l1xFqmn7GoW9mJIa2OVTViCRBLgFgCjcTKmanbsliFXDsGXxtiCRBLgFgCxBIIip6iqW9/ih/GTDmvw2Jj0E1ODKmNOm1vvrMPelfn9hWZL4yZcg4FfJmDbBM9Py+yjwZQwvGdBiq4AfMDOJ7a7c6FTi5z7qIBlxFLgFgCxBIgloCn38/epetFAQAAWuFzpK4lOTS9jrvAIRoBXu4IEEuAWALEEnDu9iou+94qNV9ECAAA8HhetstUzXe2aAn24AV4bShALAFiCRBLgB/wAi+h4tIt6gEAAFrhEKm3AuIW9WWwBy/Aa0MBvrIEiCVALAHn3rLPZXvvkPC+m14HAABA23j67sjOXVD+D6u5Un0k5KuZAAAAAElFTkSuQmCC",
      }),
      new Product({
        code: "2",
        name: "Arca Pi",
        price: 700,
        type: "Arcade de mesa",
        description: "Arcade com mais de 100 jogos clássicos",
        urlPhoto:
          "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70050000040005/4c56d0a1fedef0f2cee42fefd75819eb97729caf1bb44dc2cd4c5a398a85b242",
      }),
    ];
  }

  // Método para criar um novo produto
  create({ code, name, price, type, description, urlPhoto }) {
    // construtor de Product
    const newProduct = new Product({
      code,
      name,
      price,
      type,
      description,
      urlPhoto,
    });

    this.products.push(newProduct);
  }

  // Método para obter todos os produtos
  getAll() {
    return this.products;
  }

  // Método para obter um produto por código
  getByCode(code) {
    let found = this.products.find(
      (product) => product.code.toString() === code.toString()
    );
    return found ? [found] : [];
  }

  // Método para atualizar um produto existente
  update({ code, name, price, type, description, urlPhoto }) {
    const index = this.products.findIndex(
      (p) => p.code.toString() === code.toString()
    );

    if (name !== undefined) {
      this.products[index].name = name;
    }

    if (price !== undefined) {
      this.products[index].price = price;
    }

    if (type !== undefined) {
      this.products[index].type = type;
    }

    if (description !== undefined) {
      this.products[index].description = description;
    }

    if (urlPhoto !== undefined) {
      this.products[index].urlPhoto = urlPhoto;
    }
  }

  // Método para excluir um produto
  delete(code) {
    this.products = this.products.filter((product) => product.code !== code);
  }
}

module.exports = ProductRepositoryMock;
