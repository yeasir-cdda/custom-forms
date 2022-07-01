import MakeAppointment from "./components/MakeAppointment";
import PersonalInformation from "./components/PersonalInformation";
import { Box } from "@chakra-ui/react";
import './font.css'
function App() {
  return (
    <Box width={'fit-content'} mx='auto' mt={'20'} >
     {/* <MakeAppointment/> */}
     <PersonalInformation/>
    </Box>
  );
}

export default App;
