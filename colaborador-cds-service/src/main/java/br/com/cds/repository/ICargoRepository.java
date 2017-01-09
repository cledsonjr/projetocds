package br.com.cds.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.cds.model.Cargo;

public interface ICargoRepository extends CrudRepository<Cargo, Integer> {
}
