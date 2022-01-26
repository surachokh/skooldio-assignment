import { Box } from "@mui/system";
import React, { Component } from "react";
import PersonIcon from "@mui/icons-material/Person";
import IosShareIcon from "@mui/icons-material/IosShare";
import { IconButton, Typography } from "@mui/material";

export default class Footer extends Component {
  render() {
    return (
      <Box sx={{ display: "flex", flexDirection: "row"}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1}}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <PersonIcon style={{ color: "#9b9b9b", paddingRight: 20 }} />
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ color: "#9b9b9b" }}> {this.props.likes} </Typography>
              <Typography
                sx={{ fontStyle: "italic", paddingLeft: 1, color: "#9b9b9b" }}
              >
                คนที่สนใจ
              </Typography>
            </Box>
          </Box>
          <Box sx={{display: 'flex'}}>
              <IconButton>
              <IosShareIcon />
              </IconButton>
          </Box>
        </Box>
      </Box>
    );
  }
}
