import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import TableCellData from "./TableCellData";
import TableWrapper from "../styles/styles.tableData";
const TableData = ({ item }) => {
  const tableHead = [
    "Customer Name (with Avatar)",
    "Email",
    "Phone",
    "Premium",
    "Max/Min Bid",
  ];

  return (
    <TableWrapper>
      <TableContainer component={Paper} maxWidth="95%">
        <Table className="table">
          <TableHead style={{ position: "sticky" }} className="table-head">
            <TableRow>
              {tableHead.map((item) => (
                <TableCell className="head-cell" key={item}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {item.map((ele, index) => (
              <TableRow
                style={
                  index % 2
                    ? { background: "#BADAFA" }
                    : { background: "#FAD8EA" }
                }
              >
                <>
                  <TableCellData item={ele} />
                </>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default TableData;
