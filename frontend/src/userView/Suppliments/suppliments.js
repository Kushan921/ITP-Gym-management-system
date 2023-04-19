import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Suppliments() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8020/item/')
      .then((response) => setStore(response.data))
      .catch((error) => console.error(error));
  }, []);

  const rows = [];
  for (let i = 0; i < store.length; i += 3) {
    rows.push(store.slice(i, i + 3));
  }

  return (
    <div>
        <Header/>
        <div>
            <p style={{fontSize:"40px",textAlign:"center"}}>Suppliments</p>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-col md:flex-row md:justify-between ">
                {row.map((item, itemIndex) => (
                    <div key={itemIndex} className="w-full md:w-1/3 px-4 py-5 bg-white rounded-lg shadow md:mb-0 mb-4 m-5" >
                    <div className="bg-black w-full h-5">
                        <img src={item.image} alt="image" style={{width:"150px",height:"100px"}}/>
                    </div>0o 
                    <div className="text-2xl font-semibold text-center text-gray-500 truncate">{item.item_name}</div>
                    <div className="mt-1 text-sm font-medium justify text-gray-900">{item.price}</div>
                    </div>
                ))}
                </div>
            ))}
        </div>
        <Footer/>
    </div>
   
  );
}

export default Suppliments;
