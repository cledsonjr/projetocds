package br.com.cds.service.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cds.model.Marca;
import br.com.cds.repository.IMarcaRepository;
import br.com.cds.service.IMarca;

/**
 * @author cledson.alves
 *
 */
@Service
@Transactional
public class MarcaService implements IMarca, Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private IMarcaRepository iMarcaRepository;

	@Override
	public Marca buscarPorId(Long id) {
		return (Marca) iMarcaRepository.findOne(id.intValue());
	}

	@Override
	public List<Marca> buscarTodos() {
		return (List<Marca>)iMarcaRepository.findAll();
	}

	@Override
	public Marca salvar(Marca marca) {
		return iMarcaRepository.save(marca);
	}

	@Override
	public void removerPorId(Long id) {
		iMarcaRepository.delete(id.intValue());
	}
}
