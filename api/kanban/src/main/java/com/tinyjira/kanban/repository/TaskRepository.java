package com.tinyjira.kanban.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.tinyjira.kanban.model.Task;

public interface TaskRepository extends CrudRepository<Task, String> {

    @Query(value = "SELECT * FROM task where board_column_id = :column_id", nativeQuery = true)
    public List<Task> getAllColumnTasks(@Param("column_id") String columnId);
}
