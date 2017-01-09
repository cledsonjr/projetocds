package br.com.cds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class Boot extends org.springframework.boot.web.support.SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Boot.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(Boot.class, args);
	}

}
