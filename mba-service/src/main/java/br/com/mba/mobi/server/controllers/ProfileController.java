package br.com.mba.mobi.server.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mba.mobi.server.business.IProfileService;
import br.com.mba.mobi.server.models.Profile;

@RestController
@RequestMapping("/profile")
public class ProfileController {
	
	@Autowired
	private IProfileService profileService;
	
	@GetMapping
	public ResponseEntity<List<Profile>> getAll(){
		try{
			List<Profile> profile = profileService.findAll();
			return new ResponseEntity<List<Profile>>(profile, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<List<Profile>>(new ArrayList<Profile>(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

}
