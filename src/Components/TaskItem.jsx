export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task ${task.completed ? "done" : ""}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="checkbox">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5l2.5 2.5L10 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="task-text">{task.text}</span>
      </label>

      <button
        className="btn-delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 4.5h10M6.5 4.5V3h3v1.5M5 4.5l.5 8h5l.5-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </li>
  );
}