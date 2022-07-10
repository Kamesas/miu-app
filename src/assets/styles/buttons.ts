import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyButton = styled(Button)(({ theme }) => ({
  borderRadius: theme?.spacing(1),
}));

export const MyButtonUnRounded = styled(Button)(({ theme }) => {
  console.log("theme", theme);

  return {
    borderRadius: 0,
    // `&:hover:`: {
    //   padding: theme.spacing(2, 4),

    // }
  };
});
