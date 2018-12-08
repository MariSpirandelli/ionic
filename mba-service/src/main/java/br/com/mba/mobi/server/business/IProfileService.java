package br.com.mba.mobi.server.business;

import java.util.List;

import br.com.mba.mobi.server.models.Profile;

public interface IProfileService {

	List<Profile> findAll();	
}
