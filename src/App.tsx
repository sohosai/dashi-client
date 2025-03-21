import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import {
  AllRentalItems,
  Color,
  Connector,
  Generate,
  Home,
  IndividualItem,
  PageNotFound,
  RegisterItem,
  RentRental,
  AllTrashItems,
  UpdateItem,
  UpdateRental,
} from './routes';
import { LoginButton, LogoutButton, Profile } from './components';

const App: FC = () => {
  return (
    <>
      <h1>{import.meta.env.VITE_DASHI_SERVER_ENDPOINT}</h1>
      <h1>{import.meta.env.VITE_AUTH0_DOMAIN}</h1>
      <h1>{import.meta.env.VITE_AUTH0_CLIENT_ID}</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<IndividualItem />} />
        <Route path="/item/:id/update" element={<UpdateItem />} />
        <Route path="/register" element={<RegisterItem />} />
        <Route path="/trash" element={<AllTrashItems />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/connector" element={<Connector />} />
        <Route path="/color" element={<Color />} />
        <Route path="/rental/all" element={<AllRentalItems />} />
        <Route path="/rental/:id/rent" element={<RentRental />} />
        <Route path="/rental/:id/update" element={<UpdateRental />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
