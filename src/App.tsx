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
  AllTrashItems,
  UpdateItem,
} from './routes';
import { Header } from './components';

const App: FC = () => {
  return (
    <>
      <Header />
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
