package br.com.cds.web.mapper;

import org.springframework.stereotype.Component;

import br.com.cds.core.mapper.AssemblerUtils;
import br.com.cds.model.Contato;
import br.com.cds.web.dto.ContatoDto;
import ma.glasnost.orika.MapperFactory;

/**
 * @author cledson.alves
 *
 */
@Component
public class ContatoMapper extends AssemblerUtils<Contato, ContatoDto> {

    @Override
    public void configure(MapperFactory mapperFactory) {
        mapperFactory.classMap(Contato.class, ContatoDto.class)
		        .mapNulls(true)
		        .mapNullsInReverse(true)
                .byDefault()
                .register();
    }

    @Override
    public Contato paraEntidade(ContatoDto resource) {
        return converter(resource, new Contato());
    }

    @Override
    public ContatoDto paraResource(Contato entidade) {
        return converter(entidade, new ContatoDto());
    }
}
