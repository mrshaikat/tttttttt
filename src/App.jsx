import { useReducer, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import AddTask from "./components/AddTask";
import HeroSection from "./components/HeroSectction";
import TaskBoard from "./components/TaskBoard";
import { TaskContext } from "./context/taskContext";
import { initialTasks } from "./data/taskData";
import taskReducer from "./reducer/taskReducer";
function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [UpdateData, setUpdateData]= useState(null);
  const [isShow, setIsShow] = useState(false);
  
  const handleCloseAddTask = () =>{
    setIsShow(false);
    setUpdateData(null);
}

const handleOpenAddTask = () =>{
    setIsShow(true);
}

  console.log("task", tasks);
  const handleAddTask = (e, newData, isAdd)=>{
    e.preventDefault();

    if(isAdd){
      // setTasks([
      //   ...tasks,
      //   newData
      // ])

      dispatch({
        type: "create",
        payload: newData
      });
    }else{
      // setTasks(
      //   tasks.map((task)=> {
      //     if(task.id === newData.id){
      //       return newData
      //   }
      //   return task;
      // })
      // );

      dispatch({
        type: "update",
        payload: newData
      });
    }
    setIsShow(false);
  }

  const handleEditTask = (edit) =>{
    setIsShow(true);
    setUpdateData(edit);
  }

  const handleDelete  = (id) =>{
    dispatch({
      type: "delete",
      payload: id
    });
    // setTasks(
    //   tasks.filter(task => task.id !== id)
    // );
  }

  const handleDeleteAllTask = () => {
    // tasks.length = 0;
    // setTasks([...tasks]);
    // console.log("Hello");
    dispatch({
      type: "allDelete",
    });
  }

  const handleSearch = (searchData)=>{
    // const filtered = tasks.filter(task => task.title.toLowerCase().includes(searchData.toLowerCase()));
    // setTasks([...filtered]);
    dispatch({
      type: "search",
      payload: searchData
    });
  }


  const handleFavorite = (taskId) => {
    // const taskIndex = tasks.findIndex(task => task.id === taskId);

    // const newTasks = [...tasks];
    // newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    // setTasks(newTasks);
    dispatch({
      type: "favorite",
      payload: taskId
    });
  }

  return (
    <TaskContext.Provider value={{task, dispatch}}>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection/>
        {isShow && <AddTask onAddTask={handleAddTask} updateData={UpdateData} onClose={handleCloseAddTask}/>}
        <TaskBoard onAllDelete={handleDeleteAllTask} onDelete={handleDelete} onAddTask={handleAddTask} tasks={tasks} onEditTask={handleEditTask} onClose={handleCloseAddTask} onOpen={handleOpenAddTask} onSearch={handleSearch} onFev={handleFavorite}/>
      </div>
      <Footer />
    </TaskContext.Provider>
  );
}

export default App;
