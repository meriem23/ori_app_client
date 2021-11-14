import { createStyles, makeStyles } from "@material-ui/styles";
import { GrLounge } from "react-icons/gr";

const useStyles = makeStyles(() =>
  createStyles({
    salonLogo: {
      "& path": {
        stroke: "white",
      },
    },
  })
);

function Salon() {
  const classes = useStyles();
  return <GrLounge className={classes.salonLogo} />;
}

export default Salon;
