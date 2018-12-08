package br.com.mba.mobi.server.business.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mba.mobi.server.business.IProfileService;
import br.com.mba.mobi.server.dao.IProfileRepository;
import br.com.mba.mobi.server.models.Profile;

@Service
public class ProfileService implements IProfileService{

	@Autowired
	private IProfileRepository profileRepository;
	
	@Override
	public List<Profile> findAll() {
		return profileRepository.findAll();
	}

}
