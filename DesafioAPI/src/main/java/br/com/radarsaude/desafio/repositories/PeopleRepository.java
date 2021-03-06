package br.com.radarsaude.desafio.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.radarsaude.desafio.entities.People;

@Repository
public interface PeopleRepository extends CrudRepository<People, Long> {

	@Query(" SELECT p FROM People p WHERE "
			+ "p.name LIKE %?1% "
//			+ "OR p.gender.toString() LIKE %?1% "
			//+ "OR p.birthday LIKE %?1% "
			+ "OR p.phone LIKE %?1% "
			+ "OR p.email LIKE %?1% ")
	public List<People> search(String keyword);

}
