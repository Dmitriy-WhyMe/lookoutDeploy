import Bottom from './Bottom/Bottom'
import classes from './Header.module.scss'
import Top from './Top/Top'
import { mockData } from './mockData'

function Header({ data }) {
    return (
        <header className={classes.Header}>
            <Top data={mockData} />
            <div className={classes.Line} />
            <Bottom data={mockData} />
        </header>
    )
}

export default Header
