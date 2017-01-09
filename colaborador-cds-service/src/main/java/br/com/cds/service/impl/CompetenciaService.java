package br.com.cds.service.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cds.model.Competencia;
import br.com.cds.repository.ICompetenciaRepository;
import br.com.cds.service.ICompetencia;

/**
 * @author cledson.alves
 *
 */
@Service
@Transactional
public class CompetenciaService implements ICompetencia, Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ICompetenciaRepository iCompetenciaRepository;


	@Override
	public List<Competencia> buscarTodos() {
		return (List<Competencia>)iCompetenciaRepository.findAll();
	}
}
