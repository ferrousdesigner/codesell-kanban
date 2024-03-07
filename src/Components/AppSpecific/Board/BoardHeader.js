import { useStateValue } from "../../../Appstate/Provider";
import {
  UserImageWithStatus,
  getIconBasedOnPriority,
  getIconFromTaskStatus,
} from "../../UI/TaskCard/TaskCard";

const UserBlock = ({ userId }) => {
  const [{ taskData }] = useStateValue();
  const user = taskData?.users?.filter(({ id }) => id === userId)[0];
  return (
    <>
      <UserImageWithStatus userInfo={user} />
      <span className="ui-board-header">{user?.name}</span>
    </>
  );
};
const PriorityBlock = ({ priority }) => {
  let stringPriority = String(priority);
  let icon = getIconBasedOnPriority(stringPriority);
  let priortyHash = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };
  return (
    <>
      {icon}
      <span className="ui-board-header">{priortyHash[priority]}</span>
    </>
  );
};
const StatusBlock = ({ status }) => {
  let icon = getIconFromTaskStatus(status);
  return (
    <>
      <span>{icon}</span>
      <span className="ui-board-header">{status}</span>
    </>
  );
};
const BoardActions = () => {
  return (
    <span className="ui-board-action">
      <button type="button">
        <span class="material-symbols-outlined">add</span>
      </button>
      <button type="button">
        <span class="material-symbols-outlined">more_horiz</span>
      </button>
    </span>
  );
};
const BoardHeader = ({ headerInfo }) => {
  const [{ groupBy }] = useStateValue();
  return (
    <div className="board-header">
      <div className="board-header-info-left">
        {groupBy === "userId" ? (
          <UserBlock userId={headerInfo?.title} />
        ) : groupBy === "priority" ? (
          <PriorityBlock priority={headerInfo?.title} />
        ) : groupBy === "status" ? (
          <StatusBlock status={headerInfo?.title} />
        ) : (
          headerInfo?.title
        )}{" "}
        {headerInfo?.numberOfTickets}
      </div>
      <BoardActions />
    </div>
  );
};
export default BoardHeader;
