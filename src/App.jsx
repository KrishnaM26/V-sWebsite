import {Routes, Route} from  'react-router';
import ContactPage from './pages/ContactPage.jsx';
import ProductPage from './pages/ProductPage.jsx';


const App = () => {


  return (
    <div>
	<Routes>
		<Route path="/" element={<ContactPage />} />
	  	<Route path="/products" element={<ProductPage />} />
	</Routes>
    </div>
  );
}

export default App;
