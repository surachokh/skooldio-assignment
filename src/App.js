import {
  Card,
  CardContent,
  createTheme,
  List,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import axios from "axios";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['"Prompt"', "sans-serif"].join(","),
    },
  });

  const [data, setData] = useState({ major: [] });

  useEffect(() => {
    axios
      .get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
      .then((res) => {
        const result = res.data;
        setData({
          major: result,
        });
      });
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <List sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-around", flexGrow: 1}}>
            {data.major.map((major) => (
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Header />
                  <hr />
                  <Content />
                  <hr />
                  <Footer />
                </CardContent>
              </Card>
            ))}
          </List>          
        </Box>
      </ThemeProvider>
    </div>
  );
}
