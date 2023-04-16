import { Grid, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import LocalStorage from "../../services/storage/LocalStorage";
import {
  LocalStorageKeysConst,
  SuccessMessageConst,
} from "../../constants/AppConstants";
import {
  Button,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Chip,
} from "@mui/material";
import SampleHome01 from "../../assets/images/houses/odd.png";
import SampleHome02 from "../../assets/images/houses/even.png";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import "./SavedListingPage.css";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "left",
  boxShadow: "none",
  border: "1px solid",
  borderColor: "#e3e3e3",
  color: theme.palette.text.secondary,
}));

const SavedListingPage = () => {
  const propAddress = "123 A Place Street, London ON, N5Y 5R6";
  const [savedListing, setSavedListing] = useState([]);
  const listing = {
    id: uuidv4(),
    address: propAddress,
    price: 2500.0,
    isRoomOnly: true,
    wifi: true,
    laundry: true,
    parking: true,
    heater: true,
    aircon: false,
    description: "The preview text goes here with 50 to 60 characters...",
  };

  const handleDeleteSavedListing = (index) => {
    const data = savedListing;
    if (index > -1) {
      // only splice array when item is found

      data.splice(index, 1); // 2nd parameter means remove one item only
    }
    LocalStorage.setStorageItem(
      LocalStorageKeysConst.SAVED_LISTING,
      savedListing
    );
  };

  useEffect(() => {
    setSavedListing(
      LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING)
    );
  }, [savedListing]);
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h1>Saved Listing</h1>
      </div>
      {savedListing && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {savedListing &&
            Array.from(savedListing).map((item, index) => (
              <Grid item xs={2} sm={4} md={4} lg={4} key={item.listing.id}>
                <Item>
                  <Card sx={{ border: 0, boxShadow: "none" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="180"
                        image={index % 2 ? SampleHome02 : SampleHome01}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{
                            color: "#346506",
                            fontWeight: "700",
                            marginBottom: 1,
                          }}
                          component="div"
                        >
                          {item.listing.propertyAddress}
                        </Typography>
                        <div className="chip-stacked">
                          {item.fees.isRoomOnly ? (
                            <Chip
                              color="error"
                              icon={<BedroomChildOutlinedIcon />}
                              label="Room Only"
                            />
                          ) : (
                            <Chip
                              color="error"
                              icon={<HouseOutlinedIcon />}
                              label="Whole House"
                            />
                          )}
                        </div>
                        <Typography variant="body2" color="text.secondary">
                          {item.listing.overview
                            .replace(/(<([^>]+)>)/gi, "")
                            .substring(0, 100)}
                          ...
                        </Typography>

                        <div className="chip-stacked">
                          {item.amenities.wifi && (
                            <Chip
                              color="success"
                              variant="outlined"
                              icon={<WifiIcon />}
                              label="Wifi"
                            />
                          )}
                          {item.amenities.laundry && (
                            <Chip
                              color="warning"
                              variant="outlined"
                              icon={<LocalLaundryServiceOutlinedIcon />}
                              label="Laundry"
                            />
                          )}
                          {item.amenities.heater && (
                            <Chip
                              color="error"
                              variant="outlined"
                              icon={<LocalFireDepartmentOutlinedIcon />}
                              label="Heater"
                            />
                          )}
                          {item.amenities.parking && (
                            <Chip
                              color="info"
                              variant="outlined"
                              icon={<LocalParkingOutlinedIcon />}
                              label="Parking"
                            />
                          )}
                          {item.amenities.aircon && (
                            <Chip
                              color="primary"
                              variant="outlined"
                              icon={<AcUnitOutlinedIcon />}
                              label="Air Con"
                            />
                          )}
                        </div>
                        <div className="chip-stacked">
                          {item.amenities.nearToPark && (
                            <Chip
                              color="error"
                              variant="outlined"
                              icon={<ParkOutlinedIcon />}
                              label="Park"
                            />
                          )}
                          {item.amenities.nearToMall && (
                            <Chip
                              color="info"
                              variant="outlined"
                              icon={<ShoppingBagOutlinedIcon />}
                              label="Shopping Mall"
                            />
                          )}
                          {item.amenities.nearToGrocery && (
                            <Chip
                              color="success"
                              variant="outlined"
                              icon={<ShoppingCartOutlinedIcon />}
                              label="Groceries"
                            />
                          )}
                          {item.amenities.nearToGovernment && (
                            <Chip
                              color="primary"
                              variant="outlined"
                              icon={<AccountBalanceOutlinedIcon />}
                              label="Government Offices"
                            />
                          )}
                          {item.amenities.nearToBank && (
                            <Chip
                              color="warning"
                              variant="outlined"
                              icon={<PriceChangeOutlinedIcon />}
                              label="ATM and Bank"
                            />
                          )}
                        </div>
                      </CardContent>
                    </CardActionArea>
                    <div className="card-actions">
                      <Button variant="outlined" size="small" color="primary">
                        Share
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleDeleteSavedListing(index)}
                        variant="outlined"
                        size="small"
                      >
                        <DeleteOutlinedIcon /> Delete
                      </Button>
                    </div>
                  </Card>
                </Item>
              </Grid>
            ))}
        </Grid>
      )}
      {savedListing === null && (
        <div className="empty-cards">
          <FavoriteBorderIcon sx={{ fontSize: 64 }} />
          <div className="empty-cards-title">
            {SuccessMessageConst.EMPTY_SAVED_LISTING}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedListingPage;
