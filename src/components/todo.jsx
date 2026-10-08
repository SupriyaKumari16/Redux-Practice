import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    };

    const doneHandler = (id) => {
        dispatch(marksAsDone(id));
    };

    return (
        <>
            <AddForm />

            <h3>Todos list app</h3>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            color: todo.isDone ? "green" : "red"
                        }}
                    >
                        {todo.task}

                        <button onClick={() => doneHandler(todo.id)}>
                            Mark Done
                        </button>

                        <button onClick={() => clickHandler(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}