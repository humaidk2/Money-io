var OwesListEntry = (props) => (
  <tr>
    <td><img src={props.entry.icon} ></img></td>
    <td>{props.entry.title}</td>
    <td>12/8/16 - 7:13PM</td>
    <td>{props.entry.amount}</td>
    <td>Placeholder</td>
  </tr>
);

OwesListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.OwesListEntry = OwesListEntry;