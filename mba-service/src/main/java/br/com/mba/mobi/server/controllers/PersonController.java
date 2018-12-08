package br.com.mba.mobi.server.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mba.mobi.server.business.IPersonService;
import br.com.mba.mobi.server.models.Person;

@RestController
@RequestMapping("/person")
public class PersonController {
	
	@Autowired
	private IPersonService personService;
	
	@GetMapping
	public ResponseEntity<List<Person>> getAll(){
		try{
			List<Person> people = personService.findAll();
			return new ResponseEntity<List<Person>>(people, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<List<Person>>(new ArrayList<Person>(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PostMapping
	public ResponseEntity<Person> save(@RequestBody Person person){
		try{
			Person createdPerson = personService.save(person);
			return new ResponseEntity<Person>(createdPerson, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<Person>(new Person(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Integer id){
		try{
			Person person = personService.findById(id);
			if(person != null){
				personService.delete(person);
				return ResponseEntity.ok(new String());
			}
			return ResponseEntity.ok(new String());
		}catch (Exception e) {
			return ResponseEntity.badRequest().body("Not found Person");
		}
	} 
}
