import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import './App.css'
import AllGamesPage from "./pages/AllGamesPage";
import PlayedGamePage from "./pages/PlayedGamePage";
import GameManagerment from "./pages/GameManagerment";
import Menubar from "./components/Menubar";
import GameDetails from "./pages/GameDetails";

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Menubar/>
          <Routes>
            <Route path='/SE183894' element={<AllGamesPage/>}></Route>
            <Route path="/:rollnumber/all-games" element={<AllGamesPage/>}></Route>
            <Route path='/:rollnumber/played-games' element={<PlayedGamePage/>}></Route>
            <Route path='/:rollnumber/game-management' element={<GameManagerment/>}></Route>
            <Route path='/:rollnumber/game/:id' element={<GameDetails/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
