import React, { Component } from "react";
import engiLogo from "../Pictures/engi@3x.png";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default class Header extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src={engiLogo}
          alt="Engineer Logo"
          style={{ paddingRight: "16px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: 24 }} color="red" gutterBottom>
            คณะวิศวกรรมศาสตร์
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            สาขาวิศวกรรมทั่วไป
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            จุฬาลงกรณ์มหาวิทยาลัย
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "16px" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{color: 'red'}}/>
          </IconButton>
        </Box>
      </Box>
    );
  }
}
