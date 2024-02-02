import React, { useEffect, useState } from "react";
import Card from "./Components/card";
import Spinner from "./Components/Spinner";

const Api = (props) => {
  const [apidata, setApidata] = useState([]);
  const [loader, setLoader] = useState(false);

  const {url, type,value,setSearch} = props;
  let endPoint;
  if (type === "category") {
    endPoint = url;
  } else if (type === "country") {
    endPoint = url;
  } else {
    endPoint = url;
  }

  const getApi = async () => {
    setLoader(true)
    const response = await fetch(
      `${process.env.REACT_APP_HOST}/${endPoint}&apiKey=${process.env.REACT_APP_KEY}`
    );
    const receiveData = await response.json();
    console.log("receiveData",receiveData);
    if (receiveData.status === "ok") {
      const key= receiveData.sources?? receiveData.articles
      setApidata(key);
      setSearch(false)
       setLoader(false)
    }
  };

  useEffect(() => {
    getApi();
  }, [value]);

  return (
    <div className="container">
      <div className="row">
        { loader? <Spinner/>:apidata.map((e, index) => {
          return (
            <div className="col-md-4" key={index}>
              <Card
                title={e.name}
                description={e.description}
                url={e.url}
                flag={e.urlToImage}
                category={e.category}
                language={e.language}

              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
