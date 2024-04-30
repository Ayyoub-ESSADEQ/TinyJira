package com.tinyjira.kanban.model;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class BoardColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "VARCHAR(36)")
    private String id;
    private String title;
    private int column_order;

    public int getColumn_order() {
        return column_order;
    }

    public void setColumn_order(int column_order) {
        this.column_order = column_order;
    }

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    public Board getBoard() {
        return board;
    }

    @OneToMany(mappedBy = "boardColumn", cascade = CascadeType.ALL)
    private Set<Task> tasks = new HashSet<>();

    protected BoardColumn() {
    }

    public BoardColumn(String title, int column_order, Board board) {
        this.title = title;
        this.column_order = column_order;
        this.board = board;
    }

    public String getid() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @JsonValue
    public Map<String, Object> toJson() {
        Map<String, Object> jsonMap = new HashMap<>();
        jsonMap.put("id", id);
        jsonMap.put("title", title);
        jsonMap.put("column_order", column_order);

        return jsonMap;
    }
}
