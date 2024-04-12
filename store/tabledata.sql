-- Active: 1710254908444@@localhost@3306@invov2

SHOW TRIGGERS;


DELIMITER //

DROP TRIGGER IF EXISTS before_insert_bill_items 


CREATE TRIGGER before_insert_bill_items
BEFORE INSERT ON bill_items
FOR EACH ROW
BEGIN
    DECLARE new_bill_id INT;

    -- Check if the bill_id already exists for the current transaction
    IF NOT EXISTS (
        SELECT 1
        FROM bills
        WHERE bill_id = NEW.bill_id
    ) THEN
        -- Find the maximum existing bill_id in the bills table
        SELECT IFNULL(MAX(bill_id), 0) + 1 INTO new_bill_id FROM bills;

        -- Insert the new bill_id into the bills table if it doesn't exist already
        INSERT IGNORE INTO bills (bill_id, total_amt, received_amt, purchase_date)
        VALUES (new_bill_id, 0, 0, CURDATE());

        -- Set the new bill_id for insertion into the bill_items table
        SET NEW.bill_id = new_bill_id;
    END IF;
END
//

DELIMITER ;












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


SHOW TABLES;
SELECT * FROM billS;
SELECT * FROM bill_items;
SELECT * FROM stocks;
SELECT * from customer;


