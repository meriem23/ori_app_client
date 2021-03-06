import { Button } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useStylesButton } from "../../styles/buttonStyles";
import { useStylesHeader } from "../../styles/headerStyles";

type PageHeaderProps = {
  titleValue: string;
  buttonText: string;
  buttonLink: string;
  // children: any;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  titleValue,
  buttonText,
  buttonLink,
  children,
}) => {
  const classesHeader = useStylesHeader();
  const ButtonClasses = useStylesButton();

  const { push } = useHistory();
  return (
    <div className={classesHeader.root}>
      <span className={classesHeader.title}> {titleValue} </span>
      {/* <Link to={buttonLink} > */}
      <Button
        className={clsx(ButtonClasses.BlueButton, classesHeader.main_button)}
        startIcon={children}
        onClick={() => (buttonLink ? push(buttonLink) : {})}
      >
        {buttonText}
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default PageHeader;
