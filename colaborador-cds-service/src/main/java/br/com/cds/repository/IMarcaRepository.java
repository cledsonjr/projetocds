package br.com.cds.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.cds.model.Marca;

public interface IMarcaRepository extends CrudRepository<Marca, Integer> {
}
