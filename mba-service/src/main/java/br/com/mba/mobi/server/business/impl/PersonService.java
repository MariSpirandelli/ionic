package br.com.mba.mobi.server.business.impl;

import java.util.List;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mba.mobi.server.business.IPersonService;
import br.com.mba.mobi.server.dao.IPersonRepository;
import br.com.mba.mobi.server.models.Person;
import javassist.NotFoundException;

@Service
public class PersonService implements IPersonService{

	@Autowired
	private IPersonRepository personRepository;
	
	@Override
	public Person findById(Integer id) {
		return personRepository.findById(id).orElse(null);
	}

	@Override
	public List<Person> findAll() {
		return personRepository.findAll();
	}

	@Override
	public Person save(Person person) {
		return personRepository.save(person);
	}

	@Override
	public Person delete(Person person) {
		personRepository.delete(person);
		return person;
	}
}
