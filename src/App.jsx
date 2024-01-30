import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./components/HeroSectction";
import TaskBoard from "./components/TaskBoard";
import { initialTasks } from "./data/taskData";
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard tasks={tasks}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
