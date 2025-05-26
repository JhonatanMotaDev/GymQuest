CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE gyms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE memberships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    gym_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (gym_id) REFERENCES gyms(id)
);

CREATE TABLE classes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gym_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    schedule DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (gym_id) REFERENCES gyms(id)
);

CREATE TABLE class_registrations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    class_id INT NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

INSERT INTO users (username, email, password_hash) VALUES
('john_doe', 'john@example.com', 'hashed_password_1'),
('jane_smith', 'jane@example.com', 'hashed_password_2'),
('alice_wonder', 'alice@example.com', 'hashed_password_3'),
('bob_builder', 'bob@example.com', 'hashed_password_4');

INSERT INTO gyms (name, location) VALUES
('Downtown Gym', '123 Main St, Cityville'),
('Uptown Fitness', '456 Elm St, Cityville'),
('Suburban Gym', '789 Oak St, Suburbia');

INSERT INTO memberships (user_id, gym_id, start_date, end_date) VALUES
(1, 1, '2023-01-01', '2023-12-31'),
(2, 2, '2023-02-01', NULL),
(3, 1, '2023-03-01', '2023-09-30'),
(4, 3, '2023-04-01', NULL);

INSERT INTO classes (gym_id, name, schedule) VALUES
(1, 'Yoga Basics', '2023-10-01 09:00:00'),
(1, 'Advanced Cardio', '2023-10-02 18:00:00'),
(2, 'Strength Training', '2023-10-03 07:00:00'),
(3, 'Pilates', '2023-10-04 10:00:00');

INSERT INTO class_registrations (user_id, class_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(1, 3),
(2, 4);

INSERT INTO users (username, email, password_hash) VALUES
('charlie_brown', 'charlie@example.com', 'hashed_password_5'),
('lucy_vanpelt', 'lucy@example.com', 'hashed_password_6'),
('linus_vanpelt', 'linus@example.com', 'hashed_password_7'),
('snoopy_dog', 'snoopy@example.com', 'hashed_password_8');

INSERT INTO gyms (name, location) VALUES
('Eastside Gym', '101 Maple St, Eastville'),
('Westside Fitness', '202 Pine St, Westville');

INSERT INTO memberships (user_id, gym_id, start_date, end_date) VALUES
(5, 4, '2023-05-01', NULL),
(6, 5, '2023-06-01', '2023-12-31'),
(7, 4, '2023-07-01', NULL),
(8, 5, '2023-08-01', NULL);

INSERT INTO classes (gym_id, name, schedule) VALUES
(4, 'Zumba', '2023-10-05 17:00:00'),
(5, 'CrossFit', '2023-10-06 06:00:00');

INSERT INTO class_registrations (user_id, class_id) VALUES
(5, 5),
(6, 6),
(7, 5),
(8, 6),
(5, 6),
(7, 6);