import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
const [min, setMin] = useState(1024);
const [max, setMax] = useState(65535);
const [result, setResult] = useState("");
const generateRandomInt = () => {
  setResult(String(getRandomIntInclusive(min, max)));
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          textAlign: "center",
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box>
          <TextField
            variant="outlined"
            label="最小値"
            type="number"
            value={min}
            onChange={(event) => {
              const num = event.target.value;
              if (num) {
                setMin(Number(num));
              }
            }}
          />
          〜
          <TextField
            variant="outlined"
            label="最大値"
            type="number"
            value={max}
            onChange={(event) => {
              const num = event.target.value;
              if (num) {
                setMax(Number(num));
              }
            }}
          />
        </Box>
        <Box sx={{ marginTop: "3vw" }}>
          <Button variant="contained" onClick={generateRandomInt}>生成</Button>
        </Box>
        <Typography sx={{ marginTop: "6vw" }}>{result}</Typography>
      </Box>
    </>
  );
}

export default App;
