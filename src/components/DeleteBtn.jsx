
import PropTypes from 'prop-types'

function DeleteBtn(props) {
  return (
    <>
      <button onClick={() => props.onSelect(props.id)}>Delete</button>
    </>
  )
}

DeleteBtn.propTypes = {
  name : PropTypes.string,
  onSelect : PropTypes.func,
  id : PropTypes.number
}

export default DeleteBtn
