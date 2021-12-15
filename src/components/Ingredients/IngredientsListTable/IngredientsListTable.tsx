import React, { useEffect } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  DialogActions,
  Button,
  Checkbox,
  Paper,
  Typography,
  Toolbar,
  TableSortLabel,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
} from "@material-ui/core";
import { useMutation, useQueryClient } from "react-query";
import { useSnackbar } from "notistack";

//styles
import { useStylesButton } from "../../../styles/buttonStyles";
import { useStylesDialog } from "../../../styles/dialogStyles";
import { useStylesTable } from "../../../styles/arrayStyles";

//icons
import { BsThreeDotsVertical } from "react-icons/bs";
import UpdateIcon from "../../../icons/UpdateIcon";
import Trash from "../../../icons/Trash";

//services

import { getComparator, stableSort } from "../../../utils/tableFunctions";
import { useToolbarStyles } from "../../../styles/TollbarStyles";
import { useStylesMenu } from "../../../styles/menuStyles";
import { DeleteIngredient } from "../../../services/IngredientsServices/ingredientServices";
import { useHistory } from "react-router";

// import { useStylesMenu } from "../../../styles/menuStyles";
// import { useToolbarStyles } from "../../../styles/TollbarStyles";

type Order = "asc" | "desc";

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: any;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler = (property: any) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "Select all roles" }}
          />
        </TableCell> */}
        {headCells
          .filter((row: any) => row.checked)
          .map((headCell: any) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

// const SpringModal = () => {
//   return (
//     <div>
//       {/* <button type="button" onClick={handleOpen}>
//         react-spring
//       </button> */}
//     </div>
//   );
// };

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, classes.container, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Liste des Ingrédients
        </Typography>
      )}
      {/* if any elements are selected in the table -> show button for any action */}
      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

interface MuiTableRowProps {
  Ingredient: any;
  index: number;
  handleClick: any;
  isSelected: any;
  headCells: any;
}

