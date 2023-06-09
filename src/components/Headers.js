import PropTypes from 'prop-types'
import Button from './Buttons'

const Header =({ title, onAdd, showAdd })=> {
    return(
        <header className='header'>
            <h1>{ title }</h1>
            <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} color={showAdd ? 'red' : 'green'}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle ={
//     color:'red', 
//     backgroundColor:'black' 
// }

export default Header