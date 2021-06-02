# Fast Shopping <img src="https://github.com/larts85/Fast-Shopping/blob/master/client/public/logo512.png" width="50px" />

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and some other technologies. It is a simple shopping cart.

#### TECHNOLOGIES

| **FullStack** | ✔          | ✔           | ✔             | ✔             | ✔                 | ✔           | ✔   |
| ------------- | ---------- | ----------- | ------------- | ------------- | ----------------- | ----------- | --- | --- | --- |
| **Languages** | JavaScript |             |               |               |                   |             |     |
| **Frontend**  | React Js   | React-Redux | Redux-Persist | React-Routing | Styled-Components | Material UI |
| **Backend**   | NodeJs     | Express     | SQL           | Sequelize     | MySQL             |             |     |     |     |

## First Steps

- Open a console for for a client an other for the api,
- run npm i and .then()
- npm start in both of them

Frontend is running in localhost 3000 while backend does at port 4000.

## Populating db

### In order to charge some data to display in client side you have 3 ways of doing:

1 - By the SQL sample scripts that I will forward provide.

2 - Clicking on the following button to access to the run in postman collection of endpoints

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12812076-e6ddfc80-3a5d-4acd-bac1-18bf67a69ee5?action=collection%2Ffork&collection-url=entityId%3D12812076-e6ddfc80-3a5d-4acd-bac1-18bf67a69ee5%26entityType%3Dcollection%26workspaceId%3D5e7c5edf-8687-49c4-8b9c-79ade0bbbba7)

3 - Using a seeder that i create to automatize the process, yo will find some comments in the `app.js` file in **api** side. This option will start a bulk creation o the mocked data _(Categories, Products and a function tha relate this to models)_.

### **I hope you enjoy navigating as much as i do coding** 😎

## ER Diagram

## SQL Scripts

```SQL
CREATE DATABASE `fastshopping`
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
```

```SQL
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

```

```SQL
INSERT INTO `fastshopping`.`categories`
(`id`,
`name`,
`createdAt`,
`updatedAt`)
VALUES
(
  id: ,
  name: ,
  createdAt: ,
  updatedAt:
);
```

```SQL
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `stock` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

```SQL
INSERT INTO `fastshopping`.`products`
(`id`,
`categoriesId`,
`name`,
`description`,
`price`,
`stock`,
`createdAt`,
`updatedAt`)
VALUES
(
  id: ,
  categoriesId: ,
  name: ,
  description: ,
  price: ,
  stock: ,
  createdAt: ,
  updatedAt:
);
```

```SQL
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` decimal(9,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

```SQL
CREATE TABLE `orderlines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productsId` int NOT NULL,
  `orderId` int NOT NULL,
  `subTotal` decimal(9,2) NOT NULL,
  `quantity` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productsId` (`productsId`),
  KEY `orderId` (`orderId`),
  CONSTRAINT `orderlines_ibfk_1` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `orderlines_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

```SQL
CREATE TABLE `category_product` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`productId`,`categoryId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `category_product_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `category_product_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
