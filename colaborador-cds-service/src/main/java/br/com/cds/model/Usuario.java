package br.com.cds.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "USU_USUARIO")
public class Usuario {

	public static final String COL_ID = "USU_ID";
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = COL_ID)
	private Integer id;

	@NotEmpty
	@Column(name = "USU_NOME")
	private String nome;

	@NotEmpty
	@Column(name = "USU_LOGIN", unique = true, nullable = false)
	private String login;

	@NotEmpty
	@Column(name = "USU_PASSWORD")
	private String password;

	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", 
		joinColumns = { @JoinColumn(name = "user_id") }, 
		inverseJoinColumns = { @JoinColumn(name = "role_id") })
	private Set<Role> roles = new HashSet<Role>();

	public Usuario() {
	}

	public Usuario(Usuario user) {
		super();
		this.id = user.getId();
		this.nome = user.getNome();
		this.login = user.getLogin();
		this.password = user.getPassword();
		this.roles = user.getRoles();
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

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

}
