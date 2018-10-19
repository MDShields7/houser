DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
price INTEGER NOT NULL,
image_url TEXT NOT NULL
);

INSERT INTO houses
(name, city, state, price, image_url)
VALUES
('Glass House', 'Philedelphia', 'Pennsylvania', 900000, 'https://cdnassets.hw.net/dims4/GG/0651b1f/2147483647/resize/876x%3E/quality/90/?url=https%3A%2F%2Fcdnassets.hw.net%2F16%2F46%2F303f9fdc4e59bf5ade0788f38534%2Fmm-hero.jpg'),
('Modern House', 'Chicago', 'Illinois', 1200000, 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwie6oehiJPeAhWUHjQIHYXMASwQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFarnsworth_House&psig=AOvVaw1h--aknWLy1qFmWiz7P7tf&ust=1540057727498990');