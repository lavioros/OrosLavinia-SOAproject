package hello;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoRepository extends MongoRepository<Todo, String> {

    public List<Todo> findAll();


}