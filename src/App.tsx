import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import {
  Color,
  Connector,
  Generate,
  Home,
  IndividualItem,
  PageNotFound,
  RegisterItem,
  TrashItem,
  UpdateItem,
} from './routes';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<IndividualItem />} />
        <Route path="/item/:id/update" element={<UpdateItem />} />
        <Route path="/register" element={<RegisterItem />} />
        <Route path="/trash" element={<TrashItem />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/connector" element={<Connector />} />
        <Route path="/color" element={<Color />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
