package br.com.cds.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "COL_COLABORADOR")
public class Colaborador {

	public static final String COL_ID = "COL_ID";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = COL_ID)
    private Long id;
    
    @Column(name = "COL_ST_NOME", length=100)
    @NotNull
	private String nome;

    @Column(name = "COL_ST_ENDERECO")
    @NotNull
    private String endereco;
    
    @Column(name = "COL_ST_DESCRICAO", length=1000)
    @NotNull
    private String descricao;

    @ManyToOne(cascade = CascadeType.DETACH, fetch=FetchType.EAGER)
	@JoinColumn(name = Cargo.COL_ID)
	private Cargo cargo;

    @ManyToOne(cascade = CascadeType.DETACH, fetch=FetchType.EAGER)
	@JoinColumn(name = Departamento.COL_ID)
	private Departamento departamento;
    
	@ManyToMany
    @JoinTable(
        name="COMPETENCIAS_COLABORADOR",
        joinColumns = @JoinColumn( name=Colaborador.COL_ID),
        inverseJoinColumns = @JoinColumn( name=Competencia.COL_ID)
    )
	private Set<Competencia> competencias;
	
    
    @OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	@JoinColumn(name=Colaborador.COL_ID)
	private List<Contato> contatos;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public List<Contato> getContatos() {
		return contatos;
	}

	public void setContatos(List<Contato> contatos) {
		this.contatos = contatos;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Set<Competencia> getCompetencias() {
		return competencias;
	}

	public void setCompetencias(Set<Competencia> competencias) {
		this.competencias = competencias;
	}
	
}
