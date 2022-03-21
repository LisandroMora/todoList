import MainContent from "./components/MainContent/Index";
import SideNav from "./components/SideNav/Index";
import { FilterProvider } from "./context/FilterContext";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <FilterProvider>
      <TaskProvider>
        <div className="App">
          <SideNav />
          <MainContent />
        </div>
      </TaskProvider>
    </FilterProvider>
  );
}

export default App;
