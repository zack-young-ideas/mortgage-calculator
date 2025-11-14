function TableBody(props) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const rows = props.rows.map((row, index) => {
    let year;
    if ((index % 12) === 0) {
      year = String((index / 12) + 1);
    } else {
      year = '';
    }
    let month = months[index % 12];
    // Each number is comma-separated and preceeded by a dollar sign
    let monthlyPayment = row[0].toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let interest = row[1].toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let principal = row[2].toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let balance = row[3].toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
      <tr key={index}>
        <td>{year}</td>
        <td>{month}</td>
        <td>${monthlyPayment}</td>
        <td>${interest}</td>
        <td>${principal}</td>
        <td>${balance}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <table className="table">
      <thead>
        <th scope="col">Year</th>
        <th scope="col">Month</th>
        <th scope="col">Payment</th>
        <th scope="col">Interest</th>
        <th scope="col">Principal</th>
        <th scope="col">Balance</th>
      </thead>
      <TableBody rows={props.rows} />
    </table>
  );
}

export default Table;
