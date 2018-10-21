DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
address VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
zip INTEGER NOT NULL,
image_url TEXT NOT NULL,
mortgage INTEGER NOT NULL,
rent INTEGER NOT NULL
);

INSERT INTO houses
(name, address, city, state, zip, image_url, mortgage, rent)
VALUES
('Glass House', '125  Pen Lane','Philadelphia', 'Pennsylvania', 45780, 'https://cdnassets.hw.net/dims4/GG/0651b1f/2147483647/resize/876x%3E/quality/90/?url=https%3A%2F%2Fcdnassets.hw.net%2F16%2F46%2F303f9fdc4e59bf5ade0788f38534%2Fmm-hero.jpg', 1000, 1200),
('Modern House', '50 W State Rd','Chicago', 'Illinois', 65000, 'https://media2.fdncms.com/chicago/imager/mies-van-der-rohes-farnsworth-house-on-t/u/magnum/13888370/farnsworthhouse-magnum.jpg', 800, 750);