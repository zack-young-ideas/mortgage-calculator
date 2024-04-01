import { useState } from 'react';
import Form from './Form';
import Mortgage from './utils';
import Table from './Table';

function App() {
  const [rows, setRows] = useState([]);
  
  function submitData(price, down, rate, amortization, term) {
    // Initialize a new Mortgage object with the input data
    // and use it to populate the rows of the table
    const mortgage = new Mortgage(price, down, rate, amortization, term);
    setRows(mortgage.getMonthlyAmounts());
  }

  return (
    <div id="container" className="container-fluid mt-3">
      <Form submitData={submitData} />
      <Table rows={rows} />
    </div>
  );
}

export default App;
