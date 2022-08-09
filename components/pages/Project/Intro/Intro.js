import {mockData} from './mockData'
import { Button } from '../../../ui/Button/Button'
import NextImage from 'next/image'
import IconPdf from '../../../icons/IconPdf'
import Container from '../../../ui/Container/Container'
import BreadCrumbs from '../../../ui/BreadCrumbs/BreadCrumbs'
import classes from './Intro.module.scss'

const Intro = () => {
    return (
        <section className={classes.Section}>
            <Container>
                {mockData?.crumbs?.length > 0 && <BreadCrumbs list={mockData.crumbs}/>}
            </Container>

            {mockData?.img && (
                <div className={classes.Image}>
                    <NextImage
                        src={mockData.img}
                        alt=''
                        quality={95}
                        priority
                    />
                </div>
            )}

            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    <div className={classes.Row}>
                        {mockData?.title && (
                            <h3>{mockData.title}</h3>
                        )}
                        
                        {mockData?.text && (
                            <div className={classes.Text}>
                                {mockData.text.map((item, index) => (
                                    <p key={index}>{item.paragraph}</p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={classes.RowTwo}>
                        
                        {mockData?.counts && (
                            <div className={classes.Left}>
                                {mockData.counts.map((item, index) => (
                                    <div className={classes.Item} key={index}>
                                        <div className={classes.Number}>{item.number}</div>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className={classes.Right}>
                            <div className={classes.Block}>
                                <IconPdf />
                                <Button className={classes.Btn}>
                                    {mockData.btn}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Intro