package com.tinyjira.kanban.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.tinyjira.kanban.model.BoardColumn;

public interface ColumnRepository extends CrudRepository<BoardColumn, String> {
    @Query(value = "SELECT * FROM board_column where board_id = :board_id", nativeQuery = true)
    public List<BoardColumn> findBoardColumns(@Param("board_id") String boardId);

    @Query(value = "SELECT * FROM board_column where id = :column_id", nativeQuery = true)
    public BoardColumn findBoardColumn(@Param("column_id") String columnId);
}
