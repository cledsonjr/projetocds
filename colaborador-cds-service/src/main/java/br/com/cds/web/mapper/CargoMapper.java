package br.com.cds.web.mapper;

import org.springframework.stereotype.Component;

import br.com.cds.core.mapper.AssemblerUtils;
import br.com.cds.model.Cargo;
import br.com.cds.web.dto.CargoDto;
import ma.glasnost.orika.MapperFactory;

/**
 * @author cledson.alves
 *
 */
@Component
public class CargoMapper extends AssemblerUtils<Cargo, CargoDto> {

    @Override
    public void configure(MapperFactory mapperFactory) {
        mapperFactory.classMap(Cargo.class, CargoDto.class)
		        .mapNulls(true)
		        .mapNullsInReverse(true)
                .byDefault()
                .register();
    }

    @Override
    public Cargo paraEntidade(CargoDto resource) {
        return converter(resource, new Cargo());
    }

    @Override
    public CargoDto paraResource(Cargo entidade) {
        return converter(entidade, new CargoDto());
    }
}
