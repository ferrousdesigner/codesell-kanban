import React from "react";
import Board from "../../Components/AppSpecific/Board/Board";
import TaskCard from "../../Components/UI/TaskCard/TaskCard";
import BoardHeader from "../../Components/AppSpecific/Board/BoardHeader";
import BoardColumn from "../../Components/AppSpecific/Board/BoardColumn";
import { useStateValue } from "../../Appstate/Provider";
import { priorityList, useColumnsFromGrouping } from "../../Hooks/Customhooks";

const Home = () => {
  const [{ groupBy }] = useStateValue();
  const { groupedTasks } = useColumnsFromGrouping();
  return (
    <div>
      <Board>
        {groupedTasks && Object.keys(groupedTasks).length > 0 ? (
          (groupBy === "priority"
            ? priorityList
            : Object.keys(groupedTasks)
          )?.map((groupKey) => {
            const headerInfo = groupedTasks[groupKey]?.headerInfo;
            const tasks = groupedTasks[groupKey]?.tasks;
            return (
              <BoardColumn>
                <BoardHeader headerInfo={headerInfo} />
                {tasks?.map(({ id, title, user, priority, tag, status }) => {
                  return (
                    <TaskCard
                      id={id}
                      hidePriority={groupBy === "priority"}
                      hideUserInfo={groupBy === "userId"}
                      hideStatus={groupBy === "status"}
                      tag={tag}
                      priority={priority}
                      userInfo={user}
                      title={title}
                      status={status}
                    />
                  );
                })}
              </BoardColumn>
            );
          })
        ) : (
          <h1>Loading tickets...</h1>
        )}
      </Board>
    </div>
  );
};

export default Home;
