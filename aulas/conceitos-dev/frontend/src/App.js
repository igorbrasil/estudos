import React, { useState, useEffect } from "react";
import api from "./services/api";
import Header from "./components/Header";
import "./App.css";
//import backgroundImage from "./assets/background.jpg";

// import { Container } from './styles';
/**
 * Componente
 * Propriedades
 * Estado
 * <img src={backgroundImage} width={300} />
 */
function App() {
  // const projects = useState(["Desenvolvimento de app", "Front-end web"]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);
  //projects.push(`Novo Projeto ${Date.now()}`);
  //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  async function handleAddProject() {
    const response = await api.post("projects", {
      title: `Front-end com ReactJS ${Date.now()}`,
      owner: "Diego Fernande",
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projetos
      </button>
    </>
  );
}
export default App;
