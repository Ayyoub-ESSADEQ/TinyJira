package com.tinyjira.kanban.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tinyjira.kanban.DTO.BoardDTO;
import com.tinyjira.kanban.model.Board;
import com.tinyjira.kanban.model.BoardColumn;
import com.tinyjira.kanban.model.Task;
import com.tinyjira.kanban.model.User;
import com.tinyjira.kanban.repository.BoardRepository;
import com.tinyjira.kanban.repository.ColumnRepository;
import com.tinyjira.kanban.repository.TaskRepository;
import com.tinyjira.kanban.repository.UserRepository;
import com.tinyjira.kanban.utils.ColumnRequest;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1")
public class api {
    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private ColumnRepository columnRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/boards")
    public ResponseEntity<Board> createBoard(@RequestBody Board board) {
        Board recentBoard = new Board(board.getTitle(), board.getDescription());
        boardRepository.save(recentBoard);
        return ResponseEntity
                .status(201)
                .body(recentBoard);
    }

    @GetMapping("/boards")
    public ResponseEntity<List<Board>> getBoards() {
        List<Board> boards = boardRepository.findAllBoards();
        return ResponseEntity
                .status(200)
                .body(boards);
    }

    @GetMapping("/boards/{id}")
    public ResponseEntity<List<BoardDTO>> getBoardData(@PathVariable String id) {
        List<BoardDTO> board = boardRepository.retrieveBoardData(id);
        // this.initialiseDatabase();
        return ResponseEntity
                .status(201)
                .body(board);
    }

    @PostMapping("/boards/{id}/columns")
    public ResponseEntity<BoardColumn> createBoardColumn(
            @PathVariable String id,
            @RequestBody ColumnRequest column) {
        Board board = boardRepository.findBoard(id);
        BoardColumn newBoardColumn = new BoardColumn(column.title, column.order, board);
        columnRepository.save(newBoardColumn);
        return ResponseEntity
                .status(201)
                .body(newBoardColumn);
    }

    @GetMapping("/boards/{id}/columns")
    public ResponseEntity<List<BoardColumn>> getBoardColumns(@PathVariable String id) {
        List<BoardColumn> columns = columnRepository.findBoardColumns(id);
        return ResponseEntity
                .status(200)
                .body(columns);
    }

    @GetMapping("/boards/{board_id}/columns/{column_id}/tasks")
    public ResponseEntity<List<Task>> getBoardColumnTasks(
            @PathVariable String column_id,
            @PathVariable String board_id) {
        // We need to verify if the column actually belongs to the board specified in
        // the request
        BoardColumn boardColumn = columnRepository.findBoardColumn(column_id);

        if (boardColumn.getBoard().getId() == board_id) {
            List<Task> emptyList = new ArrayList<Task>();
            return ResponseEntity.status(404).body(emptyList);
        }

        List<Task> tasks = taskRepository.getAllColumnTasks(column_id);
        return ResponseEntity
                .status(200)
                .body(tasks);
    }
}