package br.com.cds.core.mapper;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

public abstract class AssemblerUtils<E, R> implements IResourceAssembler<E, R> {

    public MapperFactory mapperFactory = new DefaultMapperFactory
			.Builder()
			.mapNulls(false)
			.build();
    
    protected <X> X converter(Object origem, X destino) {
        configure(mapperFactory);
        mapperFactory.getMapperFacade().map(origem, destino);
        return destino;
    }

    public List<E> paraEntidades(Iterable<R> resources) {
        List<E> entidades = Collections.emptyList();
        for (R resource : resources) {
            entidades.add(paraEntidade(resource));
        }
        return entidades;
    }

    public List<R> paraResources(Iterable<E> entidades) {
        List<R> resources = new ArrayList<>();
        for (E entidade : entidades) {
            resources.add(paraResource(entidade));
        }
        return resources;
    }

}
