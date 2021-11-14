import React, { forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import { NavLink, NavLinkProps } from "react-router-dom";
import { makeStyles, useTheme, createStyles } from "@material-ui/core";

export interface AppMenuItemComponentProps {
  className?: string;
  link?: string | null; // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = (props) => {
  const { className, onClick, link, children } = props;
  const theme = useTheme();
  const classes = useStyles();

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== "string") {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => (
        <NavLink
          {...props}
          activeStyle={{
            // color: theme.palette.action.selected,
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            // transform: `translateX(-4px)`,
            paddingLeft: `2px`,
            backgroundColor: "#E8EDF1",
          }}
          innerRef={ref}
          // activeClassName={classes.selected_item}
        />
      ))}
      to={link}
    />
  );
};

const useStyles = makeStyles((theme) => createStyles({}));

export default AppMenuItemComponent;