INSERT INTO stocks (item_id, name, qty, cost_price, selling_price, mrp, shelf_no, dealer) VALUES 
(1, 'Rice', 100, 10.99, 15.99, 19.99, 'A1', 'Dealer 1'),
(2, 'Wheat', 150, 8.49, 12.99, 16.99, 'B2', 'Dealer 2'),
(3, 'Milk', 200, 2.99, 4.99, 6.99, 'C3', 'Dealer 3'),
(4, 'Sugar', 120, 6.49, 9.99, 12.99, 'D4', 'Dealer 4'),
(5, 'Salt', 180, 1.99, 2.99, 4.49, 'E5', 'Dealer 5'),
(6, 'Oil', 90, 15.99, 19.99, 24.99, 'F6', 'Dealer 6'),
(7, 'Tea', 110, 7.99, 11.99, 14.99, 'G7', 'Dealer 7'),
(8, 'Coffee', 95, 9.99, 14.99, 18.99, 'H8', 'Dealer 8'),
(9, 'Beans', 70, 3.49, 5.99, 7.99, 'I9', 'Dealer 9'),
(10, 'Lentils', 130, 4.99, 7.99, 9.99, 'J10', 'Dealer 10'),
(11, 'Pasta', 150, 2.99, 4.99, 6.99, 'K11', 'Dealer 11'),
(12, 'Tomato Sauce', 120, 3.99, 5.99, 7.99, 'L12', 'Dealer 12'),
(13, 'Cereal', 80, 4.49, 6.99, 9.49, 'M13', 'Dealer 13'),
(14, 'Bread', 200, 2.49, 3.99, 5.49, 'N14', 'Dealer 14'),
(15, 'Butter', 95, 3.99, 5.99, 7.99, 'O15', 'Dealer 15'),
(16, 'Cheese', 120, 5.49, 7.99, 9.99, 'P16', 'Dealer 16'),
(17, 'Eggs', 180, 1.99, 2.99, 4.49, 'Q17', 'Dealer 17'),
(18, 'Yogurt', 100, 3.99, 5.99, 7.99, 'R18', 'Dealer 18'),
(19, 'Ice Cream', 80, 6.99, 9.99, 12.99, 'S19', 'Dealer 19'),
(20, 'Frozen Vegetables', 110, 5.49, 7.99, 9.99, 'T20', 'Dealer 20'),
(21, 'Frozen Pizza', 95, 7.99, 11.99, 14.99, 'U21', 'Dealer 21'),
(22, 'Frozen Fish', 120, 9.49, 14.99, 18.99, 'V22', 'Dealer 22'),
(23, 'Cookies', 130, 3.99, 5.99, 7.99, 'W23', 'Dealer 23'),
(24, 'Chips', 150, 2.99, 4.99, 6.99, 'X24', 'Dealer 24'),
(25, 'Soda', 180, 1.49, 2.49, 3.99, 'Y25', 'Dealer 25'),
(26, 'Juice', 90, 4.99, 7.99, 9.99, 'Z26', 'Dealer 26'),
(27, 'Water', 110, 0.99, 1.99, 2.99, 'A27', 'Dealer 27'),
(28, 'Wine', 95, 10.99, 15.99, 19.99, 'B28', 'Dealer 28'),
(29, 'Beer', 120, 5.49, 7.99, 9.99, 'C29', 'Dealer 29'),
(30, 'Whiskey', 80, 20.99, 29.99, 39.99, 'D30', 'Dealer 30'),
(31, 'Vinegar', 120, 2.99, 4.99, 6.99, 'E31', 'Dealer 31'),
(32, 'Mayonnaise', 90, 3.49, 5.99, 7.99, 'F32', 'Dealer 32'),
(33, 'Ketchup', 110, 1.99, 2.99, 4.49, 'G33', 'Dealer 33'),
(34, 'Mustard', 95, 2.49, 3.99, 5.49, 'H34', 'Dealer 34'),
(35, 'Pickles', 120, 4.49, 6.99, 9.49, 'I35', 'Dealer 35'),
(36, 'Olives', 80, 5.49, 7.99, 9.99, 'J36', 'Dealer 36'),
(37, 'Canned Soup', 100, 3.99, 5.99, 7.99, 'K37', 'Dealer 37'),
(38, 'Canned Vegetables', 130, 2.99, 4.99, 6.99, 'L38', 'Dealer 38'),
(39, 'Canned Fruit', 95, 4.49, 6.99, 9.49, 'M39', 'Dealer 39'),
(40, 'Canned Meat', 120, 5.49, 7.99, 9.99, 'N40', 'Dealer 40'),
(41, 'Peanut Butter', 180, 3.49, 5.99, 7.99, 'O41', 'Dealer 41'),
(42, 'Jelly', 200, 2.49, 3.99, 5.49, 'P42', 'Dealer 42'),
(43, 'Honey', 120, 6.49, 9.99, 12.99, 'Q43', 'Dealer 43'),
(44, 'Maple Syrup', 150, 7.99, 11.99, 14.99, 'R44', 'Dealer 44'),
(45, 'Soy Sauce', 110, 1.99, 2.99, 4.49, 'S45', 'Dealer 45'),
(46, 'Teriyaki Sauce', 130, 3.49, 5.99, 7.99, 'T46', 'Dealer 46'),
(47, 'Hot Sauce', 95, 2.49, 3.99, 5.49, 'U47', 'Dealer 47'),
(48, 'BBQ Sauce', 120, 4.49, 6.99, 9.49, 'V48', 'Dealer 48'),
(49, 'Salsa', 80, 5.49, 7.99, 9.99, 'W49', 'Dealer 49'),
(50, 'Salad Dressing', 90, 3.99, 5.99, 7.99, 'X50', 'Dealer 50'),
(51, 'Balsamic Vinegar', 110, 6.99, 9.99, 12.99, 'Y51', 'Dealer 51'),
(52, 'Ranch Dressing', 130, 4.99, 7.99, 9.99, 'Z52', 'Dealer 52'),
(53, 'Blue Cheese Dressing', 95, 7.49, 11.99, 14.99, 'A53', 'Dealer 53'),
(54, 'Thousand Island Dressing', 120, 8.49, 12.99, 16.99, 'B54', 'Dealer 54'),
(55, 'Sour Cream', 180, 2.49, 3.99, 5.49, 'C55', 'Dealer 55'),
(56, 'Cream Cheese', 200, 3.49, 5.99, 7.99, 'D56', 'Dealer 56'),
(57, 'Cottage Cheese', 120, 5.99, 8.99, 11.99, 'E57', 'Dealer 57'),
(58, 'Yogurt', 150, 1.99, 2.99, 4.49, 'F58', 'Dealer 58'),
(59, 'Margarine', 110, 2.99, 4.99, 6.99, 'G59', 'Dealer 59'),
(60, 'Shortening', 130, 3.49, 5.99, 7.99, 'H60', 'Dealer 60'),
(61, 'Cooking Spray', 95, 1.99, 2.99, 4.49, 'I61', 'Dealer 61'),
(62, 'Chocolate Chips', 120, 3.49, 5.99, 7.99, 'J62', 'Dealer 62'),
(63, 'Baking Powder', 80, 0.99, 1.99, 2.99, 'K63', 'Dealer 63'),
(64, 'Baking Soda', 90, 0.99, 1.99, 2.99, 'L64', 'Dealer 64'),
(65, 'Vanilla Extract', 110, 4.49, 6.99, 9.49, 'M65', 'Dealer 65'),
(66, 'Food Coloring', 120, 2.99, 4.99, 6.99, 'N66', 'Dealer 66'),
(67, 'Pancake Mix', 180, 3.99, 5.99, 7.99, 'O67', 'Dealer 67'),
(68, 'Waffle Mix', 200, 4.99, 7.99, 9.99, 'P68', 'Dealer 68'),
(69, 'Bread Mix', 120, 2.99, 4.99, 6.99, 'Q69', 'Dealer 69'),
(70, 'Cake Mix', 150, 3.99, 5.99, 7.99, 'R70', 'Dealer 70'),
(71, 'Brownie Mix', 110, 2.99, 4.99, 6.99, 'S71', 'Dealer 71'),
(72, 'Cookie Mix', 130, 2.99, 4.99, 6.99, 'T72', 'Dealer 72'),
(73, 'Pie Crust Mix', 95, 2.99, 4.99, 6.99, 'U73', 'Dealer 73'),
(74, 'Pizza Dough Mix', 120, 2.99, 4.99, 6.99, 'V74', 'Dealer 74'),
(75, 'Cornbread Mix', 80, 2.99, 4.99, 6.99, 'W75', 'Dealer 75'),
(76, 'Almonds', 120, 8.99, 12.99, 16.99, 'X76', 'Dealer 76'),
(77, 'Walnuts', 90, 9.99, 14.99, 18.99, 'Y77', 'Dealer 77'),
(78, 'Cashews', 110, 7.99, 11.99, 14.99, 'Z78', 'Dealer 78'),
(79, 'Peanuts', 95, 3.99, 5.99, 7.99, 'A79', 'Dealer 79'),
(80, 'Pistachios', 120, 11.99, 15.99, 19.99, 'B80', 'Dealer 80'),
(81, 'Trail Mix', 80, 6.99, 9.99, 12.99, 'C81', 'Dealer 81'),
(82, 'Granola Bars', 200, 4.49, 6.99, 9.49, 'D82', 'Dealer 82'),
(83, 'Protein Bars', 120, 2.99, 4.99, 6.99, 'E83', 'Dealer 83'),
(84, 'Energy Bars', 150, 3.99, 5.99, 7.99, 'F84', 'Dealer 84'),
(85, 'Nut Butter', 110, 5.99, 8.99, 11.99, 'G85', 'Dealer 85'),
(86, 'Coconut Oil', 130, 7.99, 11.99, 14.99, 'H86', 'Dealer 86'),
(87, 'Olive Oil', 95, 9.99, 14.99, 18.99, 'I87', 'Dealer 87'),
(88, 'Vegetable Oil', 120, 3.99, 5.99, 7.99, 'J88', 'Dealer 88'),
(89, 'Canola Oil', 80, 4.99, 7.99, 9.99, 'K89', 'Dealer 89'),
(90, 'Peanut Oil', 90, 6.99, 9.99, 12.99, 'L90', 'Dealer 90'),
(91, 'Sunflower Oil', 110, 5.99, 8.99, 11.99, 'M91', 'Dealer 91'),
(92, 'Sesame Oil', 120, 8.99, 12.99, 16.99, 'N92', 'Dealer 92'),
(93, 'Truffle Oil', 95, 11.99, 15.99, 19.99, 'O93', 'Dealer 93'),
(94, 'Apple Cider Vinegar', 110, 3.99, 5.99, 7.99, 'P94', 'Dealer 94'),
(95, 'Balsamic Vinegar', 130, 5.99, 8.99, 11.99, 'Q95', 'Dealer 95'),
(96, 'Red Wine Vinegar', 120, 4.99, 7.99, 9.99, 'R96', 'Dealer 96'),
(97, 'White Wine Vinegar', 80, 4.99, 7.99, 9.99, 'S97', 'Dealer 97'),
(98, 'Rice Vinegar', 90, 3.99, 5.99, 7.99, 'T98', 'Dealer 98'),
(99, 'Malt Vinegar', 110, 2.99, 4.99, 6.99, 'U99', 'Dealer 99'),
(100, 'Distilled Vinegar', 120, 1.99, 2.99, 4.49, 'V100', 'Dealer 100');

