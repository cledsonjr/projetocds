package br.com.cds.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "CAR_CARGO")
public class Cargo {

	public static final String COL_ID = "CAR_ID";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = COL_ID)
    private Long id;

    @Column(name = "CAR_ST_DESCRICAO")
    @NotNull
    private String descricao;
    
    @OneToMany(mappedBy = "cargo", cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE}, fetch=FetchType.LAZY)
    private List<Colaborador> colaboradores;

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

	public List<Colaborador> getColaboradores() {
		return colaboradores;
	}

	public void setColaboradores(List<Colaborador> colaboradores) {
		this.colaboradores = colaboradores;
	}
	
}
