import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./component-react/Navbar";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("green.100", "green.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
		</Box>
	);
}

export default App;