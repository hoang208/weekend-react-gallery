-- CREATE DATABASE "react_gallery"

CREATE TABLE gallery (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" integer
);

INSERT INTO gallery ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/messi-worldcup.png', 'Photo of Lionel Messi kissing the World Cup trophy.', 1),
('images/deft-worlds.jpg', 'Photo of Deft kissing the League of Legends 2022 World Championship trophy.', 2),
('images/ash-champion.png', 'Photo of Ash Ketchum celebrating on becoming World Champion.', 3)
;
