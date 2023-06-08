const IOrderRepository = require('../interfaces/orderRepositoryInterface');
const Order = require('../entities/order');

// Import para DB
const { Client } = require('pg')
results = null




class OrderRepositoryMock extends IOrderRepository {
    constructor(productRepository) {
        super();
        this.productRepository = productRepository;

    }

    // Método para obter um produto por código
    async getByCode(productCode) {
        let found
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
            results = await client.query(`SELECT * FROM tb_order WHERE product = ${productCode}`) // comando SQL
            console.log("rowcount: " + (results.rowCount))
            await client.end
            // found.lenght = results.rowCount;
            if (results.rowCount > 0) {
                found = 'results'
            } else {
                found = false
            }
        }
        catch (error) {
            console.log(error)
        }
        return found
    }

    async add(productCode) {
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
            results = await client.query(`SELECT * FROM tb_order WHERE product = ${productCode}`) // comando SQL
            if (results.rowCount == 0) {
                results = await client.query(`INSERT INTO tb_order 
                                                  VALUES ('post@gres.com', ${parseInt(productCode)}, 1)`) // comando SQL
            } else {
                results = await client.query(`UPDATE tb_order 
                                                  SET quantity = (quantity+1) 
                                                  WHERE product = ${productCode}`)
            }
            // console.log(results)
            await client.end
            console.log(await this.getAll())
            return (results.rows)
        }
        catch (error) {
            console.log(error)
        }
    }

    async remove(productCode) {
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
            results = await client.query(`SELECT * FROM tb_order WHERE product = ${productCode}`) // comando SQL
            if (results.rowCount > 0) {
                if (results.rows[0].quantity == 1) {
                    results = await client.query(`DELETE FROM tb_order 
                                                  WHERE product = ${parseInt(productCode)} `) // comando SQL
                } else {
                    results = await client.query(`UPDATE tb_order 
                                                  SET quantity = (quantity-1) 
                                                  WHERE product = ${productCode}`)
                }
            }
            // console.log(results)
            await client.end
            console.log(await this.getAll())
            return (results.rows)
        }
        catch (error) {
            console.log(error)
        }
    }

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
            results = await client.query('SELECT * FROM tb_order') // comando SQL
            // console.log(results)
            await client.end
            return (results.rows)
        }
        catch (error) {
            console.log(error)
        }
    }

}

module.exports = OrderRepositoryMock;