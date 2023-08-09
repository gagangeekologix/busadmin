import React from 'react';
import './App.css';
import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusSearch from './BusSearch';
import BusStopDetails from './page/BusStopDetails';
import BusStopList from './page/BusStopList';
import CreateBus from './page/CreateBus';
import DeleteBus from './page/DeleteBus';
import GetBus from './page/GetBus';
import ListBuses from './page/ListBuses';
import UpdateBus from './page/UpdateBus';
import UpdateBusStop from './page/UpdateBusStop';
import DeleteBusStop from './page/DeleteBusStop';
import CreateBusStop from './page/CreateBusStop';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/bus-search" element={<BusSearch />} />
          <Route path="/create-bus" element={<CreateBus />} />
          <Route path="/get-bus" element={<GetBus />} />
          <Route path="/update-bus" element={<UpdateBus />} />
          <Route path="/delete-bus" element={<DeleteBus />} />
          <Route path="/list-buses" element={<ListBuses />} />
          <Route path="/create-bus-stop" element={<CreateBusStop />} />
          <Route path="/bus-stop-list" element={<BusStopList />} />
          <Route path="/bus-stop-details" element={<BusStopDetails />} />
          <Route path="/update-bus-stop" element={<UpdateBusStop />} />
          <Route path="/delete-bus-stop" element={<DeleteBusStop />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
