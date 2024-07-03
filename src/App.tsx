import React from "react";
import { Container, Typography } from "@mui/material";

import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h4" gutterBottom>
          NPI Registry Search
        </Typography>
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
