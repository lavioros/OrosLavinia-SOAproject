package hello;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
public class ToDoController {

    @Autowired
    ToDoRepository toDoRepository;

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();



    @PostMapping("/todos")
    public ResponseEntity<?> createNewToDo(@RequestBody Todo todo) {

         toDoRepository.insert(todo);
         return ResponseEntity.ok().build();
    }


    /*
    Communication with an external API that brings a list of todos

        -o n get makes a unoin of the external data and the data in database
     */

    @GetMapping("/todos")
    public List getAllTodosExternal() {

        RestTemplate restTemplate = new RestTemplate();
        List<Todo> result = (List<Todo>) restTemplate.getForObject("http://jsonplaceholder.typicode.com/todos/", List.class);
        System.out.println(result);
        List<Todo> dbTodos = toDoRepository.findAll();
        dbTodos.addAll(result);
        return dbTodos;
    }

    @DeleteMapping("todos/{id}")
    public void deleteTodo(@PathVariable("id") long itemId){

        toDoRepository.deleteById(String.valueOf(itemId));
    }
}