INSERT INTO bill_items (bill_id, item_id, item_qty) VALUES 
(1, 1, 3),
(1, 2, 2),
(1, 3, 1),
(2, 4, 4),
(2, 5, 2),
(2, 6, 5),
(3, 7, 1),
(3, 8, 3),
(3, 9, 2),
(4, 10, 2),
(4, 11, 1),
(4, 12, 4),
(5, 13, 3),
(5, 14, 2),
(5, 15, 1),
(6, 16, 4),
(6, 17, 2),
(6, 18, 3),
(7, 19, 2),
(7, 20, 3),
(7, 21, 1),
(8, 22, 5),
(8, 23, 2),
(8, 24, 3),
(9, 25, 2),
(9, 26, 4),
(9, 27, 1),
(10, 28, 3),
(10, 29, 2),
(10, 30, 1),
(11, 1, 3),
(11, 2, 2),
(11, 3, 1),
(12, 4, 4),
(12, 5, 2),
(12, 6, 5),
(13, 7, 1),
(13, 8, 3),
(13, 9, 2),
(14, 10, 2),
(14, 11, 1),
(14, 12, 4),
(15, 13, 3),
(15, 14, 2),
(15, 15, 1),
(16, 16, 4),
(16, 17, 2),
(16, 18, 3),
(17, 19, 2),
(17, 20, 3),
(17, 21, 1),
(18, 22, 5),
(18, 23, 2),
(18, 24, 3),
(19, 25, 2),
(19, 26, 4),
(19, 27, 1),
(20, 28, 3),
(20, 29, 2),
(20, 30, 1),
(21, 1, 3),
(21, 2, 2),
(21, 3, 1),
(22, 4, 4),
(22, 5, 2),
(22, 6, 5),
(23, 7, 1),
(23, 8, 3),
(23, 9, 2),
(24, 10, 2),
(24, 11, 1),
(24, 12, 4),
(25, 13, 3),
(25, 14, 2),
(25, 15, 1),
(26, 16, 4),
(26, 17, 2),
(26, 18, 3),
(27, 19, 2),
(27, 20, 3),
(27, 21, 1),
(28, 1, 3),
(28, 2, 2),
(28, 3, 1),
(29, 4, 4),
(29, 5, 2),
(29, 6, 5),
(30, 7, 1),
(30, 8, 3),
(30, 9, 2),
(31, 10, 2),
(31, 11, 1),
(31, 12, 4),
(32, 13, 3),
(32, 14, 2),
(32, 15, 1),
(33, 16, 4),
(33, 17, 2),
(33, 18, 3),
(34, 19, 2),
(34, 20, 3),
(34, 21, 1),
(35, 22, 5),
(35, 23, 2),
(35, 24, 3),
(36, 25, 2),
(36, 26, 4),
(36, 27, 1),
(37, 28, 3),
(37, 29, 2),
(37, 30, 1);




