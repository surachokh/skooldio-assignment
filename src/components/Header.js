import React, { Component } from "react";
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
          src={this.props.picture}
          alt="Engineer Logo"
          style={{ paddingRight: "16px", width: 120, height: 120 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: 24 }} color="red" gutterBottom>
            {this.props.facultyName}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {this.props.majorName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {this.props.universityName}
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
