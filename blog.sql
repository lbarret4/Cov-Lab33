CREATE TABLE blogs
(
    id INT NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    email VARCHAR(254) NOT NULL,
    content TEXT NULL,
    _created DATETIME DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE authors
(
    id INT NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(254) NOT NULL,
    password TEXT NULL,
    _created DATETIME DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE tags
(
    id INT NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    _created DATETIME DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE blogstags
(
    blogid INT NOT NULL,
    tagid INT NOT NULL,
    _created DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (blogid,tagid),
    CONSTRAINT fk_mn_blogid 
        FOREIGN KEY(blogid)
        REFERENCES blogs(id),
    CONSTRAINT fk_mn_tagid
        FOREIGN KEY (tagid)
        REFERENCES tags(id)
        ON DELETE CASCADE
);