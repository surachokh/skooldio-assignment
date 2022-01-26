import { Card, CardContent, createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./components/Header";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['"Prompt"', "sans-serif"].join(","),
    },
  });
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
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Header />
            </CardContent>
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
}
