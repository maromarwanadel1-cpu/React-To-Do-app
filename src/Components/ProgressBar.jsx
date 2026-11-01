export default function ProgressBar({ left, percent }) {
  return (
    <section className="progress">
      <div className="progress-info">
        <span>{left} {left === 1 ? "task" : "tasks"} left</span>
        <span>{percent}% complete</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}