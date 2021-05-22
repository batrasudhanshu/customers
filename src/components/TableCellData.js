import { Avatar, TableCell } from "@material-ui/core";
import React from "react";
import BidMaxMin from "./BidMaxMin";

const TableCellData = ({ item }) => {
  return (
    <>
      <TableCell>
        <div style={{ alignItems: "center" }}>
          <Avatar
            alt={item.firstname.toUpperCase()}
            src={item.avatarUrl}
            style={{
              width: "60px",
              height: "60px",
              marginLeft: "10px",
            }}
          />
          <br />
          {item.firstname.toUpperCase() + " " + item.lastname.toUpperCase()}
        </div>
      </TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.phone}</TableCell>
      <TableCell>{item.hasPremium ? "True" : "False"}</TableCell>

      {console.log(item.bids)}
      <TableCell>
        <BidMaxMin bids={item.bids} />
      </TableCell>
    </>
  );
};

export default TableCellData;
