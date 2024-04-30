package com.tinyjira.kanban.DTO;

public interface BoardDTO {
    String getBoard_id();

    String getColumn_id();

    String getBoard_column_title();

    Integer getColumn_order();

    String getTask_id();

    String getTask_title();

    String getTask_description();

    String getTask_tag();

    String getUser_id();

    String getUser_lastname();

    String getUser_name();

    String getProject_title();

    String getProject_description();
}