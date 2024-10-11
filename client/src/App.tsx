import { FunctionComponent, useEffect, useState} from "react";

export const App:FunctionComponent = ()=> {

  const [backendData, setBackendData] = useState();

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);

  return (
    <div>
      
    </div>
  );
};


