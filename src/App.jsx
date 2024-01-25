
import Header from './components/Header/Header';
import store from './store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import Sidebar from "./components/Sidebar/sidebar";
import CreateForm from "./components/Createform/CreateForm";
import ViewAll from './components/ViewAll/ViewAll';
import EditForm from './components/Editform/EditForm';

function App() {
  return (
    <Provider store={store}>
      <div className="page-wrapper">
        <Header />  
      </div>
      <Sidebar />
      <div className="page-body-wrapper">
        <div className="page-body">
          <Routes>
            <Route path="/" element={<CreateForm />} />
            <Route path="/View" element={<ViewAll />} />
            <Route path="/Edit" element={<EditForm />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
