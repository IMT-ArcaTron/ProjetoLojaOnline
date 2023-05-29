const IProductRepository = require('../interfaces/productRepositoryInterface');
const Product = require('../entities/product');

// Import para DB
const { Client } = require('pg');
results = null

class ProductRepositoryPg extends IProductRepository {
  constructor() {
    super();
  }

  // Método para criar um novo produto
  async create({
    code,
    name,
    price,
    type,
    description,
    urlPhoto
  }) {
    // construtor de User
    const newProduct = new Product({
      code,
      name,
      price,
      type,
      description,
      urlPhoto
    });

    // AINDA PRECISA VALIDAR ISSO - CB
    // Conexão com o banco de dados
    try {
      const client = new Client({
        host: "localhost",
        user: "postgres", // user CB
        password: "1234", // password CB
        database: "projetoLojaOnline",
        port: 5432
      })
      await client.connect()
      results = await client.query(`INSERT INTO tb_product VALUES (${code}, 
				  ${name},
				  ${price},
				  ${type},
				  ${description},
				  ${urlPhoto};`) // comando SQL
      console.log(results)
      await client.end
      return (results.rows)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Método para obter todos os produtos
  async getAll() {
    // Conexão com o banco de dados
    try {
      const client = new Client({
        host: "localhost",
        user: "postgres", // user CB
        password: "1234", // password CB
        database: "projetoLojaOnline",
        port: 5432
      })
      await client.connect()
      results = await client.query('SELECT * FROM tb_product') // comando SQL
      // console.log(results)
      await client.end
      return (results.rows)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Método para obter um produto por código
  async getByCode(code) {
    // Conexão com o banco de dados
    try {
      const client = new Client({
        host: "localhost",
        user: "postgres", // user CB
        password: "1234", // password CB
        database: "projetoLojaOnline",
        port: 5432
      })
      await client.connect()
      results = await client.query(`SELECT * FROM tb_product WHERE code = ${code}`) // comando SQL
      // console.log(results)
      await client.end
      return (results.rows)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Método para atualizar um produto existente
  // AINDA PRECISA VALIDAR ISSO - CB
  async update({ code, name, price, type, description }) {
    // Conexão com o banco de dados
    try {
      const client = new Client({
        host: "localhost",
        user: "postgres", // user CB
        password: "1234", // password CB
        database: "projetoLojaOnline",
        port: 5432
      })
      await client.connect()
      results = await client.query(`UPDATE tb_order 
                                    SET name = ${name}, 
                                    price = ${price},
                                    type = ${type}, 
                                    description = ${description},
                                    urlPhoto = ${urlPhoto}
                                    WHERE code = ${code}`) // comando SQL
      // console.log(results)
      await client.end
      return (results.rows)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Método para excluir um produto
  delete(code) {
    // deletar do banco de dados
  }
}

module.exports = ProductRepositoryPg;