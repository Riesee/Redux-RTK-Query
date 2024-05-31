import { useUpdateProductMutation } from "../app/service/dummyData";
import { PropTypes } from 'prop-types';



const UpdateProduct = ({ productId }) => {
  const [updatedProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {isError}</h1>;

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title Updated 🤝",
      };

      await updatedProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};


UpdateProduct.propTypes = {
    productId: PropTypes.string.isRequired
  }

export default UpdateProduct;