const MuiTableRow = ({
  Ingredient,
  index,
  isSelected,
  handleClick,
  headCells,
}: MuiTableRowProps) => {
  const classes = useStylesMenu();
  const ButtonClasses = useStylesButton();
  const DialogClasses = useStylesDialog();
  const tableClasses = useStylesTable();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { push } = useHistory();

  const isItemSelected = isSelected(Ingredient._id);
  const labelId = `enhanced-table-checkbox-${index}`;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const {
    mutateAsync: deleteIngredient,
    isLoading: isMutatingDeleteIngredient,
    isSuccess: isSuccessDeleteIngredient,
  } = useMutation(DeleteIngredient);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateIngredient = (e: any) => {
    e.stopPropagation();
    setAnchorEl(null);
    push(`/Ingredients/Update_Ingredient/${Ingredient._id}`);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleDeleteIngredient = (idIngredient: string) => {
    console.log("#idIngredient", idIngredient);

    deleteIngredient(idIngredient);
  };

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccessDeleteIngredient) {
      setOpen(false);

      enqueueSnackbar("Ingrédient supprimé avec succès", {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });

      queryClient.refetchQueries("ingredients");

      setTimeout(() => {
        closeSnackbar();
      }, 5000);
    }
  }, [isSuccessDeleteIngredient]);

  console.log("#Ingredient ", Ingredient);
  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={Ingredient._id}
      selected={isItemSelected}
    >
      {/* <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
          onClick={(event: any) => handleClick(event, Ingredient._id)}
        />
      </TableCell> */}
      {headCells.filter((el: any) => el.id === "_id")[0]?.checked && (
        <TableCell component="th" id={labelId} scope="row" padding="none">
          {Ingredient._id ? (
            Ingredient._id
          ) : (
            <span style={{ fontWeight: 700 }}>--</span>
          )}
        </TableCell>
      )}
      {headCells.filter((el: any) => el.id === "name")[0]?.checked && (
        <TableCell>
          {Ingredient.name ? (
            <span
              onClick={(e: any) => {
                e.stopPropagation();
                push(`/Ingredients/Details_Ingredient/${Ingredient._id}`);
              }}
            >
              {Ingredient.name}
            </span>
          ) : (
            <span style={{ fontWeight: 700 }}>--</span>
          )}
        </TableCell>
      )}
      {headCells.filter((el: any) => el.id === "family")[0]?.checked && (
        <TableCell>
          {Ingredient?.family ? (
            Ingredient?.family?.name
          ) : (
            <span style={{ fontWeight: 700 }}>--</span>
          )}
        </TableCell>
      )}
      {headCells.filter((el: any) => el.id === "shape")[0]?.checked && (
        <TableCell>
          {Ingredient?.shape ? (
            Ingredient?.shape?.name
          ) : (
            <span style={{ fontWeight: 700 }}>--</span>
          )}
        </TableCell>
      )}
      {/* {headCells.filter((el: any) => el.id === "rol_Approval_N")[0].checked && (
        <TableCell>
          {Ingredient.rol_Approval_N === "1" ? "active" : "Inactive"}
        </TableCell>
      )} */}
      <TableCell className={tableClasses.fixed_width_table_column}>
        <button
          onClick={handleClickMenu}
          className={ButtonClasses.ActionsButton}
        >
          <BsThreeDotsVertical
            style={{ fill: "#53596C", height: "32px", width: "20px" }}
          />
        </button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.poper_menu_container}
        >
          <MenuItem
            onClick={handleUpdateIngredient}
            className={classes.menu_update_container}
            disableRipple={true}
          >
            {" "}
            <div>
              <UpdateIcon /> <span className="menu_title">Modifier</span>
            </div>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className={classes.menu_delete_container}
            disableRipple={true}
          >
            <div onClick={() => setOpen(true)}>
              <Trash />
              <span className="menu_title">Supprimer</span>
            </div>
          </MenuItem>
        </Menu>
      </TableCell>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        className={DialogClasses.dialog_container}
      >
        <DialogTitle className={DialogClasses.alert_dialog_title}>
          <Trash />
          <span className="alert_dialog_title_text">
            Supprimer ingrédient ?
          </span>
        </DialogTitle>
        <DialogContent className={DialogClasses.alert_dialog_content}>
          <DialogContentText>
            êtes vous sur de supprimer cet ingrédient ?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={DialogClasses.alert_dialog_actions}>
          <Button
            className={clsx(ButtonClasses.GreyButton)}
            onClick={handleCloseModal}
            color="primary"
          >
            Annuler
          </Button>
          <Button
            className={clsx(ButtonClasses.RedButton)}
            onClick={() => handleDeleteIngredient(Ingredient._id)}
            color="primary"
            autoFocus
          >
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </TableRow>
  );
};

interface PropsRolesListEnhancedTable {
  recepiesData: any;
  headCells: any;
}

export default function RecepiesListEnhancedTable({
  recepiesData,
  headCells,
}: PropsRolesListEnhancedTable) {
  const classes = useStyles();
  const tableClasses = useStylesTable();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<any>("role_code");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    console.log("#property: ", property, "#asc: ", isAsc);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = recepiesData.map((n: any) => n._id);
      setSelected(newSelecteds);
      // console.log("#", event.target.checked);
      return;
    }

    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // handle table rows padding density
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, recepiesData?.length - page * rowsPerPage);

  console.log("#recepiesData ---->", recepiesData);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={clsx(classes.table, tableClasses.root)}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={recepiesData?.length}
              headCells={headCells}
            />
            <TableBody>
              {/* {stableSort(recepiesData, getComparator(order, orderBy)) */}
              {recepiesData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((ingredient: any, index: any) => {
                  return (
                    <MuiTableRow
                      index={index}
                      Ingredient={ingredient}
                      isSelected={isSelected}
                      handleClick={handleClick}
                      key={index}
                      headCells={headCells}
                    />
                  );
                })}
              {/* Table Row height calculated to keep the height of the table fixed */}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={recepiesData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* switching wetween desne padding and light padding switch */}
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
