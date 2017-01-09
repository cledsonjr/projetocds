package br.com.cds.service.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cds.model.Departamento;
import br.com.cds.repository.IDepartamentoRepository;
import br.com.cds.service.IDepartamento;

/**
 * @author cledson.alves
 *
 */
@Service
@Transactional
public class DepartamentoService implements IDepartamento, Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private IDepartamentoRepository iDepartamentoRepository;


	@Override
	public List<Departamento> buscarTodos() {
		return (List<Departamento>)iDepartamentoRepository.findAll();
	}
}
