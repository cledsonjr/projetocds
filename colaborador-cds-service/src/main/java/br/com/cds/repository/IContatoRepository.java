package br.com.cds.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.cds.model.Contato;

public interface IContatoRepository extends CrudRepository<Contato, Integer> {
}
