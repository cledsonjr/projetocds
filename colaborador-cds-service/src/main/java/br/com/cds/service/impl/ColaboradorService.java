package br.com.cds.service.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cds.model.Colaborador;
import br.com.cds.repository.IColaboradorRepository;
import br.com.cds.service.IColaborador;

/**
 * @author cledson.alves
 *
 */
@Service
@Transactional
public class ColaboradorService implements IColaborador, Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private IColaboradorRepository iColaboradorRepository;

	@Override
	public Colaborador buscarPorId(Long id) {
		return (Colaborador) iColaboradorRepository.findById(id);
	}

	@Override
	public List<Colaborador> buscarTodos() {
		return (List<Colaborador>)iColaboradorRepository.findAll();
	}

	@Override
	public Colaborador salvar(Colaborador colaborador) {
		return iColaboradorRepository.save(colaborador);
	}

	@Override
	public void removerPorId(Long id) {
		iColaboradorRepository.deleteById(id);
	}

	@Override
	public Page<Colaborador> buscarPorNomeEPaginacao(Pageable pageable, String nome) {
		return iColaboradorRepository.findByNomeLikeIgnoreCase(pageable, "%"+nome+"%");
	}

	@Override
	public List<Colaborador> buscarPorNomeEPaginacao(String nome) {
		return iColaboradorRepository.findByNomeLikeIgnoreCase("%"+nome+"%");
	}

	@Override
	public Colaborador alterar(Colaborador colaborador) {
		return iColaboradorRepository.save(colaborador);
	}
}
