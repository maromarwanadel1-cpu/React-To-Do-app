import { useState, useMemo } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import ProgressBar from "./components/ProgressBar";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const activeCount = tasks.length - completedCount;
  const percent = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  const visibleTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="page">
      <span className="blob blob-green" />
      <span className="blob blob-peach" />

      <main className="card">
        <Header />
        <TaskForm onAdd={addTask} />
        <ProgressBar left={activeCount} percent={percent} />
        <FilterTabs
          filter={filter}
          onChange={setFilter}
          total={tasks.length}
        />
        <TaskList
          tasks={visibleTasks}
          filter={filter}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </main>

      <Footer />
    </div>
  );
}