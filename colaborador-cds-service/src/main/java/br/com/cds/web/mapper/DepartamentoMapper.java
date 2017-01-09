package br.com.cds.web.mapper;

import org.springframework.stereotype.Component;

import br.com.cds.core.mapper.AssemblerUtils;
import br.com.cds.model.Departamento;
import br.com.cds.web.dto.DepartamentoDto;
import ma.glasnost.orika.MapperFactory;

/**
 * @author cledson.alves
 *
 */
@Component
public class DepartamentoMapper extends AssemblerUtils<Departamento, DepartamentoDto> {

    @Override
    public void configure(MapperFactory mapperFactory) {
        mapperFactory.classMap(Departamento.class, DepartamentoDto.class)
		        .mapNulls(true)
		        .mapNullsInReverse(true)
                .byDefault()
                .register();
    }

    @Override
    public Departamento paraEntidade(DepartamentoDto resource) {
        return converter(resource, new Departamento());
    }

    @Override
    public DepartamentoDto paraResource(Departamento entidade) {
        return converter(entidade, new DepartamentoDto());
    }
}
