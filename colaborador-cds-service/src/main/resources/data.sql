INSERT INTO dep_departamento(
            dep_id, dep_st_descricao)
    VALUES (1, 'Inovação');

INSERT INTO dep_departamento(
            dep_id, dep_st_descricao)
    VALUES (2, 'Fábrica');


INSERT INTO dep_departamento(
            dep_id, dep_st_descricao)
    VALUES (3, 'Projetos');



INSERT INTO car_cargo(
            car_id, car_st_descricao)
    VALUES (1, 'Desenvolvedor');

INSERT INTO car_cargo(
            car_id, car_st_descricao)
    VALUES (2, 'Webdesign');

INSERT INTO car_cargo(
            car_id, car_st_descricao)
    VALUES (3, 'Gerente');


INSERT INTO com_competencia(
            com_id, com_st_descricao)
    VALUES (1, 'Java');

INSERT INTO com_competencia(
            com_id, com_st_descricao)
    VALUES (2, 'Spring');

INSERT INTO com_competencia(
            com_id, com_st_descricao)
    VALUES (3, 'Angular');

INSERT INTO com_competencia(
            com_id, com_st_descricao)
    VALUES (4, 'JSF');

INSERT INTO com_competencia(
            com_id, com_st_descricao)
    VALUES (5, 'HTML');


insert into USU_USUARIO(USU_ID, USU_NOME, USU_LOGIN, USU_PASSWORD) values (1,'Admin','admin','admin');
 
insert into ROL_ROLE(ROL_ID, ROL_NOME) values (1,'ROLE_USER');
insert into ROL_ROLE(ROL_ID, ROL_NOME) values (2,'ROLE_ADMIN');
insert into ROL_ROLE(ROL_ID, ROL_NOME) values (3,'ROLE_GUEST'); 

insert into user_role(user_id, role_id) values (1,1);
insert into user_role(user_id, role_id) values (1,2);
insert into user_role(user_id, role_id) values (1,3);
