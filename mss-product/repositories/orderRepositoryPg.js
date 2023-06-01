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
            // ESSA QUERY ADICIONA OS VALORES DE USER_EMAIL E QUANTITY PADRÃO
            results = await client.query(`INSERT INTO tb_order VALUES (
                                        'post@gres.com', 
                                        ${parseInt(productCode)},
                                        1)`)
            console.log(results)
            await client.end
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
            results = await client.query(`DELETE FROM tb_order WHERE code = ${parseInt(productCode)} ;`) // comando SQL
            // console.log(results)
            await client.end
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
            console.log(results)
            await client.end
            return (results.rows)
        }
        catch (error) {
            console.log(error)
        }
    }

}

module.exports = OrderRepositoryMock;