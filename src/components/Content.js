import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import "../App.css";
import logo from "../Pictures/group-3-copy-4@3x.png";
import starLogo from "../Pictures/page-1-copy-2@3x.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default class Contents extends Component {
  render() {
    return (
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography >รอบที่เปิด</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              flexGrow: 0.5,
            }}
          >
            <span className="dot-green">
              <Typography sx={{ color: "white", paddingTop: "4px" }}>
                {" "}
                1{" "}
              </Typography>
            </span>
            <span className="dot-green">
              <Typography sx={{ color: "white", paddingTop: "4px" }}>
                {" "}
                2{" "}
              </Typography>
            </span>
            <span className="dot">
              <Typography sx={{ color: "white", paddingTop: "4px" }}>
                {" "}
                3{" "}
              </Typography>
            </span>
            <span className="dot-green">
              <Typography sx={{ color: "white", paddingTop: "4px" }}>
                {" "}
                4{" "}
              </Typography>
            </span>
            <span className="dot">
              <Typography sx={{ color: "white", paddingTop: "4px" }}>
                {" "}
                5{" "}
              </Typography>
            </span>
          </Box>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{color: '#ff5a5a', fontWeight: 'bold'}}>รอบที่ 4 : Admission</Typography>
          </Box>
          <Button variant="outlined" color="error" sx={{ borderRadius: 20 }}>
            แก้ไขข้อมูล{" "}
            <img
              src={logo}
              style={{ width: 19, height: 19, paddingLeft: 8 }}
              alt="logo"
            />
          </Button>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", paddingLeft: 8 }}>
            <img src={starLogo} alt="star logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: 12, textAlign: "end" }}>
              คะแนนของคุณคือ
            </Typography>
            <Typography sx={{ fontSize: 42 }}>23,453</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 20 }}>20,845</Typography>
            <Typography sx={{ fontSize: 11 }}>คะแนนต่ำสุด 60</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 20 }}>21,345</Typography>
            <Typography sx={{ fontSize: 11 }}>คะแนนเฉลี่ย 60</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 20 }}>23,415</Typography>
            <Typography sx={{ fontSize: 11 }}>คะแนนสูงสุด 60</Typography>
          </Box>
        </Box>
        <hr />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <PlayArrowIcon style={{ color: "#48b6a3", paddingRight: 16 }} />
          <Typography sx={{ fontSize: 16, color: "#48b6a3" }}>
            ดูสัดส่วนคะแนน
          </Typography>
        </Box>
      </Box>
    );
  }
}
