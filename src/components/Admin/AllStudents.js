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
    backgroundColor: "grey",
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

export default function AllStudents() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [students, setStudents] = React.useState([
    {
      id: 1,
      name: "Ahmed",
      rollNo: "101xd929",
      mobileNumber: "9829892922",
      userName: "someone@example.com",
    },
    {
      id: 2,
      name: "Reza",
      rollNo: "102xd929",
      mobileNumber: "92328782982",
      userName: "abc@example.com",
    },
    {
      id: 3,
      name: "Shaikh",
      rollNo: "103xd929",
      mobileNumber: "98929191",
      userName: "abcdeg@xyz.com",
    },
  ]);

  return (
    <div className="mt-3 mb-2">
      <Typography variant="h5" color={"tomato"} align="center">
        List of All Students
      </Typography>
      <Typography>
        <Button variant="contained" color="error">
          Add a Student
        </Button>
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", marginTop: "10px" }}
      >
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Student Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Roll No</StyledTableCell>
              <StyledTableCell>Mobile Number</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((std) => (
                <StyledTableRow key={std.id}>
                  <StyledTableCell component="th" scope="row">
                    {std.id}
                  </StyledTableCell>
                  <StyledTableCell>{std.name}</StyledTableCell>
                  <StyledTableCell>{std.rollNo}</StyledTableCell>
                  <StyledTableCell>{std.mobileNumber}</StyledTableCell>
                  <StyledTableCell>{std.userName}</StyledTableCell>
                  <StyledTableCell>Edit | Delete</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 25, 50, 100, 200]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
