package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email); //padrão do Jpa, se vc busca o metodo passando ele como parâmetro e dando o mesmo nome do findBy ele já se localiza no banco pra procurar por aquele nome
}
