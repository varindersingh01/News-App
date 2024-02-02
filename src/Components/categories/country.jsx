import React, { useState, useEffect } from "react";
import { Tabs, Tab, TabContainer } from "react-bootstrap";
import Card from "../card";
import Spinner from "../Spinner";

const Country = () => {
  const [value, setvalue] = useState("in");
  const [countryData, setCountrydata] = useState([]);
  const [loader, setLoader] = useState(false);

  const onSelect = (newValue) => {
    getCountryapi(newValue);
  };
  const getCountryapi = async (value) => {
    // console.log("country value",value);
    setLoader(true);
    const response = await fetch(
      `${process.env.REACT_APP_HOST}/top-headlines?country=${value}&apikey=${process.env.REACT_APP_KEY}`
    );
    const receiveData = await response.json();
    console.log("recieve data", receiveData);
    if (receiveData.status === "ok") {
      setCountrydata(receiveData.articles);
      setLoader(false);
    }
  };

  useEffect(() => {
    getCountryapi(value);
  }, []);
  return (
    <div className="container-fluid d-flex  position-relative mt-5">
      <Tabs
        defaultActiveKey={value}
        id="tabs"
        onSelect={onSelect}
        className="d-flex flex-column py-5 "
      >
        <Tab eventKey="in" title="India" className=" p-5 mt-2 ms-5">
          <TabContainer className="gh">
            <div className="container">
              <div className={`row ${loader?'position-relative':''}`}>
                {loader?<div className="col-md-4 position-absolute" style={{top:"200px",left:"550px"}}><Spinner/>
                </div>:countryData.map((e, index) => {
                  // console.log("e",e);
                  return (
                    <div className="col-md-4">
                      <Card
                        author={e.author}
                        content={e.content}
                        title={e.title}
                        flag={e.urlToImage}
                        url={e.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </TabContainer>
        </Tab>
        <Tab eventKey="jp" title="japan" className=" p-5 mt-2 ms-5">
          <TabContainer>
            <div className="container">
            <div className={`row ${loader?'position-relative':''}`}>
                {loader?<div className="col-md-4 position-absolute" style={{top:"200px",left:"550px"}}><Spinner/>
                </div>:countryData.map((e, index) => {
                  // console.log("e",e)
                  return (
                    <div className="col-md-4">
                      <Card
                        author={e.author}
                        content={e.content}
                        title={e.title}
                        flag={e.urlToImage}
                        url={e.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </TabContainer>
        </Tab>
       <Tab eventKey="ca" title="canada" className=" p-5 mt-2 ms-5">
          <TabContainer>
            <div className="container">
            <div className={`row ${loader?'position-relative':''}`}>
                {loader?<div className="col-md-4 position-absolute" style={{top:"200px",left:"550px"}}><Spinner/>
                </div>:countryData.map((e, index) => {
                  console.log("e", e);
                  return (
                    <div className="col-md-4">
                      <Card
                        author={e.author}
                        content={e.content}
                         title={e.title}
                        flag={e.urlToImage}
                        url={e.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </TabContainer>
        </Tab>
        <Tab eventKey="ng" title="nigeria" className=" p-5 mt-2 ms-5">
          <TabContainer>
            <div className="container">
            <div className={`row ${loader?'position-relative':''}`}>
                {loader?<div className="col-md-4 position-absolute" style={{top:"200px",left:"550px"}}><Spinner/>
                </div>:countryData.map((e, index) => {
                  return (
                    <div className="col-md-4">
                      <Card
                        author={e.author}
                        content={e.content}
                        title={e.title}
                        flag={e.urlToImage}
                        url={e.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </TabContainer>
        </Tab>
        <Tab eventKey="ru" title="russia" className=" p-5 mt-2 ms-5">
          <TabContainer>
            <div className="container">
            <div className={`row ${loader?'position-relative':''}`}>
                {loader?<div className="col-md-4 position-absolute" style={{top:"200px",left:"550px"}}><Spinner/>
                </div>:countryData.map((e, index) => {
                  return (
                    <div className="col-md-4">
                      <Card
                        author={e.author}
                        content={e.content}
                        title={e.title}
                        flag={e.urlToImage}
                        url={e.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </TabContainer>
        </Tab>
        <Tab eventKey="rs" title="serbia" className=" p-5 mt-2 ms-5">
          <TabContainer>
            <div className="container">
            <div className={`row ${loader?'position-relative':''}`}>
                {loader?<div className="col-md-4 position-absolute" style={{top:"200px",left:"550px"}}><Spinner/>
                </div>:countryData.map((e, index) => {
                  return (
                    <div className="col-md-4">
                      <Card
                        author={e.author}
                        content={e.content}
                        title={e.title}
                        flag={e.urlToImage}
                        url={e.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </TabContainer>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Country;
