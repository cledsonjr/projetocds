package br.com.cds.core.util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

/**
 * @author cledson.alves
 *
 */
public class DataUtil {

	/**
	 * @author cledson.alves
	 *
	 * @param instant
	 * @return
	 * 
	 * Converte o Instant do Java 8 para String com o padrão "dd/MM/yyyy HH:mm:ss"
	 */
	public static String instantToString(Instant instant) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss").withZone(ZoneId.systemDefault());
		return formatter.format(instant);
	}
	
	/**
	 * @author cledson.alves
	 *
	 * @return
	 */
	public static LocalDate retornarData() {
		return LocalDate.now();
	}
	
}
