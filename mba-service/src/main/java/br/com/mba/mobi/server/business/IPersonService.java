package br.com.mba.mobi.server.business;

import java.util.List;

import br.com.mba.mobi.server.models.Person;

public interface IPersonService {
	
	Person findById(Integer id);
	
	List<Person> findAll();	
	
	Person save(Person person);
	
	Person delete(Person person);
}
