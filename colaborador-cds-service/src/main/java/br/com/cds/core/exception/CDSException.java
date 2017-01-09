package br.com.cds.core.exception;

import java.io.Serializable;

/**
 * @author cledson.alves
 *
 *Exception padrão extendendo de RuntimeException
 */
public class CDSException extends RuntimeException implements Serializable{

	private static final long serialVersionUID = 1436770375628258034L;
	
	private String msg;
	
	public CDSException() {
		super();
	}
	
	public CDSException(String msg) {
		super(msg);
		this.msg = msg;
	}

	public String getMessage() {
		return msg;
	}
	
	public CDSException(String mensagem, Exception ex) {
		super(mensagem, ex);
		this.msg = mensagem;
	}
}
