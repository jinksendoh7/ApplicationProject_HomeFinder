import { useState } from "react";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from '@mui/icons-material/Verified';
import Alert from '@mui/material/Alert'
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "#32965d" : "#7ae582",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        maxWidth: 280,
        ...sx,
      }}
      {...other}
    />
  );
}

const ListRenovations = ({ dataItem }) => {
  const string = dataItem || [];
  const usingSplit = string.split(",");
  console.log("usingSplit", usingSplit);

  return (
    <>
     {usingSplit.length > 1
          ? <Alert severity="info"> The property has been recently refurbished.</Alert>
          : <Alert severity="info">The property is in good condition with no remedial work needed.</Alert>}
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          mt:5,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {usingSplit.length > 1 &&
          Array.from(usingSplit).map((item, index) => (
            <Item key={index}>
              <CheckCircleIcon color="success" />
              {"  "}
              {item}
            </Item>
          ))}
      </Box>
    </>
  );
};
export default ListRenovations;
