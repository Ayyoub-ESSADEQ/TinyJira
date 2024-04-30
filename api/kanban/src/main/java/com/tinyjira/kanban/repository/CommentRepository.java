package com.tinyjira.kanban.repository;

import org.springframework.data.repository.CrudRepository;

import com.tinyjira.kanban.model.Comment;

public interface CommentRepository extends CrudRepository<Comment, String> {
}
