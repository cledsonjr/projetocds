package br.com.cds.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ROL_ROLE")
public class Role implements GrantedAuthority {

	public static final String COL_ID = "ROL_ID";
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = COL_ID)
	private Integer id;

	@NotEmpty
	@Column(name = "ROL_NOME")
	private String nome;

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "roles")
	private Set<Usuario> users = new HashSet<Usuario>();

	@Override
	public String getAuthority() {
		return nome;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Set<Usuario> getUsers() {
		return users;
	}

	public void setUsers(Set<Usuario> users) {
		this.users = users;
	}

}
