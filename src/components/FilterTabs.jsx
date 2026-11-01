const TABS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export default function FilterTabs({ filter, onChange, total }) {
  return (
    <div className="filters">
      <div className="tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={filter === tab.key}
            className={`tab ${filter === tab.key ? "active" : ""}`}
            onClick={() => onChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <span className="total">
        {total} {total === 1 ? "task" : "tasks"}
      </span>
    </div>
  );
}