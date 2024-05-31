// import AllProducts from "./components/AllProducts";
// import AddNewProduct from "./components/AddNewProduct";
// import SpecificProduct from "./components/SpecificProduct";
import DeleteProduct from './components/DeleteProduct';
// import UpdateProduct from './components/UpdateProduct';

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId= {4} /> */}
      <DeleteProduct deletedProductId= {"4"} />
    </div>
  );
};

export default App;
