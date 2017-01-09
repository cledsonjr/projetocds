package br.com.cds.service.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cds.model.Cargo;
import br.com.cds.repository.ICargoRepository;
import br.com.cds.service.ICargo;

/**
 * @author cledson.alves
 *
 */
@Service
@Transactional
public class CargoService implements ICargo, Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ICargoRepository iCargoRepository;


	@Override
	public List<Cargo> buscarTodos() {
		return (List<Cargo>)iCargoRepository.findAll();
	}
}
