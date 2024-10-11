import { FunctionComponent, useEffect, useState} from "react";
import { IUsers } from "./types/user.types"
export const App:FunctionComponent = ()=> {

  const [backendData, setBackendData] = useState<IUsers>();

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
      {
        backendData && backendData.users.length ? backendData.users.map((user, i) => 
          <p key={i}>{user}</p>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
};


