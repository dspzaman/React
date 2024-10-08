import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectSidebar from './components/ProjectSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects : [],
    tasks : []
  });
  function handleAddTask(text){
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId : prevState.selectedProjectId,
        id: taskId
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    })
  }
  function handleDeleteTask(id){
    setProjectsState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }
  function handleStartAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId : null
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  
  function handleSelectProject(id){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId : id,
      }
    })
  }
  function handleancelAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId : undefined
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId : undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }


  const sbselectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let filteredTasks = projectsState.tasks.filter(
    task => task.projectId === projectsState.selectedProjectId
  );
  
  let content = <SelectedProject 
    project={ sbselectedProject } 
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask}
    onDeleteTask = {handleDeleteTask}
    tasks = {filteredTasks}
    />;
  if(projectsState.selectedProjectId===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleancelAddProject} />
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStatChange = {handleStartAddProject} />
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar 
      onStatChange = {handleStartAddProject} 
      projects={projectsState.projects}
      onSelectProject={handleSelectProject} 
      selectedProjectId={projectsState.selectedProjectId}
       />
      {content}
    </main>
  );
}

export default App;
