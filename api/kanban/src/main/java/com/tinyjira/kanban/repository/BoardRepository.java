package com.tinyjira.kanban.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.tinyjira.kanban.DTO.BoardDTO;
import com.tinyjira.kanban.model.Board;

public interface BoardRepository extends CrudRepository<Board, String> {

    @Query(value = "SELECT * FROM board", nativeQuery = true)
    public List<Board> findAllBoards();

    @Query(value = "SELECT * FROM board where id = :board_id", nativeQuery = true)
    public Board findBoard(@Param("board_id") String id);

    @Query(value = """
                SELECT board.id AS board_id,
                board.title as project_title,
                board.description as project_description,
                board_column.id AS column_id,
                task.id AS task_id,
                task.description as task_description,
                task.title as task_title,
                task.priority as task_tag,
                board_column.column_order,
                board_column.title as board_column_title,
                user.id as user_id,
                user.lastname as user_lastname,
                user.name as user_name
            FROM board
                JOIN board_column ON board.id = board_column.board_id
                JOIN task ON task.board_column_id = board_column.id
                JOIN task_user ON task_user.task_id = task_id
                JOIN user ON task_user.user_id = user_id
            WHERE board.id =:id
                            """, nativeQuery = true)
    public List<BoardDTO> retrieveBoardData(@Param("id") String id);
}