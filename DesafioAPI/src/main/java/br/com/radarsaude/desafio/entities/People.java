package br.com.radarsaude.desafio.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.com.radarsaude.desafio.enums.GenderEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class People implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2083073493994026275L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private GenderEnum gender;
	private String birthday;
	private String phone;
	private String email;
}
