import { useTaskContext } from "../contexts/TaskContext";
import Select from "../view/Select";

function TaskFilter() {
  const { setFilter } = useTaskContext();

  return (
    <div>
      <Select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </Select>
    </div>
  );
}

export default TaskFilter;
