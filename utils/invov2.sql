-- Active: 1710054271627@@127.0.0.1@3306
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2024 at 06:06 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4
CREATE DATABASE invov2;

USE invov2;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;

--
-- Database: `invov2`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
    `bill_id` int(11) NOT NULL, `total_amt` float NOT NULL, `disc_amt` float NOT NULL, `purchase_date` date DEFAULT NULL, `customer_id` int(11) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `bills`
--

INSERT INTO
    `bills` (
        `bill_id`, `total_amt`, `disc_amt`, `purchase_date`, `customer_id`
    )
VALUES (
        1, 230.3, 14.7, '2024-02-16', 1
    ),
    (
        2, 96.82, 6.18, '2024-02-16', 2
    ),
    (
        3, 366.6, 23.4, '2024-02-16', 3
    ),
    (
        4, 203.04, 12.96, '2024-02-16', 4
    ),
    (
        5, 125.02, 7.98, '2024-02-16', 5
    ),
    (
        6, 81.78, 5.22, '2024-02-16', 6
    ),
    (
        7, 255.68, 16.32, '2024-02-16', 7
    ),
    (
        8, 197.4, 12.6, '2024-02-16', 8
    ),
    (
        9, 131.6, 8.4, '2024-02-16', 9
    ),
    (10, 282, 18, '2024-02-16', 10),
    (
        11, 118.44, 7.56, '2024-02-16', 11
    ),
    (
        12, 180.48, 11.52, '2024-02-16', 12
    ),
    (
        13, 67.68, 4.32, '2024-02-16', 13
    ),
    (
        14, 276.36, 17.64, '2024-02-16', 14
    ),
    (
        15, 109.04, 6.96, '2024-02-16', 15
    ),
    (
        16, 427.7, 27.3, '2024-02-16', NULL
    ),
    (
        17, 507.6, 32.4, '2024-02-16', NULL
    ),
    (
        18, 142.88, 9.12, '2024-02-16', NULL
    ),
    (
        19, 138.18, 8.82, '2024-02-16', NULL
    ),
    (
        20, 191.76, 12.24, '2024-02-16', NULL
    );

-- --------------------------------------------------------

--
-- Table structure for table `bill_items`
--

