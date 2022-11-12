import { useState, useEffect } from "react";
export const useDataSource = getResourceFun => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFun();
      setResource(result);
    })();
  }, [getResourceFun]);
  return resource;
};
