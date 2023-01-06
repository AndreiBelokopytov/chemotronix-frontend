import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useCallback } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

type Props = {
  text: string;
  icon: React.ReactElement;
  url: string;
};

export const NavLink = ({ text, icon, url }: Props) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(url);
  const selected = !!useMatch({ path: resolvedPath.pathname, end: true });
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate(url);
    },
    [url]
  );

  return (
    <ListItem disablePadding>
      <ListItemButton
        selected={selected}
        component="a"
        onClick={handleClick}
        href={url}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
