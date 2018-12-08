package br.com.mba.mobi.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.com.mba.mobi.server.models.Person;

public interface IPersonRepository extends JpaRepository<Person, Integer>, JpaSpecificationExecutor<Person>{

}
