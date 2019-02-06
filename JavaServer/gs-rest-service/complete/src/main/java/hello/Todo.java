package hello;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Todo {

    @Id
    private String id;

    private final long userId;
    private final long index;
    private final String title;
    private final boolean completed;

    public Todo(long index, long userId, String title, boolean completed) {
        this.index = index;
        this.title = title;
        this.userId = userId;
        this.completed = completed;
    }

    public long getIndex() {
        return index;
    }

    public long getUserId() {
        return userId;
    }

    public boolean getcompleted() {
        return completed;
    }

    public String getTitle() {
        return title;
    }
}
