import { Avatar, TableCell } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import BidMaxMin from "./BidMaxMin";
import { useStore } from "./context";

const TableCellData = ({ item }) => {
  const { state, dispatch } = useStore();
  const history = useHistory();
  const handleClick = () => {
    dispatch({ type: "update", details: item });
    history.push(`/customerinfo/${item.id}`);

    //console.log(id);
  };
  return (
    <>
      <TableCell onClick={handleClick}>
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
      <TableCell onClick={handleClick}>{item.email}</TableCell>
      <TableCell onClick={handleClick}>{item.phone}</TableCell>
      <TableCell onClick={handleClick}>
        {item.hasPremium ? "True" : "False"}
      </TableCell>

      {console.log(item.bids)}
      <TableCell>
        <BidMaxMin bids={item.bids} />
      </TableCell>
    </>
  );
};

export default TableCellData;
