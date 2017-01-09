package br.com.cds.web.mapper;

import org.springframework.stereotype.Component;

import br.com.cds.core.mapper.AssemblerUtils;
import br.com.cds.model.Marca;
import br.com.cds.web.dto.MarcaDto;
import ma.glasnost.orika.MapperFactory;

/**
 * @author cledson.alves
 *
 */
@Component
public class MarcaMapper extends AssemblerUtils<Marca, MarcaDto> {

    @Override
    public void configure(MapperFactory mapperFactory) {
        mapperFactory.classMap(Marca.class, MarcaDto.class)
		        .mapNulls(true)
		        .mapNullsInReverse(true)
                .field("produtos", "produtos")
                .byDefault()
                .register();
    }

    @Override
    public Marca paraEntidade(MarcaDto resource) {
        return converter(resource, new Marca());
    }

    @Override
    public MarcaDto paraResource(Marca entidade) {
        return converter(entidade, new MarcaDto());
    }
}
