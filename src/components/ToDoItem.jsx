import React from "react"; //{ useState }

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  // function handleClick() {
  // setIsDone((prevValue) => {
  //   return !prevValue;
  // });
  // }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}

export default ToDoItem;
