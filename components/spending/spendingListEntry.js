const SpendingListEntry = (props) => (
  <tr>
    <td><img height='40' src={pickCategories(props.entry.category)}></img></td>
    <td>{props.entry.title}</td>
    <td>{props.entry.amount}</td>
    <td>{moment(props.entry.created_at).fromNow()}</td>
  </tr>
)

export default SpendingListEntry