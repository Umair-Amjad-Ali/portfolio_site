import React from "react";
import { IconButton } from "ui-neumorphism";
import { Link } from "react-router-dom";

const CardButton = ({ icon, url }) => {
  return (
    <IconButton text={false} size="medium" color="var(--primary)">
      <Link className=" text-xl" target="_blank" to={url}>
        {icon}
      </Link>
    </IconButton>
  );
};

export default CardButton;
