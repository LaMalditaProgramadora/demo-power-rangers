import "./App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMyTop5PowerRangersSeasons } from "../src/services/PowerRangerService";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function App() {
  const [rows, setRows] = useState([]);

  const getMyTop5PowerRangersSeasonsFromApi = () => {
    getMyTop5PowerRangersSeasons().then((data) => {
      if (data) {
        setRows(data);
      }
    });
  };

  useEffect(() => {
    getMyTop5PowerRangersSeasonsFromApi();
  }, []);

  return (
    <div className="App">
      <Typography variant="h3" gutterBottom>
        My Top 5 Power Rangers Seasons
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Season</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Episodes</TableCell>
              <TableCell>First Released</TableCell>
              <TableCell>Last Released</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.season}>
                <TableCell>{row.season}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.episodes}</TableCell>
                <TableCell>{row.firstReleased}</TableCell>
                <TableCell>{row.lastReleased}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
