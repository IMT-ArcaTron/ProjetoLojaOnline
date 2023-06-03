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
                                  '${name}',
                                  ${price},
                                  '${type}',
                                  '${description}',
                                  '${urlPhoto}')`)
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
      console.log(results)
      await client.end
      return (results.rows)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Método para atualizar um produto existente
  async update({ code, name, price, type, description, urlPhoto }) {
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
      results = await client.query(`UPDATE tb_product 
                                    SET name = '${name}', 
                                    price = ${price},
                                    type = '${type}', 
                                    description = '${description}',
                                    urlphoto = '${urlPhoto}'
                                    WHERE code = ${parseInt(code)}`) // comando SQL
      // console.log(results)
      await client.end
      return (results.rows)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Método para excluir um produto
  async delete(code) {
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
      results = await client.query(`DELETE FROM tb_product WHERE code = ${parseInt(code)} ;`) // comando SQL
      // console.log(results)
      await client.end
      return (results.rows)
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = ProductRepositoryPg;