package br.com.mba.mobi.server.business.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mba.mobi.server.business.IApplicationService;
import br.com.mba.mobi.server.dao.IApplicationRepository;
import br.com.mba.mobi.server.models.Application;

@Service
public class ApplicationService implements IApplicationService {

	@Autowired
	private IApplicationRepository applicationRepository;
	
	@Override
	public List<Application> findAll() {
		return applicationRepository.findAll();
	}

	@Override
	public Application save(Application application) {
		return applicationRepository.save(application);
	}

}
