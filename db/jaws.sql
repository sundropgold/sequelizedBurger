CREATE TABLE burgers (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name)
VALUES ("Big Meaty Burger");

INSERT INTO burgers(burger_name)
VALUES ("Krabby Patty Burger");

INSERT INTO burgers(burger_name)
VALUES ("Pretty Patty Burger");

INSERT INTO burgers(burger_name)
VALUES ("The Chick Filleter");