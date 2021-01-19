import React from "react";

interface Props {
  items: React.ReactNode[];
}

const List = (props: Props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default List;
