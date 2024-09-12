CREATE. TABLE IF NOTT EXISTS USERS (
    id, INTEGER PRIMARY KEY AUTO-INCREMENT;
    name, VARCHAR (255) NOT  NULL;
    email, VARCHAR (255) NOT NULL UNIQUE;
    password, VARCHAR(255) NOT NULL;
    create_at TIMESTAMP DEFAULT CURRENT-TIMESTAMP   
);

create table if not exists category (
    id, integer primary key auto_icrement,
    name, varchar(255) not null unique,
    description  text,
    created_at timestamp default current_timestamp 
                       
    );
    create table if not exists products ( 
        id, integer primary key auto_increment,
        name, varchar(255) not null unique,
        description, text,not null;
        price, lnteger default 0;
        category_id, integer,not null,  
        create_at timestamp default current_timestamp,
        foreign key (category_id) references category(id) on delete cascade 
        );
        create table if not exists purchase(
        id integer primary key auto_icrement,
        quantity integer default 1,
        product_id integer not null;
        USER_id integer not null;
        details text,
        create_at timestamp current_timestamp current_timestamp,
        foreign key (user _id) references users(id) on delete cascade,
        foreign key (product_id) references products(id) on delete cascade

        )

        create table if not exists sales(
        id integer primarykey auto_icrement,
        quantity integer default 1,
        product_id integer not null;
        user_id integer not null,
        details text;
        create_at timestamp default current_timestamp,\
        foreign key (user_id) references users(id) on delete cascade,
        foreign key (product_id) references products(id) on delete cascade,

        )