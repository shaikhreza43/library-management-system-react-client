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

export default function AllBooks(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [books, setBooks] = React.useState([
    {
      bookId: 1,
      bookName: "History class 10",
      bookCoverImageUrl: "http://something.com",
      bookAuthor: "Ahmed",
      bookDescription: "Book Short Description",
      bookQuantity: 4,
    },
    {
      bookId: 2,
      bookName: "Geography class 9",
      bookCoverImageUrl: "http://something.com",
      bookAuthor: "Ahmed",
      bookDescription: "Book Short Description",
      bookQuantity: 3,
    },
    {
      bookId: 3,
      bookName: "Math class 8",
      bookCoverImageUrl: "http://something.com",
      bookAuthor: "Ahmed",
      bookDescription: "Book Short Description",
      bookQuantity: 5,
    },
  ]);

  return (
    <div className="container-fluid mt-3 mb-2">
      <div className="row">
        <div className="col-lg-12">
          <Typography variant="h5" color={"tomato"} align="center">
            List of All Books Available
          </Typography>
          <Typography>
            <Button variant="contained" color="error">
              Add a Book
            </Button>
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ width: "100%", marginTop: "10px" }}
          >
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Book Id</StyledTableCell>
                  <StyledTableCell>Book Name</StyledTableCell>
                  <StyledTableCell>Book Quantity</StyledTableCell>
                  <StyledTableCell>Book Cover Image</StyledTableCell>
                  <StyledTableCell>Book Author</StyledTableCell>
                  <StyledTableCell>Book Description</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                  <StyledTableCell>Allot Book to Student</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((book) => (
                    <StyledTableRow key={book.id}>
                      <StyledTableCell component="th" scope="row">
                        {book.bookId}
                      </StyledTableCell>
                      <StyledTableCell>{book.bookName}</StyledTableCell>
                      <StyledTableCell>{book.bookQuantity}</StyledTableCell>
                      <StyledTableCell>
                        {book.bookCoverImageUrl}
                      </StyledTableCell>
                      <StyledTableCell>{book.bookAuthor}</StyledTableCell>
                      <StyledTableCell>{book.bookDescription}</StyledTableCell>
                      <StyledTableCell>Edit | Delete</StyledTableCell>
                      <StyledTableCell>
                        <Button variant="contained" color="secondary">
                          Allot
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 25, 50, 100, 200]}
            component="div"
            count={books.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
}
