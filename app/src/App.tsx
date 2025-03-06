import React, { useCallback, useState } from 'react';
import { CodeSnippet, Loading } from './components/index';
import { fetchAPI } from './lib/utils';
import type { Payload, Response } from './lib/types';

import './style.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<null | Response>(null);
  const [error, setError] = useState<null | string>(null);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetchAPI<Payload, Response>({
        sku: 'P001NN',
      });

      console.log('RESPONSE', response);

      if (!response) {
        throw new Error(response?.error || 'Something went wrong');
      }

      // do something with the response
      const { data } = response;
      // example restlet returns an array
      const temp = Array.isArray(data) ? data[0] : data;
      console.log('TEMP', temp);
      setData(temp);
      setIsLoading(false);
    } catch (err: unknown) {
      console.error(err);
      setIsLoading(false);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-sm">
          <h3 className="font-bold uppercase">Fetch Data</h3>
          <div className="mb-5">
            <button
              type="button"
              onClick={getData}
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto"
            >
              Search
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {data && <CodeSnippet snippet={data} />}
        </div>
      )}
    </>
  );
}

export default App;
