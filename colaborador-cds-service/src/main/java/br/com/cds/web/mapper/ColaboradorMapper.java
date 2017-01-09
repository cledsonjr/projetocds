package br.com.cds.web.mapper;

import org.springframework.stereotype.Component;

import br.com.cds.core.mapper.AssemblerUtils;
import br.com.cds.model.Colaborador;
import br.com.cds.web.dto.ColaboradorDto;
import ma.glasnost.orika.MapperFactory;

@Component
public class ColaboradorMapper extends AssemblerUtils<Colaborador, ColaboradorDto> {

    @Override
    public void configure(MapperFactory mapperFactory) {
        mapperFactory.classMap(Colaborador.class, ColaboradorDto.class)
		        .mapNulls(true).mapNullsInReverse(true)
		        .field("cargo.id", "idCargo")
		        .mapNulls(true).mapNullsInReverse(true)
		        .field("departamento.id", "idDepartamento")
                .byDefault()
                .register();
    }

    @Override
    public Colaborador paraEntidade(ColaboradorDto resource) {
        return converter(resource, new Colaborador());
    }

    @Override
    public ColaboradorDto paraResource(Colaborador entidade) {
        return converter(entidade, new ColaboradorDto());
    }
}
