## API

Here's the documentation for the API endpoints :

| Method   | Path                                       | Description                                            |
|----------|--------------------------------------------|--------------------------------------------------------|
| POST     | /boards                                    | Create a new board                                    |
| GET      | /boards                                    | Get all boards                                        |
| GET      | /boards/{id}                               | Get data of a specific board                          |
| POST     | /boards/{id}/columns                       | Create a new column for a board                       |
| GET      | /boards/{id}/columns                       | Get all columns of a board                            |
| GET      | /boards/{board_id}/columns/{column_id}/tasks | Get all tasks of a specific column in a board        |

Each row represents an API endpoint with its corresponding HTTP method, path, and a brief description of its functionality.