UPDATE bills
SET customer_id = 
    CASE bill_id
        WHEN 1 THEN 1
        WHEN 3 THEN 3
        WHEN 8 THEN 8
        WHEN 9 THEN 9
        WHEN 13 THEN 13
        WHEN 15 THEN 15
        WHEN 18 THEN 3
        WHEN 19 THEN 4
        WHEN 20 THEN 5
        WHEN 21 THEN 6
        WHEN 22 THEN 2
        WHEN 23 THEN 8
        WHEN 24 THEN 9
        WHEN 25 THEN 10
        WHEN 26 THEN 11
        WHEN 27 THEN 7
        WHEN 28 THEN 13
        WHEN 29 THEN 14
    END;







UPDATE bills
SET purchase_date = 
    CASE 
        WHEN bill_id BETWEEN 1 AND 9 THEN DATE_ADD('2023-12-01', INTERVAL bill_id DAY)
        WHEN bill_id BETWEEN 10 AND 18 THEN DATE_ADD('2024-01-01', INTERVAL (bill_id - 9) DAY)
        WHEN bill_id BETWEEN 19 AND 27 THEN DATE_ADD('2024-02-01', INTERVAL (bill_id - 18) DAY)
        WHEN bill_id BETWEEN 28 AND 37 THEN DATE_ADD('2024-03-01', INTERVAL (bill_id - 27) DAY)
    END;


SELECT ROUND(SUM(total_amt), 2) AS income
FROM bills
WHERE YEAR(purchase_date) = YEAR(CURRENT_DATE()) 
AND MONTH(purchase_date) = MONTH(CURRENT_DATE()) 
AND DAY(purchase_date) <= DAY(CURRENT_DATE());


SELECT SUM((s.selling_price - s.cost_price) * bi.item_qty) as income FROM stocks s JOIN bill_items bi ON s.item_id = bi.item_id;


