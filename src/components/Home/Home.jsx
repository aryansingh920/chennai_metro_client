import { useState } from "react";
import React from "react";
import Card from "../Card/Card";
// import Card1 from '../Card/Card1'
import Card2 from "../Card/Card2";

const Home = props => {
  const [myBool, setmyBool] = useState(true);

  // function toggleBool() {
  //     setmyBool(!myBool);
  // }

  return (
    <div>
      <div id="">
        <div className="container-fluid">
          <div className="">
            <div className="">
              <Card2 />
            </div>
            {/* <div className="col-sm-6 mt-5">
                            {myBool ? <Card2 /> : <Card/>}
                            <Card2 />
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
