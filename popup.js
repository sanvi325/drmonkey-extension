document.getElementById("createATask").addEventListener("click", () => {
  const task = document.getElementById("taskInput").value;

  chrome.storage.sync.get({ tasks: [] }, (data) => {
    const tasks = data.tasks;
    tasks.push(task);
    chrome.storage.sync.set({ tasks });
  });
});