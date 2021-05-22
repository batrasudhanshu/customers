import {
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStore } from "./context";

const CustomerBidData = ({ customerId }) => {
  function getDateTime(timestamp) {
    let d = new Date(Number(timestamp));
    return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  }
  const { state } = useStore();

  //   const { id } = useParams();
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2">
          {state.firstname}
          {""} {state.lastname}
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {state.bids.map((ele) => (
            <Grid item xs={6} sm={4}>
              <Paper>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={6} md={6} sm={6}>
                        <Typography
                          style={{ fontSize: "14", color: "lightblue" }}
                          color="textSecondary"
                          gutterBottom
                        >
                          {getDateTime(ele.created)}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} sm={6}>
                        <Typography
                          style={{ fontSize: "14", color: "red" }}
                          gutterBottom
                        >
                          Amt : {ele.amount}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Typography variant="h5" component="h2">
                      {ele.carTitle.toUpperCase()}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CustomerBidData;
