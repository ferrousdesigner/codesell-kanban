import Flex from "../../UI/Flex/Flex";
import ButtonMenu from "../../UI/ButtonMenu/ButtonMenu";
import Header from "../../UI/Header/Header";
import Select from "../../UI/Select/Select";
import "./Navigation.css";
import Space from "../../UI/Space/Space";
import { useStateValue } from "../../../Appstate/Provider";
const Navigation = () => {
  const [{ groupBy, sortBy }, dispatch] = useStateValue();

  let baseClass = "ui-nav ";

  const groupingOptions = [
    { label: "Status", value: "status" },
    { label: "Priority", value: "priority" },
    { label: "Users", value: "userId" },
  ];
  const sortingOptions = [
    { label: "Priority", value: "priority" },
    { label: "Title", value: "title" },
  ];

  const changeGroupBy = (newGroupBy) => {
    dispatch({
      type: "CHANGE_GROUP_BY",
      groupBy: newGroupBy,
    });
  };
  const changeSortingBy = (newSortBy) => {
    dispatch({
      type: "CHANGE_SORT_BY",
      sortBy: newSortBy,
    });
  };
  return (
    <div className={baseClass}>
      <ButtonMenu
        closeOnChange={[sortBy, groupBy]}
        label={"Display"}
        icon={<span className="fa-solid fa-sliders" />}
      >
        <Flex>
          <Header bold accent>
            Grouping
          </Header>
          <Select
            value={groupBy}
            onChange={(e) => changeGroupBy(e.target.value)}
            options={groupingOptions}
          />
        </Flex>
        <Space />
        <Flex>
          <Header bold accent>
            Ordering
          </Header>
          <Select
            value={sortBy}
            options={sortingOptions}
            onChange={(e) => changeSortingBy(e.target.value)}
          />
        </Flex>
      </ButtonMenu>
    </div>
  );
};

export default Navigation;
