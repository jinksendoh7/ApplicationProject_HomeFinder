import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./FilterSidebarComponent.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import Box from "@mui/material/Box";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import Divider from "@mui/material/Divider";
import { FormControl, InputLabel, Slider } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FilterSidebarComponent(props) {
  const [expanded, setExpanded] = useState("panel1");
  const [listingType, setListingType] = useState("All");
  const [keyword, setKeyWord] = useState(" ");
  const [price, setPrice] = useState(500);
  const [wifi, setWifi] = useState(false);
  const [laundry, setLaundry] = useState(false);
  const [heater, setHeater] = useState(false);
  const [aircon, setAircon] = useState(false);
  const [parking, setParking] = useState(false);
  const [nearToPark, setNearToPark] = useState(false);
  const [nearToMall, setNearToMall] = useState(false);
  const [nearToGrocery, setNearToGrocery] = useState(false);
  const [nearToGovernment, setNearToGovernment] = useState(false);
  const [nearToBank, setNearToBank] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleListingType = (event, value) => {
    setListingType(value);
  };

  const handleSearch = () => {
    props.handleSearch({
      keyword: keyword === "" ? " " : keyword,
      isRoomOnly: listingType,
      price: price,
      wifi: wifi,
      laundry: laundry,
      heater: heater,
      aircon: aircon,
      parking: parking,
      nearToPark: nearToPark,
      nearToMall: nearToMall,
      nearToGrocery: nearToGrocery,
      neartToGovernment: nearToGovernment,
      nearToBank: nearToBank,
    });
  };

  return (
    <div>
      <div className="form-alt-row-outlined">
        <TextField
          label="Street Address or Keywords.."
          variant="outlined"
          sx={{ minWidth: 300 }}
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <div className="small-text">LISTING TYPE</div>
        <ToggleButtonGroup
          color="primary"
          value={listingType}
          exclusive
          onChange={handleListingType}
          sx={{ marginBottom: 3 }}
        >
          <ToggleButton
            value={"All"}
            sx={{ textTransform: "capitalize", fontWeight: 700 }}
          >
            All
          </ToggleButton>
          <ToggleButton
            value={true}
            sx={{ textTransform: "capitalize", fontWeight: 700 }}
          >
            Room Only
          </ToggleButton>
          <ToggleButton
            value={false}
            sx={{ textTransform: "capitalize", fontWeight: 700 }}
          >
            Whole House
          </ToggleButton>
        </ToggleButtonGroup>

        <FormControl
          sx={{ marginBottom: 15, marginTop: 10, minWidth: 80 }}
          fullWidth={true}
        >
          <div className="small-text">RENT PRICE ( $0 to $5,000)</div>
          <Slider
            value={price}
            color="primary"
            step={250}
            onChange={(e) => setPrice(e.target.value)}
            valueLabelDisplay="auto"
            max={5000}
            min={0}
          />
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSearch}
          color="success"
          size="large"
          sx={{ marginTop: 5, width: "100%" }}
          disableElevation
        >
          Search
        </Button>
      </div>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color="primary">
            <b>Home Features</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem>
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
              <Checkbox
                checked={wifi}
                onChange={() => setWifi(!wifi)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalLaundryServiceOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Laundry"
              />
              <Checkbox
                checked={laundry}
                onChange={(e) => setLaundry(e.target.checked)}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalFireDepartmentOutlinedIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Heater" />
              <Checkbox
                edge="start"
                checked={heater}
                onChange={() => setHeater(!heater)}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AcUnitOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Air Conditioned"
              />
              <Checkbox
                edge="start"
                checked={aircon}
                onChange={() => setAircon(!aircon)}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalParkingOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Parking"
              />
              <Checkbox
                edge="start"
                checked={parking}
                onChange={() => setParking(!parking)}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography color="primary">
            <b>Nearby</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem>
              <ListItemIcon>
                <ParkOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-wifi"
                primary="Park and Playground"
              />
              <Checkbox
                edge="start"
                checked={nearToPark}
                onChange={() => setNearToPark(!nearToPark)}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingBagOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Shopping Malls"
              />
              <Checkbox
                edge="start"
                checked={nearToMall}
                onChange={() => setNearToMall(!nearToMall)}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Groceries"
              />
              <Checkbox
                edge="start"
                checked={nearToGrocery}
                onChange={() => setNearToGrocery(!nearToGrocery)}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Government Offices"
              />
              <Checkbox
                edge="start"
                checked={nearToGovernment}
                onChange={() => setNearToGovernment(!nearToGovernment)}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PriceChangeOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="ATM and Banks"
              />
              <Checkbox
                edge="start"
                checked={nearToBank}
                onChange={() => setNearToBank(!nearToBank)}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
