const TodoItem = (
    {
        todo = {
            _id: "001",
            done: true,
            title: 'Buy milk',
            status: 'COMPLETED'
        }
    }) => {
    return (
            <li >
                <input type="checkbox" defaultChecked={todo.done}/>
                {todo.title}
                ({todo.status})
            </li>
        );
    }
    
export default TodoItem;