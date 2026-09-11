(() => {
  const tasks = [...document.querySelectorAll("[data-deploy-task]")];
  const bar = document.getElementById("progress-bar");
  const label = document.getElementById("progress-label");
  const reset = document.getElementById("reset-checklist");
  const storageKey = "apex-deployment-checklist-v1";

  function savedTasks() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
      return [];
    }
  }

  function update() {
    const completed = tasks.filter((task) => task.checked);
    const percentage = tasks.length ? (completed.length / tasks.length) * 100 : 0;
    bar.style.width = `${percentage}%`;
    label.textContent = `${completed.length} of ${tasks.length} tasks complete`;
    try {
      localStorage.setItem(storageKey, JSON.stringify(completed.map((task) => task.id)));
    } catch {
      // The checklist still works if private browsing blocks local storage.
    }
  }

  const completedIds = new Set(savedTasks());
  tasks.forEach((task) => {
    task.checked = completedIds.has(task.id);
    task.addEventListener("change", update);
  });

  reset?.addEventListener("click", () => {
    tasks.forEach((task) => { task.checked = false; });
    update();
  });

  update();
})();
