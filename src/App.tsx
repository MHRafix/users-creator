import {
  Box,
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  theme,
} from "@chakra-ui/react";
import { CreateUsersForm } from "./components/Forms/CreateUsersForm";
import { UsersDisplayTable } from "./components/Tables/UsersDisplayTable";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Container>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%" boxShadow="xl" p="6" rounded="md" bg="white">
            <CreateUsersForm />
          </GridItem>
          <GridItem w="100%" boxShadow="xl" p="6" rounded="md" bg="white">
            <UsersDisplayTable />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  </ChakraProvider>
);
