import { useDeleteProductMutation } from "../app/service/dummyData";
import { PropTypes } from "prop-types";

const DeleteProduct = ({ deletedProductId }) => {
  const [deletedProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  const deleteProductHandler = async () => {
    try {
      await deletedProduct(
        deletedProductId,
      );
    } catch (error) {
      console.error("Error delete product:", error);
    }
  };

  return (
    <div>
      <h1>{data?.id ? `${data?.id} Succesfully Deleted` : ""}</h1>
      <h1 style={{color:"red"}}>{data?.title ? `${data?.title} Succesfully Deleted` : ""}</h1>
      <h1>{data?.description}</h1>

      <button onClick={deleteProductHandler} disabled={isLoading}>
        Delete 4. Product
      </button>
    </div>
  );
};

DeleteProduct.propTypes = {
  deletedProductId: PropTypes.string.isRequired,
};

export default DeleteProduct;
