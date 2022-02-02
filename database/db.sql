create schema blog;

create table blog.post(
	id serial primary key,
	title text not null,
	content text not null,
	date timestamp default now()
);

select * from blog.post;

insert into blog.post(title, content) values('Nobre', 'sem conteúdo');
insert into blog.post(title, content) values('Orelha seca', 'top do planeta');