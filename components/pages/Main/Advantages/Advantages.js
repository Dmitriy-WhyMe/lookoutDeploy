import classes from './Advantages.module.scss'
import Container from './../../../ui/Container/Container'
import { mockData } from './mockData'

function Advantages() {
    return (
        <section className={classes.Section}>
            <Container>
                <div className={classes.Inner}>
                    {mockData?.title && <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}

                    <div className={classes.Items}>
                        {mockData.items.map((item, index) => (
                            <div className={classes.Item} key={index}>
                                {item?.icon && <div className={classes.Itemicon} style={{ backgroundImage: `url(${item.icon.src})` }} />}

                                {item?.title && <div className={classes.ItemTitle} dangerouslySetInnerHTML={{ __html: item.title }} />}
                                {item?.text && <div className={classes.ItemText} dangerouslySetInnerHTML={{ __html: item.text }} />}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Advantages
