import { useAddNewProductMutation } from "../app/service/dummyData";

useAddNewProductMutation;

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  const handleAddProduct = async () => {
    try {
      const newProcutData = {
        id: 1,
        title: "Amazing T-shirt",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, ab",
      };

      await addNewProduct(newProcutData);
    } catch (error) {
      console.error("Error adding new product:", error);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
