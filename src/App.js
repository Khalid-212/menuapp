import { Route, Routes } from 'react-router-dom';
import './App.css';
import { selectUser } from './UserSlice';
import { useSelector } from "react-redux";
import AdminDashboard from './Admin/Pages/AdminDashboard';
import MenuTile from './Pages/Menus/MenuTile/MenuTile';
import MenuList from './Pages/Menus/MenuList/MenuList';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={"Page Not Found"} />
      <Route path="/tilemenu" element={<MenuTile />} />
      <Route path="/listmenu" element={<MenuList />} />
      <Route path="/admin" element={<AdminDashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
