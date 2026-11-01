import TaskItem from "./TaskItem";

const EMPTY_MESSAGES = {
  all: "No tasks yet. Add your first one above.",
  active: "Nothing left to do. Nice work!",
  completed: "No completed tasks yet.",
};

export default function TaskList({ tasks, filter, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">{EMPTY_MESSAGES[filter]}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}