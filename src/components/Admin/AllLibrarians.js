import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "purple",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function AllLibrarians() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [librarians, setLibrarians] = React.useState([
    {
      id: 1,
      name: "Ahmed",
      mobileNumber: "9829892922",
      userName: "someone@example.com",
    },
    {
      id: 2,
      name: "Reza",
      mobileNumber: "92328782982",
      userName: "abc@example.com",
    },
    {
      id: 3,
      name: "Shaikh",
      mobileNumber: "98929191",
      userName: "abcdeg@xyz.com",
    },
  ]);

  return (
    <div className="mt-3 mb-2">
      <Typography variant="h5" color={"tomato"} align="center">
        List of All Librarians
      </Typography>
      <Typography>
        <Button variant="contained" color="primary">
          Add a Librarian
        </Button>
      </Typography>
      <TableContainer component={Paper} sx={{ width: "100%",marginTop:"10px" }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Librarian Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Mobile Number</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {librarians
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((lib) => (
                <StyledTableRow key={lib.id}>
                  <StyledTableCell component="th" scope="row">
                    {lib.id}
                  </StyledTableCell>
                  <StyledTableCell>{lib.name}</StyledTableCell>
                  <StyledTableCell>{lib.mobileNumber}</StyledTableCell>
                  <StyledTableCell>{lib.userName}</StyledTableCell>
                  <StyledTableCell>Edit | Delete</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 25, 50, 100, 200]}
        component="div"
        count={librarians.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
