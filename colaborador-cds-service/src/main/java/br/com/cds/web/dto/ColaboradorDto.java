package br.com.cds.web.dto;

import java.util.List;

public class ColaboradorDto {

	private Long id;

	private String nome;

	private String endereco;

	private String descricao;

	private Long idCargo;

	private Long idDepartamento;
	
	private CargoDto cargo;
	
	private DepartamentoDto departamento;

	private List<CompetenciaDto> competencias;

	private List<ContatoDto> contatos;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Long getIdCargo() {
		return idCargo;
	}

	public void setIdCargo(Long idCargo) {
		this.idCargo = idCargo;
	}

	public Long getIdDepartamento() {
		return idDepartamento;
	}

	public void setIdDepartamento(Long idDepartamento) {
		this.idDepartamento = idDepartamento;
	}

	public List<CompetenciaDto> getCompetencias() {
		return competencias;
	}

	public void setCompetencias(List<CompetenciaDto> competencias) {
		this.competencias = competencias;
	}

	public List<ContatoDto> getContatos() {
		return contatos;
	}

	public void setContatos(List<ContatoDto> contatos) {
		this.contatos = contatos;
	}

	public CargoDto getCargo() {
		return cargo;
	}

	public void setCargo(CargoDto cargo) {
		this.cargo = cargo;
	}

	public DepartamentoDto getDepartamento() {
		return departamento;
	}

	public void setDepartamento(DepartamentoDto departamento) {
		this.departamento = departamento;
	}
	
	

}
