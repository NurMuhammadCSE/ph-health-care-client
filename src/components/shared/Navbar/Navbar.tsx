import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4" component={Link} href={'/'} fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Healthcare
        </Typography>

        <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/health">
            Health Tips
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>

        <Button LinkComponent={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
