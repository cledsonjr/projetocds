package br.com.cds.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.cds.model.Cargo;
import br.com.cds.model.Colaborador;
import br.com.cds.model.Competencia;
import br.com.cds.model.Departamento;
import br.com.cds.service.ICargo;
import br.com.cds.service.IColaborador;
import br.com.cds.service.ICompetencia;
import br.com.cds.service.IDepartamento;
import br.com.cds.web.dto.CargoDto;
import br.com.cds.web.dto.ColaboradorDto;
import br.com.cds.web.dto.CompetenciaDto;
import br.com.cds.web.dto.DepartamentoDto;
import br.com.cds.web.mapper.CargoMapper;
import br.com.cds.web.mapper.ColaboradorMapper;
import br.com.cds.web.mapper.CompetenciaMapper;
import br.com.cds.web.mapper.DepartamentoMapper;

/**
 * @author cledson.alves
 *
 */
@RestController
@RequestMapping(value = "/colaboradores")
public class ColaboradorController {

    @Autowired
    private IColaborador iColaborador;
    
    @Autowired 
    private ICargo iCargo;
    
    @Autowired
    private ICompetencia iCompetencia;
    
    @Autowired
    private IDepartamento iDepartamento;

    @Autowired
    private ColaboradorMapper colaboradorMapper;
    
    @Autowired
    private CargoMapper cargoMapper;

    @Autowired
    private DepartamentoMapper departamentoMapper;
    
    @Autowired
    private CompetenciaMapper competenciaMapper;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public ColaboradorDto detalhar(@PathVariable("id") Long idColaborador) {
        Colaborador colaborador = iColaborador.buscarPorId(idColaborador);
        return colaboradorMapper.paraResource(colaborador);
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<ColaboradorDto> buscarTodos() {
        List<Colaborador> colaborador = iColaborador.buscarTodos();
        return colaboradorMapper.paraResources(colaborador);
    }
    
    @RequestMapping(value="/cargos", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<CargoDto> buscarCargos() {
        List<Cargo> cargos = iCargo.buscarTodos();
        return cargoMapper.paraResources(cargos);
    }
    
    @RequestMapping(value="/departamentos", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<DepartamentoDto> buscarDepartamentos() {
        List<Departamento> departamentos = iDepartamento.buscarTodos();
        return departamentoMapper.paraResources(departamentos);
    }
    
    @RequestMapping(value="/competencias", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<CompetenciaDto> buscarCompetencias() {
        List<Competencia> competencias = iCompetencia.buscarTodos();
        return competenciaMapper.paraResources(competencias);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    //TODO olhar o motivo pelo qual o Mapper não converte de forma correta
    public ColaboradorDto inserir(@RequestBody ColaboradorDto colaboradorDto) {
    	Colaborador paraSalvar = colaboradorMapper.paraEntidade(colaboradorDto);
    	
    	Departamento departamento = new Departamento();
    	departamento.setId(colaboradorDto.getIdDepartamento());
    	paraSalvar.setDepartamento(departamento);
    	
    	Cargo cargo = new Cargo();
    	cargo.setId(colaboradorDto.getIdCargo());
    	paraSalvar.setCargo(cargo);

    	Colaborador colaboradorSalvo = iColaborador.salvar(paraSalvar);
        return colaboradorMapper.paraResource(colaboradorSalvo);
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public ColaboradorDto alterar(@RequestBody ColaboradorDto colaboradorDto) {
        Colaborador colaborador = iColaborador.alterar(colaboradorMapper.paraEntidade(colaboradorDto));
        return colaboradorMapper.paraResource(colaborador);
    }
    
    /**
     * @author cledson.alves
     *
     * @param idColaborador
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void departamentoMapper(@PathVariable("id") Long idColaborador) {
        iColaborador.removerPorId(idColaborador);
    }
    
    @RequestMapping(value="/paginacao",method=RequestMethod.GET)
	Page<ColaboradorDto> list(Pageable pageable, @RequestParam("nome") String nome){
    	final Page<Colaborador> colaborador = iColaborador.buscarPorNomeEPaginacao(pageable, nome);
    	
    	final Page<ColaboradorDto> colaboradorDto = colaborador.map(this::convertToColaboradorDto);
    	
    	return colaboradorDto;
	}
    
    private ColaboradorDto convertToColaboradorDto(Colaborador colaboradores) {
        return colaboradorMapper.paraResource(colaboradores);
    }
}