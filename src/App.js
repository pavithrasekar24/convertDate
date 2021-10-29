import React from 'react';
import './style.css';
import { useState } from 'react';
export default function App() {
  var date = '1st May 2020';
  let handleClick = () => {
    let splitDate = date.split(' ');
    let day = splitDate[0].replace(/\D+/g, '');
    let month = splitDate[1];
    let year = splitDate[2];
    let convertDate = [year, month, day].join('-');
    let getNumberMonth = new Date(convertDate).getMonth() + 1;
    console.log(typeof getNumberMonth);
    let formattedDate = [
      year,
      getNumberMonth.toString().length < 2
        ? '0' + getNumberMonth
        : getNumberMonth,
      day.length < 2 ? '0' + day : day,
    ].join('-');
    console.log(formattedDate);
    alert(formattedDate);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p> {date}</p>
      <div>
        <button onClick={() => handleClick()}>Convert</button>
      </div>
    </div>
  );
}
