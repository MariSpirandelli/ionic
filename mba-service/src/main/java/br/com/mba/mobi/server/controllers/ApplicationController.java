package br.com.mba.mobi.server.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mba.mobi.server.business.IApplicationService;
import br.com.mba.mobi.server.models.Application;
import br.com.mba.mobi.server.models.Person;

@RestController
@RequestMapping("/application")
public class ApplicationController {
	
	@Autowired
	private IApplicationService applicationService;
	
	@GetMapping
	public ResponseEntity<List<Application>> getAll(){
		try{
			List<Application> applications = applicationService.findAll();
			return new ResponseEntity<List<Application>>(applications, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<List<Application>>(new ArrayList<Application>(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PostMapping
	public ResponseEntity<Application> save(@RequestBody Application application){
		try{
			Application createdApplication = applicationService.save(application);
			return new ResponseEntity<Application>(createdApplication, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<Application>(new Application(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
