import { styled, Switch } from "@material-ui/core";

export const RoundedSwitch = styled(Switch)(({ theme, rounded, darkMode }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {},
      "& + .MuiSwitch-track": {
        backgroundColor: "#aab4be",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: darkMode ? "#000" : "#333333",
    width: 32,
    height: 32,
    borderRadius: rounded ? "50%" : 0,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
  },
}));
