import "./TaskCard.css";
export const getColorBasedOnUserStatus = (status) => {
  if (!status) return "var(--color-gray)";
  if (status) return "var(--color-green)";
};

export const getIconBasedOnPriority = (priority) => {
  if (!priority || String(priority) === "0")
    return <span className="material-symbols-outlined">more_horiz</span>;
  if (String(priority) === "1")
    return (
      <span class="material-symbols-outlined">signal_cellular_alt_1_bar</span>
    );
  if (String(priority) === "2")
    return (
      <span class="material-symbols-outlined">signal_cellular_alt_2_bar</span>
    );
  if (String(priority) === "3")
    return <span class="material-symbols-outlined">signal_cellular_alt</span>;
  if (String(priority) === "4")
    return (
      <span
        style={{ color: "var(--color-orange)" }}
        className="material-symbols-outlined"
      >
        assignment_late
      </span>
    );
};

export const getIconFromTaskStatus = (status) => {
  if (status === "Backlog")
    return (
      <span className="ui-task-content-icon">
        <span className="task-no-status"></span>
      </span>
    );
  else if (status === "Todo")
    return (
      <span className="ui-task-content-icon">
        <span className="task-status-todo"></span>
      </span>
    );
  else if (status === "In progress")
    return (
      <span className="ui-task-content-icon" style={{ color: "#EBCB62" }}>
        <span class="material-symbols-outlined">contrast</span>
      </span>
    );
  else if (status === "Done")
    return (
      <span className="ui-task-content-icon" style={{ color: "#606ACB" }}>
        <span class="material-symbols-outlined">check_circle</span>
      </span>
    );
  else if (status === "Cancel")
    return (
      <span className="ui-task-content-icon">
        <span class="material-symbols-outlined">cancel</span>
      </span>
    );
};

export const getTagWithIcon = (tag) => {
  if (String(tag) === "Feature Request")
    return (
      <>
        <span class="material-symbols-outlined">adjust</span> {tag}
      </>
    );
  else return <>{tag}</>;
};

export const UserImageWithStatus = ({ userInfo }) => {
  return (
    <span className="ui-task-header-user-info">
      <img
        src={
          userInfo?.image ||
          `https://ui-avatars.com/api/?name=${userInfo?.name
            ?.split(" ")
            .join("+")}`
        }
        alt=""
      />
      <span
        className="ui-task-user-status"
        style={{
          backgroundColor: getColorBasedOnUserStatus(userInfo?.available),
        }}
      ></span>
    </span>
  );
};
const TaskCard = ({
  tag,
  title,
  id,
  status,
  priority,
  userInfo,
  hideUserInfo,
  hidePriority,
  hideStatus,
}) => {
  let baseClass = "ui-task-card ";

  return (
    <div className={baseClass}>
      <div className="ui-task-header">
        <span className="ui-task-header-tag">{id}</span>
        {!hideUserInfo ? <UserImageWithStatus userInfo={userInfo} /> : ""}
      </div>
      <div className="ui-task-content">
        {!hideStatus ? getIconFromTaskStatus(status) : ""}{" "}
        {title ? <h3>{title}</h3> : ""}
      </div>
      <div className="ui-task-bottom-info">
        {!hidePriority ? (
          <span className="ui-task-priority">
            {getIconBasedOnPriority(priority)}
          </span>
        ) : (
          ""
        )}
        {tag ? (
          <span className="ui-task-tag">
            {tag?.map((t) => getTagWithIcon(t))}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TaskCard;
