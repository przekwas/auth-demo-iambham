CREATE SCHEMA auth_lol;
USE auth_lol;

CREATE TABLE users (
	id int auto_increment,
    email varchar(60) not null unique,
    password varchar(60) not null,
    role varchar(10) default 'guest',
    banned varchar(1) default 'n',
    created_at timestamp default now(),
    primary key (id)
);

CREATE TABLE tokens (
	id int auto_increment,
    userid int not null,
    uniq varchar(60) not null,
    token varchar(255),
    created_at timestamp default now(),
    primary key (id),
	foreign key (userid) references users (id) on delete cascade
);