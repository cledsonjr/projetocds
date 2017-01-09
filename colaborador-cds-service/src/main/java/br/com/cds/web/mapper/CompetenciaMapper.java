package br.com.cds.web.mapper;

import org.springframework.stereotype.Component;

import br.com.cds.core.mapper.AssemblerUtils;
import br.com.cds.model.Competencia;
import br.com.cds.web.dto.CompetenciaDto;
import ma.glasnost.orika.MapperFactory;

/**
 * @author cledson.alves
 *
 */
@Component
public class CompetenciaMapper extends AssemblerUtils<Competencia, CompetenciaDto> {

    @Override
    public void configure(MapperFactory mapperFactory) {
        mapperFactory.classMap(Competencia.class, CompetenciaDto.class)
		        .mapNulls(true)
		        .mapNullsInReverse(true)
                .byDefault()
                .register();
    }

    @Override
    public Competencia paraEntidade(CompetenciaDto resource) {
        return converter(resource, new Competencia());
    }

    @Override
    public CompetenciaDto paraResource(Competencia entidade) {
        return converter(entidade, new CompetenciaDto());
    }
}
