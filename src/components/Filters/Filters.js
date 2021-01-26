import Button from "../Button/Button"

function Filters(props) {
  return (
    <div className="filters btn-group stack-exception">
      <Button class={`btn--filter ${props.filter === null && 'btn--active'}`}
              onClick={() => props.setFilter(null)}
              text="All"/>
      <Button class={`btn--filter ${props.filter === 'active' && 'btn--active'}`}
              onClick={() => props.setFilter('active')}
              text="Active"/>
      <Button class={`btn--filter ${props.filter === 'completed' && 'btn--active'}`}
              onClick={() => props.setFilter('completed')}
              text="Completed"/>
    </div>
  );
}

export default Filters;
