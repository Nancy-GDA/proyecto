DROP DATABASE IF EXISTS cut_emprendedor;
CREATE DATABASE cut_emprendedor;
USE cut_emprendedor;

create table vendedor (
    id_vendedor INT(6) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20),
    apellidos VARCHAR(50),
    celular INT(12),
    usuario VARCHAR(25) UNIQUE,
    contrasena VARCHAR(100),
    estatus ENUM('Activo', 'Inactivo'),
    ubicacion VARCHAR(15)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table comprador(
    id_comprador INT(6) AUTO_INCREMENT PRIMARY KEY,
    nombre  VARCHAR(20),
    apellidos VARCHAR (50),
    usuario VARCHAR(25) UNIQUE,
    contrasena INT(5),
    celular INT(10)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table categoria (
    id_categoria INT(6) AUTO_INCREMENT PRIMARY KEY,
    categoria CHAR(20)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table producto (
    id_producto INT(6) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(70),
    precio INT(4),
    id_vendedor INT(6),
    id_categoria INT(6),
    FOREIGN KEY (id_vendedor) REFERENCES vendedor(id_vendedor),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


create table pedido (
    id_pedido INT (6) AUTO_INCREMENT PRIMARY KEY,
    id_comprador INT (6),
    id_producto INT (6),
    id_vendedor INT (6),
    total FLOAT (5),
    FOREIGN KEY (id_vendedor) REFERENCES vendedor(id_vendedor),
    FOREIGN KEY (id_comprador) REFERENCES comprador (id_comprador),
    FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;




