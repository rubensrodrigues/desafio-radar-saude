package br.com.radarsaude.desafio.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.radarsaude.desafio.entities.People;
import br.com.radarsaude.desafio.enums.GenderEnum;
import br.com.radarsaude.desafio.repositories.PeopleRepository;

@Service
public class PeopleService {

	@Autowired
	private PeopleRepository repository;
	
	public ResponseEntity<?> findAll() {
		populateInicialPeoples();
		
		List<People> peoples = (List<People>) repository.findAll();
		
		return !peoples.isEmpty() ? 
				new ResponseEntity<>(peoples, HttpStatus.OK) : 
					new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	private void populateInicialPeoples() {
		//populando dados iniciais.
		String strDate1="2005-03-31";
		String strDate2="1999-04-31";
		String strDate3="1987-01-11";
		String strDate4="1995-07-21";
		
		
		List<People> peoples = new ArrayList<>();
		peoples.add( new People(1L, "Ana", GenderEnum.FEMALE,  strDate1, "+5561988776655", "ana@gmail.com") );
		peoples.add( new People(2L, "Beatriz", GenderEnum.FEMALE,  strDate2, "+556198136655", "bia@gmail.com"));
		peoples.add( new People(3L, "Cristiane", GenderEnum.FEMALE,  strDate3, "+5561988771234", "cris@gmail.com"));
		peoples.add( new People(4L, "Debora", GenderEnum.FEMALE,  strDate4, "+5561954326655", "deb@gmail.com"));
		peoples.add( new People(5L, "Elias", GenderEnum.MALE,  strDate2, "+5561988788885", "eli@gmail.com"));
		peoples.add( new People(6L, "Fernando", GenderEnum.MALE,  strDate3, "+5561765776655", "fer@gmail.com"));
		peoples.add( new People(7L, "Gustavo", GenderEnum.MALE,  strDate1, "+5561988722255", "gus@gmail.com"));
		peoples.add( new People(8L, "Heitor", GenderEnum.MALE,  strDate2, "+5561988744455", "heit@gmail.com"));
		peoples.add( new People(9L, "Isaac", GenderEnum.MALE,  strDate4, "+5561981111655", "isaac@gmail.com"));
		peoples.add( new People(10L, "Jackeline", GenderEnum.FEMALE,  strDate3, "+5561988772222", "jack@gmail.com"));
		peoples.add( new People(11L, "Kelly", GenderEnum.FEMALE,  strDate1, "+556198834565", "kelly@gmail.com"));
		
		repository.saveAll(peoples);
	}

	public ResponseEntity<?> search(String keyword) {
		List<People> peoples = (List<People>) repository.search(keyword);
		
		return !peoples.isEmpty() ? 
				new ResponseEntity<>(peoples, HttpStatus.OK) : 
					new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	public ResponseEntity<?> create(People people) {
		People peoples = (People) repository.save(people);
		
		return peoples != null ? 
				new ResponseEntity<>(peoples, HttpStatus.CREATED) : 
					new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
	}

	public ResponseEntity<?> findById(Long id) {
		Optional<People> people = repository.findById(id);
		
		return people.isPresent() ? 
				new ResponseEntity<>(people, HttpStatus.OK) : 
					new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
