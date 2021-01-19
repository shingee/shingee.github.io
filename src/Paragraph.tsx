import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Paragraph = (props: Props) => {
  return (
    <p
      style={{
        marginTop: 0,
        marginBottom: "1rem",
      }}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
