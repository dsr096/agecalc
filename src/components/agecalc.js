import React, { useState } from 'react';
import "./agecalc.css";

function AgeCalc() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please enter a valid birth date.");
      return;
    }

    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    setAge({ years, months, days });
  };

  return (
    <div>
      <h1 className="header">Welcome to my age calculator!</h1>
      <br /><br /><br />
      <p className="takeinput">Enter your birth date here:</p>
      <br /><br />
      <input
        type="date"
        placeholder="Enter birth date"
        className="input"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br /><br />
      <button onClick={calculateAge} className="button">Calculate Age</button>
      <br /><br />
      {age && (
        <div className="result">
          <p>Your Age is:</p>
          <p>{age.years} years, {age.months} months, and {age.days} days</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalc;
