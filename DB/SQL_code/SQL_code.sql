DROP TABLE IF EXISTS tb_user CASCADE ;
CREATE TABLE tb_user (
	userCode INTEGER NOT NULL,
  	name VARCHAR(200) NOT NULL,
	phone CHAR(20),
  	email VARCHAR(200) PRIMARY KEY,
  	password VARCHAR(300) NOT NULL,
  	address VARCHAR (400)
) ;


DROP TABLE IF EXISTS tb_product CASCADE ;
CREATE TABLE tb_product (
	code INTEGER PRIMARY KEY, 
	name VARCHAR(100) NOT NULL, 
	price FLOAT NOT NULL, 
	type VARCHAR(100) NOT NULL, 
	description VARCHAR(300), 
	urlPhoto VARCHAR(400)
) ;


CREATE TABLE tb_order (
	user_email VARCHAR(200) NOT NULL, 
	product INTEGER NOT  NULL,
	quantity INTEGER NOT NULL,
	FOREIGN KEY (user_email) REFERENCES tb_user(email) 
        ON DELETE CASCADE ON UPDATE CASCADE
) ;


SELECT * FROM tb_user ;
INSERT INTO tb_user VALUES (1000, 
							'Post Gres', 
							'(11) 99999-9999', 
							'post@gres.com', 
							'$2b$10$PIaUJydDDutUIGMDKzhsw.tK1drzURq5Q8/GMnz36wfiFKq1XPdqK',
						    'Rua A Senha Eh, 1234'); 

SELECT * FROM tb_product ;
INSERT INTO tb_product VALUES (1000, 
				    'Produto 1',
				    199.99,
				    'tipo teste',
				    'Esse é um produto teste para fazer testes',
				   	null);
		
SELECT * FROM tb_order ;
INSERT INTO tb_order VALUES (
							 'post@gres.com',
							 1000,
							 2);