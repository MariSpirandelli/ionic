package br.com.mba.mobi.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import br.com.mba.mobi.server.models.Profile;

@Repository
public interface IProfileRepository extends JpaRepository<Profile, Integer>, JpaSpecificationExecutor<Profile>{

}
