import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
const BidMaxMin = ({ bids, test }) => {
  const max = Math.max(...bids.map((e) => e.amount));
  const min = Math.min(...bids.map((e) => e.amount));
  const [toggle, settoggle] = useState(false);
  function toggleMinMax() {
    settoggle((t) => !t);
  }
  return (
    <div>
      {bids.length ? (
        toggle ? (
          <toggle>
            {min}
            <ArrowUpwardIcon onClick={toggleMinMax} />
          </toggle>
        ) : (
          <>
            {max}
            <ArrowDownwardIcon onClick={toggleMinMax} />
          </>
        )
      ) : (
        "None"
      )}
    </div>
  );
};

export default BidMaxMin;
