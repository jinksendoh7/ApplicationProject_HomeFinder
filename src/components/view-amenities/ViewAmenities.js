import { useState } from "react";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const ViewAmenities = ({ handleCloseModal, dataItem }) => {
  //forms
  const [make, setMake] = useState();
  const [vin, setVin] = useState();

  console.log(typeof dataItem);
const string = dataItem;

const usingSplit = string.split(',');
console.log("usingSplit", usingSplit.length);

  return (

    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          maxWidth: 400,
          borderRadius: 1,
        }}
      >
        
        {usingSplit.length > 1 ? (
        "Everything has recently been repaired:") : ("No repair needed.") 
}
            <div className="margin-break"></div>

        {usingSplit.length > 1 && ( Array.from(usingSplit).map((item, index) => ( 
            <Item key={index}><CheckCircleIcon />{item}</Item>
           )) )} 
        
      </Box>
    </>
      
  )

};
export default ViewAmenities;
