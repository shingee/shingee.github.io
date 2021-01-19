import React from "react";

interface Props {
  link: string;
  icon: string;
}

const SocialIcon = (props: Props) => {
  return (
    <a
      href={props.link}
      style={{
        fontSize: "26px",
        opacity: 0.6,
        display: "inline-block",
        marginRight: "10px",
        marginBottom: "60px",
      }}
    >
      <i className={`fa fa-${props.icon}`}></i>
    </a>
  );
};

export default SocialIcon;
