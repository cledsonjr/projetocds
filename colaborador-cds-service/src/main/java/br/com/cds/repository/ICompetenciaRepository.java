package br.com.cds.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.cds.model.Competencia;

public interface ICompetenciaRepository extends CrudRepository<Competencia, Integer> {
}
