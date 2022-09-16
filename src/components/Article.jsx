const Row = () => {
  return (
    <tr>
      <td>
        <input type={"checkbox"} /> MD63592DR2
      </td>
      <td>08.04.2021</td>
      <td>Code 592M8DD1</td>
      <td className="status">Completed</td>
      <td>$2500.00</td>
    </tr>
  );
};

const Article = () => {
  return (
    <article>
      <table id="customers">
        <div className="tblheader">
          <h3 className="tbltitle">Recent Transactions</h3>
          <div className="export">Export</div>
        </div>
        <tr>
          <th className="tblheading">Invoice ID</th>
          <th className="tblheading">Date</th>
          <th className="tblheading">Description</th>
          <th className="tblheading">Status</th>
          <th className="tblheading">Income</th>
        </tr>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </table>
    </article>
  );
};

export default Article;
