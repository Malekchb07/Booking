import React from "react";
import "./property.css";
import { useFetch } from "../../hooks/useFetch.js";

const Property = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://images.unsplash.com/photo-1606046604972-77cc76aee944?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1650967123062-3de70b7bf331?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1650967123469-d6e3456d9b7f?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="pList">
    {loading ? (
      "Loading"
    ) : (
      <>
        {data &&
          data.map((item, i) => (
            <div className="pListItem" key={i}>
              <img src={images[i]} alt="" className="pListImg" />
              <div className="pListTitles">
                {item.type && <h1>{item.type}</h1>}
                {item.count && <h2>{item.count} {item.type}</h2>}
              </div>
            </div>
          ))}
      </>
    )}
  </div>
);
};
export default Property;
