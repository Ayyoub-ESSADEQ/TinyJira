package com.tinyjira.kanban.repository;

import org.springframework.data.repository.CrudRepository;

import com.tinyjira.kanban.model.User;

public interface UserRepository extends CrudRepository<User, String> {
}
