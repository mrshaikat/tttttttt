import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import AddTask from "./components/AddTask";
import HeroSection from "./components/HeroSectction";
import TaskBoard from "./components/TaskBoard";
import { initialTasks } from "./data/taskData";
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [UpdateData, setUpdateData]= useState(null);
  const [isShow, setIsShow] = useState(false);
  
  const handleCloseAddTask = () =>{
    setIsShow(false);
    setUpdateData(null);
}

const handleOpenAddTask = () =>{
    setIsShow(true);
}


  const handleAddTask = (e, newData, isAdd)=>{
    e.preventDefault();

    if(isAdd){
      setTasks([
        ...tasks,
        newData
      ])
    }else{
      setTasks(
        tasks.map((task)=> {
          if(task.id === newData.id){
            return newData
        }
        return task;
      })
      );
    }
    setIsShow(false);
  }

  const handleEditTask = (edit) =>{
    setIsShow(true);
    setUpdateData(edit);

  }
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection/>
        {isShow && <AddTask onAddTask={handleAddTask} updateData={UpdateData} onClose={handleCloseAddTask}/>}
        <TaskBoard onAddTask={handleAddTask} tasks={tasks} onEditTask={handleEditTask} onClose={handleCloseAddTask} onOpen={handleOpenAddTask}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
