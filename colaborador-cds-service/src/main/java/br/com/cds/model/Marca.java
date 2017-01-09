package br.com.cds.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author cledson.alves
 *
 */
@Entity
@Table(name = "MAP_MARCA_PRODUTO")
public class Marca {

	public static final String COL_ID = "MAP_ID";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = COL_ID)
    private Long id;

    @Column(name = "MAP_DS_DESCRICAO")
    @NotNull
    private String descricao;
    
    @Column(name = "MAP_DS_TIPO")
    @Size(max = 45)
    private String tipo;
    
    @Column(name = "MAP_NU_QUANTIDADE")
    private Long quantidade;

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

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Long getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Long quantidade) {
		this.quantidade = quantidade;
	}
    
}
