CREATE DATABASE IF NOT EXISTS crud_typescript;

USE crud_typescript;

CREATE TABLE IF NOT EXISTS games
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    gender VARCHAR(100) NOT NULL,
    creator VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO games (title, gender, creator)
VALUES ('Valorant', 'Action', 'Riot Games'),
    ('League of Legends', 'MOBA', 'Riot Games'),
    ('Fable: The Lost Chapters', 'RPG', 'Peter Molyneux'),
    ('Battlefield 2', 'Action', 'EA');