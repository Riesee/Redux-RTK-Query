import React from "react";
import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(10);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  if (!data) return <h1>No data</h1>;

  return <div>
    <h1>{data?.brand}</h1>
    <h1>{data?.category}</h1>
    <h1>{data?.description}</h1>
  </div>;
};

export default SpecificProduct;
