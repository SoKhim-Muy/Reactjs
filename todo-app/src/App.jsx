import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Make sure this matches the variable name above!
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task"
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
                style={styles.checkbox}
              />
              <span
                onClick={() => toggleTask(index)}
                style={{
                  ...styles.taskText,
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#9ca3af" : "#374151",
                }}>
                {task.text}
              </span>
            </div>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              x
            </button>
          </li>
        ))}
      </ul>
      <h3 style={styles.title}>@Jade Khim</h3>
    </div>
  );
}

//Styles
const styles = {
  container: {
    maxWidth: "420px",
    width: "90%",
    margin: "60px auto",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif',
    textAlign: "center",
  },
  title: {
    color: "#1a1a1a",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "24px",
    letterSpacing: "-0.5px",
  },
  inputContainer: {
    display: "flex",
    gap: "12px",
    marginBottom: "32px",
  },
  input: {
    flex: 1,
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    fontSize: "15px",
    backgroundColor: "#fcfcfc",
    outline: "none",
    transition: "all 0.2s ease",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.02)",
  },
  addButton: {
    padding: "0 24px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#4F46E5", // Modern Indigo
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    transition: "transform 0.1s ease, background-color 0.2s ease",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    borderRadius: "14px",
    backgroundColor: "#f9fafb",
    border: "1px solid #f3f4f6",
    transition: "all 0.2s ease",
  },
  taskText: {
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    color: "#374151",
    flex: 1,
    textAlign: "left",
    lineHeight: "1.5",
  },
  deleteButton: {
    border: "none",
    background: "#fee2e2", // Soft red background
    color: "#ef4444",      // Sharp red text
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    width: "28px",
    height: "28px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "12px",
    transition: "background-color 0.2s ease",
  },
  
  // Style for the footer name
  footer: {
    marginTop: "32px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flex: 1,
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#4F46E5", // Matches your professional Indigo button
  },
};
export default App;
