import { Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import {
  SettingsOutlined,
  AdminPanelSettings,
  AddCard,
} from "@mui/icons-material";
import theme from "../theme";

// Custom Button Component
const CustomBlueButton = styled(Button)({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  margin: 5,
  transition: "all 1s ease-out",
  "&:hover": {
    backgroundColor: "blueviolet",
    opacity: 0.2,
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "gray",
  },
});

const ExampleCustomComponent = () => {
  return (
    <div>
      <Typography variant="h1" component={"div"}>
        This is heading 1
      </Typography>
      <Typography variant="h2" component={"div"}>
        This is heading 2
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "orange",
          color: "aliceblue",
          margin: 5,
          "&:hover": {
            backgroundColor: "orangered",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "gray",
          },
        }}
      >
        My Unique Button
      </Button>
      <CustomBlueButton>Hello world</CustomBlueButton>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary COlor
        </Button>
        <Button
          startIcon={<AdminPanelSettings />}
          variant="contained"
          color="primary"
          size="large"
        >
          Contained
        </Button>
        <CustomBlueButton startIcon={<AddCard />} size="large">
          Add Button
        </CustomBlueButton>
      </Stack>
    </div>
  );
};

export default ExampleCustomComponent;
