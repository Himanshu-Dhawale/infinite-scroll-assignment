import React from "react";
import ProductList from "./components/ProductList";
import Loader from "./components/Loader";
import './App.css';
import useDataFetchingWithInfiniteScroll from "./useDataFetchingWIthInfiniteScroll";

const App = () => {
  const itemsPerPage = 10;
  const { data, error, isLoading } = useDataFetchingWithInfiniteScroll(
    'https://dummyjson.com/products',
    [],
    itemsPerPage
  );
  
  return (
    <div className="App">
        <div className="bg-gray-200 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Dynamic Product Display</h1>
      {isLoading ? (
        <Loader /> 
      ) : error ? (
        <div className="text-center text-red-500">Error: {error.message}</div>
      ) : (
        <ProductList products={data} />
      )}
    </div>

    </div>
  );
}

export default App;