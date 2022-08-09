import IconReset from '../../../../icons/IconReset'
import Accordion from '../Accordion/Accordion'
import classes from './Sidebar.module.scss'

const Sidebar = ({data}) => {
	return (
		<div className={classes.Sidebar}>
			{data?.resetBtn && (
				<button className={classes.Reset}>{data.resetBtn}<IconReset/></button>
			)}
			<Accordion/>
			
		</div>
	)
}

export default Sidebar