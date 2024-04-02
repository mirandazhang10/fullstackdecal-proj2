import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Members from "./Members";
import ProfileViewer from './ProfileViewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="debug" element={<ProfileViewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
