package br.com.cds.core.mapper;

public interface IResourceAssembler<E, R> extends AssemblerMapper {

    E paraEntidade(R resource);

    R paraResource(E entidade);

}
