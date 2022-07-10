import { Button, Container, Input, Paper } from "@mui/material";
import { MyButton, MyButtonUnRounded } from "../../../assets/styles/buttons";

export default function Register() {
  return (
    <Container maxWidth="sm" className="Register">
      <Paper sx={{ p: 2, mt: 4 }}>
        <Input
          fullWidth
          placeholder="First Name"
          sx={{ color: `customRed.main` }}
        />
        <Input fullWidth placeholder="Last Name" />
        <Input fullWidth placeholder="Email" />
        <Input fullWidth placeholder="Website" />

        <MyButton
          variant="contained"
          color="secondary"
          type="button"
          disableRipple={true}
        >
          Cancel
        </MyButton>
        <MyButtonUnRounded variant="contained" type="submit">
          Submit
        </MyButtonUnRounded>
      </Paper>
    </Container>
  );
}
