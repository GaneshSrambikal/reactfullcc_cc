import React from "react";

export default function Coditional(props) {
  //   if (props.isLoading) {
  //     return null;
  //   } else {
  //     return (
  //       <div>
  //         <h1>Coditional rendering ...</h1>
  //       </div>
  //     );
  //   }
  //   return (props.isLoading)  ? (
  //     <div></div>
  //   ) : (
  //     <div>
  //       <h1>Coditional rendering ...</h1>
  //     </div>
  //   );
  return (
    <div>
      {props.isLoading ? (
        <h1>Loading..</h1>
      ) : (
        <h1>Coditional rendering is cool.</h1>
      )}
    </div>
  );
}
