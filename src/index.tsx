import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import English from "./pages/English/English";
import Notes from "./pages/Notes/Notes";
import Register from "./pages/Auth/Register/Register";
import { LayoutPage } from "./components/LayoutPage/LayoutPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/styles/theme";
import "./assets/styles/main.scss";
import { CssBaseline } from "@mui/material";
import Photos from "./pages/Photos/Photos";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="english" element={<English />} />
            <Route path="notes" element={<Notes />} />
            <Route path="photos" element={<Photos />} />
            <Route path="register" element={<Register />} />
            <Route index element={<Navigate to="/english" replace />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
