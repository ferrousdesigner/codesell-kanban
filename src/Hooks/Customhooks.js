import { useStateValue } from "../Appstate/Provider";
import { comparePriority, compareTitle, onlyUnique } from "../Utils/ArrayUtils";

const getSortedTasks = (tasks, sortBy) => {
  const payload = tasks?.sort(
    sortBy === "title" ? compareTitle : comparePriority
  );
  return payload;
};

export const priorityList = ["0", "4", "3", "2", "1"];
export const statusList = ["Backlog", "Todo", "In progress", "Done", "Cancel"];
export const useColumnsFromGrouping = () => {
  const [{ taskData, groupBy, sortBy }] = useStateValue();
  const groupedTasks = {};
  if (!taskData)
    return {
      groupedTasks: {},
    };
  let groups =
    groupBy === "status"
      ? statusList
      : groupBy === "priority"
      ? priorityList
      : taskData?.tickets?.map((task) => task[groupBy]).filter(onlyUnique);

  groups.forEach((group) => {
    const groupTasks = taskData?.tickets?.filter(
      (task) => String(task[groupBy]) === group
    );
    const sortedTask = getSortedTasks(groupTasks, sortBy);
    const sortedTaskWithUserInfo = sortedTask?.map((task) => ({
      ...task,
      user: taskData?.users?.filter((user) => user.id === task?.userId)[0],
    }));
    groupedTasks[group] = {
      headerInfo: {
        title: group,
        numberOfTickets: sortedTaskWithUserInfo?.length,
      },
      tasks: sortedTaskWithUserInfo,
    };
  });
  return {
    groupedTasks,
  };
};
