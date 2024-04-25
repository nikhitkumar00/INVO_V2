-- Active: 1710254908444@@localhost@3306@invov2




CREATE DATABASE invov2;

USE invov2;

-- Table structure for table `customer`
CREATE TABLE IF NOT EXISTS `customer` (
    `customer_id` INT(11) PRIMARY KEY, `customer_name` VARCHAR(40) NOT NULL, `phone` INT(10) NOT NULL, `email` VARCHAR(40) NOT NULL, `password_hash` VARCHAR(40) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- Table structure for table `stocks`
CREATE TABLE IF NOT EXISTS `stocks` (
    `item_id` INT(11) PRIMARY KEY, `name` VARCHAR(40) NOT NULL, `qty` INT(11) NOT NULL, `cost_price` FLOAT NOT NULL, `selling_price` FLOAT NOT NULL, `mrp` FLOAT NOT NULL, `shelf_no` VARCHAR(11) DEFAULT NULL, `dealer` VARCHAR(40) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- Table structure for table `bills`
CREATE TABLE IF NOT EXISTS `bills` (
    `bill_id` INT(11) PRIMARY KEY, `total_amt` FLOAT NOT NULL, `received_amt` FLOAT NOT NULL, `purchase_date` DATE DEFAULT NULL, `customer_id` INT(11) DEFAULT NULL, FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- Table structure for table `bill_items`
CREATE TABLE IF NOT EXISTS `bill_items` (
    `bill_id` INT(11), `item_id` INT(11), `item_qty` INT(11) DEFAULT NULL, PRIMARY KEY (`bill_id`, `item_id`), FOREIGN KEY (`bill_id`) REFERENCES `bills` (`bill_id`), FOREIGN KEY (`item_id`) REFERENCES `stocks` (`item_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- Insert into stocks table
INSERT INTO
    `stocks` (
        `item_id`, `name`, `qty`, `cost_price`, `selling_price`, `mrp`, `shelf_no`, `dealer`
    )
VALUES (
        1, 'Rice', 100, 10.5, 15, 20, 'A1', 'ABC Traders'
    ),
    (
        2, 'Sugar', 150, 12, 17, 25, 'A2', 'XYZ Suppliers'
    ),
    (
        3, 'Flour', 200, 8, 13, 18, 'B1', 'DEF Wholesalers'
    ),
    (
        4, 'Salt', 120, 5, 8, 12, 'B2', 'PQR Distributors'
    ),
    (
        5, 'Pasta', 80, 18, 25, 30, 'C1', 'LMN Distributors'
    ),
    (
        6, 'Bread', 50, 15, 20, 25, 'C2', 'GHI Suppliers'
    ),
    (
        7, 'Milk', 70, 22, 28, 35, 'D1', 'JKL Suppliers'
    ),
    (
        8, 'Butter', 30, 30, 40, 45, 'D2', 'MNO Traders'
    ),
    (
        9, 'Pencil', 200, 2, 5, 8, 'E1', 'PQR Stationery'
    ),
    (
        10, 'Pen', 150, 4, 7, 10, 'E2', 'ABC Stationery'
    ),
    (
        11, 'Notebook', 100, 10, 15, 20, 'F1', 'XYZ Stationers'
    ),
    (
        12, 'Eraser', 180, 1, 3, 5, 'F2', 'DEF Stationers'
    ),
    (
        13, 'Glue', 90, 6, 10, 15, 'G1', 'LMN Suppliers'
    ),
    (
        14, 'Scissors', 40, 8, 12, 18, 'G2', 'JKL Traders'
    ),
    (
        15, 'Marker', 120, 15, 20, 25, 'H1', 'GHI Stationers'
    ),
    (
        16, 'Stapler', 60, 20, 25, 30, 'H2', 'PQR Stationers'
    ),
    (
        17, 'Tape', 150, 3, 6, 10, 'I1', 'ABC Suppliers'
    ),
    (
        18, 'Ruler', 80, 2, 4, 8, 'I2', 'XYZ Stationers'
    ),
    (
        19, 'Calculator', 45, 25, 30, 35, 'J1', 'DEF Suppliers'
    ),
    (
        20, 'File', 70, 12, 15, 20, 'J2', 'LMN Stationers'
    ),
    (
        21, 'Paper', 180, 5, 8, 12, 'K1', 'JKL Suppliers'
    ),
    (
        22, 'Envelope', 120, 3, 5, 8, 'K2', 'GHI Stationers'
    ),
    (
        23, 'Binder', 100, 10, 12, 15, 'L1', 'PQR Distributors'
    ),
    (
        24, 'Glue Stick', 70, 7, 10, 15, 'L2', 'ABC Suppliers'
    ),
    (
        25, 'Note Cards', 80, 6, 8, 12, 'M1', 'XYZ Stationers'
    ),
    (
        26, 'Push Pins', 100, 2, 4, 8, 'M2', 'DEF Suppliers'
    ),
    (
        27, 'Rubber Bands', 200, 1, 2, 5, 'N1', 'LMN Stationers'
    ),
    (
        28, 'Highlighter', 150, 3, 5, 8, 'N2', 'JKL Suppliers'
    ),
    (
        29, 'Correction Tape', 100, 4, 7, 10, 'O1', 'GHI Stationers'
    ),
    (
        30, 'Index Cards', 120, 5, 7, 10, 'O2', 'PQR Distributors'
    ),
    (
        31, 'Calculator', 45, 25, 30, 35, 'J1', 'DEF Suppliers'
    ),
    (
        32, 'File', 70, 12, 15, 20, 'J2', 'LMN Stationers'
    ),
    (
        33, 'Paper', 180, 5, 8, 12, 'K1', 'JKL Suppliers'
    ),
    (
        34, 'Envelope', 120, 3, 5, 8, 'K2', 'GHI Stationers'
    ),
    (
        35, 'Binder', 100, 10, 12, 15, 'L1', 'PQR Distributors'
    ),
    (
        36, 'Glue Stick', 70, 7, 10, 15, 'L2', 'ABC Suppliers'
    ),
    (
        37, 'Note Cards', 80, 6, 8, 12, 'M1', 'XYZ Stationers'
    ),
    (
        38, 'Push Pins', 100, 2, 4, 8, 'M2', 'DEF Suppliers'
    ),
    (
        39, 'Rubber Bands', 200, 1, 2, 5, 'N1', 'LMN Stationers'
    ),
    (
        40, 'Highlighter', 150, 3, 5, 8, 'N2', 'JKL Suppliers'
    ),
    (
        41, 'Correction Tape', 100, 4, 7, 10, 'O1', 'GHI Stationers'
    ),
    (
        42, 'Index Cards', 120, 5, 7, 10, 'O2', 'PQR Distributors'
    ),
    (
        43, 'Calculator', 45, 25, 30, 35, 'J1', 'DEF Suppliers'
    ),
    (
        44, 'File', 70, 12, 15, 20, 'J2', 'LMN Stationers'
    ),
    (
        45, 'Paper', 180, 5, 8, 12, 'K1', 'JKL Suppliers'
    ),
    (
        46, 'Envelope', 120, 3, 5, 8, 'K2', 'GHI Stationers'
    ),
    (
        47, 'Binder', 100, 10, 12, 15, 'L1', 'PQR Distributors'
    ),
    (
        48, 'Glue Stick', 70, 7, 10, 15, 'L2', 'ABC Suppliers'
    ),
    (
        49, 'Note Cards', 80, 6, 8, 12, 'M1', 'XYZ Stationers'
    ),
    (
        50, 'Push Pins', 100, 2, 4, 8, 'M2', 'DEF Suppliers'
    );

-- Insert into customer table
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
    ),
    (
        16, 'Liam Taylor', 2147483647, 'liam@example.com', 'passwordabc1'
    ),
    (
        17, 'Olivia Brown', 2147483647, 'olivia@example.com', 'passworddef2'
    ),
    (
        18, 'Mason Harris', 2147483647, 'mason@example.com', 'passwordghi3'
    ),
    (
        19, 'Sophia Perez', 2147483647, 'sophia@example.com', 'passwordjkl4'
    ),
    (
        20, 'Michael Johnson', 2147483647, 'michael@example.com', 'passwordmno5'
    ),
    (
        21, 'Ethan Martin', 2147483647, 'ethan@example.com', 'passwordpqr6'
    ),
    (
        22, 'Isabella Davis', 2147483647, 'isabella@example.com', 'passwordstu7'
    ),
    (
        23, 'Amelia Wilson', 2147483647, 'amelia@example.com', 'passwordvwx8'
    ),
    (
        24, 'James Anderson', 2147483647, 'james@example.com', 'passwordyz19'
    ),
    (
        25, 'Evelyn Lee', 2147483647, 'evelyn@example.com', 'password2340'
    ),
    (
        26, 'Benjamin White', 2147483647, 'benjamin@example.com', 'password5671'
    ),
    (
        27, 'Mia Rodriguez', 2147483647, 'mia@example.com', 'password8902'
    ),
    (
        28, 'Elijah Martinez', 2147483647, 'elijah@example.com', 'passwordabc13'
    ),
    (
        29, 'Ava Taylor', 2147483647, 'ava@example.com', 'passworddef24'
    ),
    (
        30, 'Charlotte Harris', 2147483647, 'charlotte@example.com', 'passwordghi35'
    );

-- Insert into bills table
INSERT INTO
    `bills` (
        `bill_id`, `total_amt`, `disc_amt`, `purchase_date`, `customer_id`
    )
VALUES (
        1, 345.00, 325.00, '2024-03-12', 5
    ),
    (
        2, 189.00, 179.00, '2024-03-12', 10
    ),
    (
        3, 543.50, 518.50, '2024-03-12', 15
    ),
    (
        4, 420.25, 420.25, '2024-03-12', 20
    ),
    (
        5, 299.75, 284.75, '2024-03-12', 25
    ),
    (
        6, 381.00, 351.00, '2024-03-12', 30
    ),
    (
        7, 264.50, 264.50, '2024-03-12', 3
    ),
    (
        8, 457.80, 447.80, '2024-03-12', 8
    ),
    (
        9, 199.50, 199.50, '2024-03-12', 11
    ),
    (
        10, 142.00, 137.00, '2024-03-12', 14
    ),
    (
        11, 198.25, 198.25, '2024-03-12', 17
    ),
    (
        12, 387.50, 367.50, '2024-03-12', 21
    ),
    (
        13, 500.00, 500.00, '2024-03-12', 26
    ),
    (
        14, 267.75, 252.75, '2024-03-12', 29
    ),
    (
        15, 433.75, 423.75, '2024-03-12', 4
    ),
    (
        16, 189.00, 189.00, '2024-03-12', 6
    ),
    (
        17, 720.50, 695.50, '2024-03-12', 12
    ),
    (
        18, 375.00, 365.00, '2024-03-12', 16
    ),
    (
        19, 640.00, 640.00, '2024-03-12', 19
    ),
    (
        20, 212.25, 212.25, '2024-03-12', 22
    ),
    (
        21, 287.50, 277.50, '2024-03-12', 27
    ),
    (
        22, 199.00, 189.00, '2024-03-12', 2
    ),
    (
        23, 320.75, 305.75, '2024-03-12', 7
    ),
    (
        24, 135.50, 135.50, '2024-03-12', 9
    ),
    (
        25, 599.50, 574.50, '2024-03-12', 13
    ),
    (
        26, 187.00, 177.00, '2024-03-12', 18
    ),
    (
        27, 298.75, 298.75, '2024-03-12', 23
    ),
    (
        28, 510.25, 495.25, '2024-03-12', 28
    ),
    (
        29, 640.00, 610.00, '2024-03-12', 1
    ),
    (
        30, 199.00, 199.00, '2024-03-12', 24
    );

-- Insert into bill_items table
INSERT INTO
    `bill_items` (
        `bill_id`, `item_id`, `item_qty`
    )
VALUES (1, 1, 10),
    (1, 2, 15),
    (2, 3, 5),
    (2, 4, 8),
    (3, 5, 12),
    (3, 6, 20),
    (4, 7, 6),
    (4, 8, 10),
    (5, 9, 15),
    (5, 10, 25),
    (6, 11, 8),
    (6, 12, 15),
    (7, 13, 10),
    (7, 14, 18),
    (8, 15, 5),
    (8, 16, 12),
    (9, 17, 20),
    (9, 18, 30),
    (10, 19, 10),
    (10, 20, 20),
    (11, 21, 12),
    (11, 22, 18),
    (12, 23, 8),
    (12, 24, 15),
    (13, 25, 18),
    (14, 1, 12),
    (14, 2, 20),
    (15, 3, 6),
    (15, 4, 10),
    (16, 5, 8),
    (16, 6, 15),
    (17, 7, 12),
    (17, 8, 20),
    (18, 9, 25),
    (18, 10, 35),
    (19, 11, 15),
    (19, 12, 25),
    (20, 13, 12),
    (20, 14, 20),
    (21, 15, 6),
    (21, 16, 10),
    (22, 17, 20),
    (22, 18, 30),
    (23, 19, 12),
    (23, 20, 18),
    (24, 21, 8),
    (24, 22, 15),
    (25, 23, 18),
    (25, 24, 25),
    (26, 25, 10),
    (26, 26, 20),
    (27, 27, 12),
    (27, 28, 20),
    (28, 29, 8),
    (28, 30, 15),
    (29, 1, 15),
    (29, 2, 25),
    (30, 3, 8),
    (30, 4, 15);

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



DELIMITER //
DROP TRIGGER IF EXISTS update_bills_on_submit //
CREATE TRIGGER update_bills_on_submit AFTER INSERT ON bill_items
FOR EACH ROW
BEGIN
    DECLARE total_amount FLOAT;
    SELECT SUM(item_qty * selling_price) INTO total_amount
    FROM bill_items bi
    JOIN stocks s ON bi.item_id = s.item_id
    WHERE bi.bill_id = NEW.bill_id;
    UPDATE bills
    SET total_amt = ROUND(total_amount, 2), 
        purchase_date = CURDATE()
    WHERE bill_id = NEW.bill_id;
END //
DELIMITER ;



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
	IF NEW.item_qty <= available_quantity THEN
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
ALTER TABLE stocks
DROP COLUMN shelf_no,
ADD COLUMN batch_no VARCHAR(50),
ADD COLUMN manufacturer VARCHAR(100),
ADD COLUMN production_date DATE;

UPDATE stocks
SET batch_no = 'BATCH1', manufacturer = 'Manufacturer1', production_date = '2024-03-13'
WHERE item_id BETWEEN 1 AND 10;

UPDATE stocks
SET batch_no = 'BATCH2', manufacturer = 'Manufacturer2', production_date = '2024-03-13'
WHERE item_id BETWEEN 11 AND 20;

UPDATE stocks
SET batch_no = 'BATCH3', manufacturer = 'Manufacturer3', production_date = '2024-03-13'
WHERE item_id BETWEEN 21 AND 30;

UPDATE stocks
SET batch_no = 'BATCH4', manufacturer = 'Manufacturer4', production_date = '2024-03-13'
WHERE item_id BETWEEN 31 AND 40;

UPDATE stocks
SET batch_no = 'BATCH5', manufacturer = 'Manufacturer5', production_date = '2024-03-13'
WHERE item_id BETWEEN 41 AND 50;

ALTER TABLE stocks
DROP COLUMN production_date;

UPDATE stocks set batch_no = '501' where batch_no = 'BATCH5';

UPDATE stocks
SET manufacturer = CASE 
                        WHEN manufacturer = 'Manufacturer1' THEN 'ABC Inc.'
                        WHEN manufacturer = 'Manufacturer2' THEN 'XYZ Corporation'
                        WHEN manufacturer = 'Manufacturer3' THEN 'DEF Industries'
                        WHEN manufacturer = 'Manufacturer4' THEN 'GHI Manufacturing'
                        WHEN manufacturer = 'Manufacturer5' THEN 'JKL Enterprises'
                        ELSE manufacturer
                    END;

ALTER Table stocks add column nkns varchar(40);





SELECT ROUND(SUM(total_amt), 2) AS total_income
FROM bills;

SELECT SUM((s.selling_price - s.cost_price) * bi.item_qty) as income FROM stocks s JOIN bill_items bi ON s.item_id = bi.item_id;

SELECT ROUND(SUM(total_amt), 2) AS income
FROM bills
WHERE YEAR(purchase_date) = YEAR(CURRENT_DATE()) 
AND MONTH(purchase_date) = MONTH(CURRENT_DATE()) 
AND DAY(purchase_date) <= DAY(CURRENT_DATE());

ALTER TABLE bills RENAME COLUMN disc_amt TO received_amt;
SELECT * FROM bills; 







SELECT 
    CONCAT(SUBSTRING(DATE_FORMAT(purchase_date, '%b'), 1, 3)) AS month_name,
    ROUND(SUM(total_amt), 2) AS total_income
FROM 
    bills
WHERE 
    purchase_date IS NOT NULL
GROUP BY 
    YEAR(purchase_date), MONTH(purchase_date), month_name
ORDER BY 
    YEAR(purchase_date), MONTH(purchase_date);




SELECT 
    CONCAT(SUBSTRING(DATE_FORMAT(purchase_date, '%b'), 1, 3)) AS month_name,
    COUNT(*) AS total_orders
FROM 
    bills
WHERE 
    purchase_date IS NOT NULL
GROUP BY 
    YEAR(purchase_date), MONTH(purchase_date), month_name
ORDER BY 
    YEAR(purchase_date), MONTH(purchase_date);