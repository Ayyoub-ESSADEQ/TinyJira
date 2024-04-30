package com.tinyjira.kanban;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class KanbanApplication {

	public static void main(String[] args) {
		Dotenv.load();
		SpringApplication.run(KanbanApplication.class, args);
	}
}
