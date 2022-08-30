import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail, SearchBar } from './Components';


const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#333' }}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" exact element={<VideoDetail />} />
                    <Route path="/channel/:id" exact element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter >
    )
}

export default App;