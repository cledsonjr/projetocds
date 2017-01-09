package br.com.cds.service;

import java.util.List;

import br.com.cds.model.Marca;

public interface IMarca {

	Marca buscarPorId(Long id);

	List<Marca> buscarTodos();

	Marca salvar(Marca marca);

	void removerPorId(Long id);
}
