import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import AddArt from './pages/AddArt'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Box minH={'100vh'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addart" element={<AddArt />} />
      </Routes>
    </Box>
  );
}

export default App;