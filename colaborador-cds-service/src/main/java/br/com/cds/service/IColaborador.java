package br.com.cds.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.cds.model.Colaborador;
import br.com.cds.model.Marca;

public interface IColaborador {

	Colaborador buscarPorId(Long id);

	List<Colaborador> buscarTodos();

	Colaborador salvar(Colaborador colaborador);
	
	Colaborador alterar(Colaborador colaborador);

	void removerPorId(Long id);
	
	Page<Colaborador> buscarPorNomeEPaginacao(Pageable pageable, String nome);

	List<Colaborador> buscarPorNomeEPaginacao(String nome);
}
