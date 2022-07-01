import MakeAppointment from "./components/MakeAppointment";
import { Box } from "@chakra-ui/react";
import './font.css'
function App() {
  return (
    <Box width={'fit-content'} mx='auto' mt={'20'} >
     <MakeAppointment/>
    </Box>
  );
}

export default App;
