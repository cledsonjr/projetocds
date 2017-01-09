package br.com.cds.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import br.com.cds.model.Colaborador;

public interface IColaboradorRepository extends CrudRepository<Colaborador, Integer> {

	Colaborador findById(Long id);
	
	Page<Colaborador> findByNomeLikeIgnoreCase(Pageable pageable, String nome);

	List<Colaborador> findByNomeLikeIgnoreCase(String nome);

	void deleteById(Long id);
}
