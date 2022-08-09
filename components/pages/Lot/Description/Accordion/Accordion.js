import {useState} from 'react'
import Collapsible from 'react-collapsible'
import classes from './Accordion.module.scss'

const Accordion = ({data}) => {
	const [items, setItems] = useState(data.items)

	const changeSlide = (id) => {
        const itemsCopy = items.map(item => {
            item.active = (item.id === id ? !item.active : false)
            return item
        })

        setItems(itemsCopy)
    }

	return (
		<div className={classes.Accordion}>
			<h2>{data.title}</h2>

			{items.map((item, index) => (
				<Collapsible
					key={index}
					open={item.active}
					triggerTagName="div"
					transitionTime={500}
					transitionCloseTime={500}
					easing="ease"
					accordionPosition={index + 1}
					handleTriggerClick={() => changeSlide(item.id)}
					className={classes.Item}
					openedClassName={classes.Item}
					triggerClassName={classes.TitleWrap}
					triggerOpenedClassName={classes.TitleWrap}
					contentOuterClassName={classes.TextWrap}
					contentInnerClassName={classes.Text}
					trigger={(
						<>
							{item.title ? (
								<div className={classes.TitleItem}>{item.title}</div>
							) : null}

							<div
								className={classes.Arrow}
								data-active={item.active ? "Y" : null}
							/>
						</>
					)}
				>
					<div className={classes.SubContainer}>
						{item.text ? (
							<div
								className={classes.SubContainerText}
								dangerouslySetInnerHTML={{__html: item.text}}
							/>
						) : null}
					</div>
				</Collapsible>
			))}
		</div>
	)
}

export default Accordion