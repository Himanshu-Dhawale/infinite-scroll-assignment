import { useState, useEffect } from 'react';


function useDataFetchingWithInfiniteScroll(url, initialData = [], itemsPerPage) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      try {
        const response = await fetch(`${url}?_page=${page}&_limit=${itemsPerPage}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiResponse = await response.json();
        const newData = apiResponse.products || []; 

        setData((prevData) => [...prevData, ...newData]);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url, page, itemsPerPage]);

  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const bodyHeight = document.body.scrollHeight;

      if (windowHeight + scrollY >= bodyHeight - 200) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { data, error };
}

export default useDataFetchingWithInfiniteScroll;
