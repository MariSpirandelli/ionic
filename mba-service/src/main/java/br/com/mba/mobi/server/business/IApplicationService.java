package br.com.mba.mobi.server.business;

import java.util.List;

import br.com.mba.mobi.server.models.Application;

public interface IApplicationService {

	List<Application> findAll();	
	Application save(Application application);
}