CREATE TABLE `bill_items` (
    `bill_id` int(11) NOT NULL, `item_id` int(11) NOT NULL, `item_qty` int(11) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `bill_items`
--

INSERT INTO
    `bill_items` (
        `bill_id`, `item_id`, `item_qty`
    )
VALUES (1, 1, 5),
    (1, 2, 10),
    (2, 3, 3),
    (2, 4, 8),
    (3, 5, 6),
    (3, 6, 12),
    (4, 7, 2),
    (4, 8, 4),
    (5, 9, 7),
    (5, 10, 14),
    (6, 11, 4),
    (6, 12, 9),
    (7, 13, 8),
    (7, 14, 16),
    (8, 15, 3),
    (8, 16, 6),
    (9, 17, 10),
    (9, 18, 20),
    (10, 19, 5),
    (10, 20, 10),
    (11, 21, 7),
    (11, 22, 14),
    (12, 23, 6),
    (12, 24, 12),
    (13, 25, 9),
    (14, 1, 6),
    (14, 2, 12),
    (15, 3, 4),
    (15, 4, 8),
    (16, 5, 7),
    (16, 6, 14),
    (17, 7, 5),
    (17, 8, 10),
    (18, 9, 8),
    (18, 10, 16),
    (19, 11, 7),
    (19, 12, 14),
    (20, 13, 6),
    (20, 14, 12);

--
-- Triggers `bill_items`
--
DELIMITER $$

CREATE TRIGGER `before_insert_bill_items` BEFORE INSERT 
ON `bill_items` FOR EACH ROW 
BEGIN 
DECLARE
	new_bill_id INT;
	-- Check if the bill_id already exists for the current transaction
	IF NOT EXISTS (
	    SELECT 1
	    FROM bills
	    WHERE
	        bill_id = NEW.bill_id
	) THEN
	-- Find the maximum existing bill_id in the bills table
	SELECT IFNULL(MAX(bill_id), 0) + 1 INTO new_bill_id
	FROM bills;
	-- Insert the new bill_id into the bills table if it doesn't exist already
	INSERT IGNORE INTO
	    bills (
	        bill_id, total_amt, disc_amt, purchase_date
	    )
	VALUES (new_bill_id, 0, 0, CURDATE());
	-- Set the new bill_id for insertion into the bill_items table
	SET NEW.bill_id = new_bill_id;
END
	IF;
END
$$ 

DELIMITER;

DELIMITER $$

CREATE TRIGGER `update_bills_on_submit` AFTER INSERT 
ON `bill_items` FOR EACH ROW 
BEGIN 
DECLARE
	total_amount FLOAT;
DECLARE
	discount_amount FLOAT;
	-- Calculate total amount based on bill_items
	SELECT SUM(item_qty * selling_price) INTO total_amount
	FROM bill_items bi
	    JOIN stocks s ON bi.item_id = s.item_id
	WHERE
	    bi.bill_id = NEW.bill_id;
	-- Check if total amount is greater than or equal to 200
	 IF total_amount > = 50 THEN SET discount_amount = total_amount * 0 . 06;
	-- 10% discount
	ELSE SET discount_amount = 0;
	-- No discount if total amount is less than 200
END
	IF;
	-- Update total_amt, disc_amt, and purchase_date in bills table
	UPDATE bills
	SET
	    total_amt = total_amount - discount_amount,
	    -- Subtract discount from total
	    disc_amt = discount_amount,
	    purchase_date = CURDATE()
	WHERE
	    bill_id = NEW.bill_id;
END
$$ 

DELIMITER;

DELIMITER $$

CREATE TRIGGER `update_stocks_qty_after_submit` AFTER 
INSERT ON `bill_items` FOR EACH ROW 
BEGIN 
DECLARE
	available_quantity INT;
	-- Retrieve available quantity for the item_id
	SELECT qty INTO available_quantity
	FROM stocks
	WHERE
	    item_id = NEW.item_id;
	-- Check if available quantity is sufficient
	IF NEW.item_qty < = available_quantity THEN
	-- Update stocks_qty by subtracting the quantity
	UPDATE stocks
	SET
	    qty = qty - NEW.item_qty
	WHERE
	    item_id = NEW.item_id;
	ELSE
	-- Raise an error if quantity is insufficient
	SIGNAL SQLSTATE '45000'
	SET
	    MESSAGE_TEXT = 'Error: Insufficient quantity in stocks';
END
	IF;
END
$$ 

DELIMITER;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
    `customer_id` int(11) NOT NULL, `customer_name` varchar(40) NOT NULL, `phone` int(10) NOT NULL, `email` varchar(40) NOT NULL, `password_hash` varchar(40) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO
    `customer` (
        `customer_id`, `customer_name`, `phone`, `email`, `password_hash`
    )
VALUES (
        1, 'John Doe', 1234567890, 'john@example.com', 'password123'
    ),
    (
        2, 'Jane Smith', 2147483647, 'jane@example.com', 'password456'
    ),
    (
        3, 'Alice Johnson', 2147483647, 'alice@example.com', 'password789'
    ),
    (
        4, 'Bob Williams', 2147483647, 'bob@example.com', 'passwordabc'
    ),
    (
        5, 'Emma Brown', 2147483647, 'emma@example.com', 'passworddef'
    ),
    (
        6, 'Michael Davis', 2147483647, 'michael@example.com', 'passwordghi'
    ),
    (
        7, 'Sarah Miller', 2147483647, 'sarah@example.com', 'passwordjkl'
    ),
    (
        8, 'David Wilson', 2147483647, 'david@example.com', 'passwordmno'
    ),
    (
        9, 'Olivia Garcia', 2147483647, 'olivia@example.com', 'passwordpqr'
    ),
    (
        10, 'James Rodriguez', 1234567890, 'james@example.com', 'passwordstu'
    ),
    (
        11, 'Sophia Martinez', 2147483647, 'sophia@example.com', 'passwordvwx'
    ),
    (
        12, 'Alexander Hernandez', 2147483647, 'alexander@example.com', 'passwordyz1'
    ),
    (
        13, 'Isabella Lopez', 2147483647, 'isabella@example.com', 'password234'
    ),
    (
        14, 'William Gonzalez', 2147483647, 'william@example.com', 'password567'
    ),
    (
        15, 'Emily Perez', 2147483647, 'emily@example.com', 'password890'
    );

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
    `item_id` int(11) NOT NULL, `name` varchar(40) NOT NULL, `qty` int(11) NOT NULL, `cost_price` float NOT NULL, `selling_price` float NOT NULL, `mrp` float NOT NULL, `shelf_no` varchar(11) DEFAULT NULL, `dealer` varchar(40) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `stocks`
--

INSERT INTO
    `stocks` (
        `item_id`, `name`, `qty`, `cost_price`, `selling_price`, `mrp`, `shelf_no`, `dealer`
    )
VALUES (
        1, 'Rice', 67, 10.5, 15, 20, 'A1', 'ABC Traders'
    ),
    (
        2, 'Sugar', 84, 12, 17, 25, 'A2', 'XYZ Suppliers'
    ),
    (
        3, 'Flour', 179, 8, 13, 18, 'B1', 'DEF Wholesalers'
    ),
    (
        4, 'Salt', 72, 5, 8, 12, 'B2', 'PQR Distributors'
    ),
    (
        5, 'Pasta', 41, 18, 25, 30, 'C1', 'LMN Distributors'
    ),
    (
        6, 'Bread', 12, 15, 20, 25, 'C2', 'GHI Suppliers'
    ),
    (
        7, 'Milk', 49, 22, 28, 35, 'D1', 'JKL Suppliers'
    ),
    (
        8, 'Butter', 8, 30, 40, 45, 'D2', 'MNO Traders'
    ),
    (
        9, 'Pencil', 155, 2, 5, 8, 'E1', 'PQR Stationery'
    ),
    (
        10, 'Pen', 90, 4, 7, 10, 'E2', 'ABC Stationery'
    ),
    (
        11, 'Notebook', 117, 10, 15, 20, 'F1', 'XYZ Stationers'
    ),
    (
        12, 'Eraser', 181, 1, 3, 5, 'F2', 'DEF Stationers'
    ),
    (
        13, 'Glue', 78, 6, 10, 15, 'G1', 'LMN Suppliers'
    ),
    (
        14, 'Scissors', 16, 8, 12, 18, 'G2', 'JKL Traders'
    ),
    (
        15, 'Marker', 71, 15, 20, 25, 'H1', 'GHI Stationers'
    ),
    (
        16, 'Stapler', 42, 20, 25, 30, 'H2', 'PQR Stationers'
    ),
    (
        17, 'Tape', 100, 3, 6, 10, 'I1', 'ABC Suppliers'
    ),
    (
        18, 'Ruler', 40, 2, 4, 8, 'I2', 'XYZ Stationers'
    ),
    (
        19, 'Calculator', 35, 25, 30, 35, 'J1', 'DEF Suppliers'
    ),
    (
        20, 'File', 50, 12, 15, 20, 'J2', 'LMN Stationers'
    ),
    (
        21, 'Paper', 179, 5, 8, 12, 'K1', 'JKL Suppliers'
    ),
    (
        22, 'Envelope', 108, 3, 5, 8, 'K2', 'GHI Stationers'
    ),
    (
        23, 'Binder', 102, 10, 12, 15, 'L1', 'PQR Distributors'
    ),
    (
        24, 'Glue Stick', 64, 7, 10, 15, 'L2', 'ABC Suppliers'
    ),
    (
        25, 'Note Cards', 53, 6, 8, 12, 'M1', 'XYZ Stationers'
    ),
    (
        26, 'Push Pins', 60, 2, 4, 8, 'M2', 'DEF Suppliers'
    ),
    (
        27, 'Rubber Bands', 130, 1, 2, 5, 'N1', 'LMN Stationers'
    ),
    (
        28, 'Highlighter', 100, 3, 5, 8, 'N2', 'JKL Suppliers'
    ),
    (
        29, 'Correction Tape', 70, 4, 7, 10, 'O1', 'GHI Stationers'
    ),
    (
        30, 'Index Cards', 90, 5, 7, 10, 'O2', 'PQR Distributors'
    );

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
ADD PRIMARY KEY (`bill_id`),
ADD KEY `fk_customer_id` (`customer_id`);

--
-- Indexes for table `bill_items`
--
ALTER TABLE `bill_items`
ADD PRIMARY KEY (`bill_id`, `item_id`),
ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer` ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks` ADD PRIMARY KEY (`item_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

--
-- Constraints for table `bill_items`
--
ALTER TABLE `bill_items`
ADD CONSTRAINT `bill_items_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`bill_id`),
ADD CONSTRAINT `bill_items_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `stocks` (`item_id`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;