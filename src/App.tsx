import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WaferSelect from './pages/WaferSelect';
import WaferDetail from './pages/WaferDetail';
import ChipDetail from './pages/ChipDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lot/:lotId" element={<WaferSelect />} />
      <Route path="/lot/:lotId/wafer/:waferId" element={<WaferDetail />} />
      <Route path="/lot/:lotId/wafer/:waferId/chip/:chipId" element={<ChipDetail />} />
    </Routes>
  );
}
