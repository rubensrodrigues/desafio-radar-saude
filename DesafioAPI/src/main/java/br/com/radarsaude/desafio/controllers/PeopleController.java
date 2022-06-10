package br.com.radarsaude.desafio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.radarsaude.desafio.entities.People;
import br.com.radarsaude.desafio.services.PeopleService;


@RestController
@RequestMapping("api/v1/people")
@CrossOrigin
public class PeopleController {

	@Autowired
	private PeopleService service;
	
	@GetMapping
	public ResponseEntity<?> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id ) {
		return service.findById(id);
	}

	@GetMapping("/search")
	public ResponseEntity<?> search( @Param("keyword") String keyword) {
		return service.search(keyword);
	}
	
	@PostMapping( consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> create(@RequestBody People people ) {
		return service.create(people);
	}
}
