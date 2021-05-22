import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

import TableData from "./components/TableData";
import PageInation from "./components/PageInation";
import CustomerBidData from "./components/CustomerBidData";
import { StoreProvider } from "./components/context";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [dataPerPage, setdataPerPage] = useState(4);

  const fetchData = () => {
    fetch("https://intense-tor-76305.herokuapp.com/merchants")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Get Current Data

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  // Change Page

  const pageinate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/">
            <Typography variant="h1" component="h2">
              Customers Record
            </Typography>
            <TableData item={currentData} />
            <PageInation
              dataPerPage={dataPerPage}
              totalData={data.length}
              pageinate={pageinate}
            />
          </Route>
          <Route exact path="/customerinfo/:id" component={CustomerBidData} />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
