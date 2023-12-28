import { CreateTaskAlert } from "./components/Alert/CreateTaskAlert";
import { CreateTask } from "./components/CreateTask";
import TodoList from "./components/todoList";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
    <CreateTaskAlert>
      <CreateTask/>
    </CreateTaskAlert>
    <TodoList/>
    </QueryClientProvider>
    
  );
}

export default App;
