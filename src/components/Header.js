import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, toggleAddTask, showTaskForm}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showTaskForm ? "red" : "green"} text={showTaskForm ? "Hide": "Add"} onClick={toggleAddTask}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
