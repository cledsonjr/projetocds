package br.com.cds.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.cds.model.Usuario;

public interface UserRepository extends CrudRepository<Usuario, Long> {

	Usuario findByLogin(String login);
}
