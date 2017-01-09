package br.com.cds.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.cds.model.Departamento;

public interface IDepartamentoRepository extends CrudRepository<Departamento, Integer> {
}
