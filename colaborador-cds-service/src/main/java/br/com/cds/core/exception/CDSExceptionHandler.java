package br.com.cds.core.exception;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.cds.core.util.DataUtil;

/**
 * @author cledson.alves
 *
 */
@ControllerAdvice
public class CDSExceptionHandler {

	@ExceptionHandler({HttpRequestMethodNotSupportedException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
	public ResponseEntity<?> servicoNaoEncontrado(Exception exception) {
		CDSResponseException custom = new CDSResponseException();
		custom.setData(DataUtil.instantToString(Instant.now()));	
		if(exception.getMessage() != null){
			custom.setMensagem(exception.getMessage());
		}else{
			custom.setMensagem("Sem tratamento.");
		}
		custom.setCausa(exception.getCause() == null ? exception.getClass().toString() : exception.getCause().toString());
		exception.printStackTrace();
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(custom);
	}
	
	@ExceptionHandler({Throwable.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ResponseEntity<?> handleCustomException(Exception exception) {
		CDSResponseException custom = new CDSResponseException();
		custom.setData(DataUtil.instantToString(Instant.now()));	
		if(exception.getMessage() != null){
			custom.setMensagem(exception.getMessage());
		}else{
			custom.setMensagem("Sem tratamento.");
		}
		custom.setCausa(exception.getCause() == null ? exception.getClass().toString() : exception.getCause().toString());
		exception.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(custom);
	}
}