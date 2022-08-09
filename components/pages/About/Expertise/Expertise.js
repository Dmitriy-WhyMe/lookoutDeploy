import Container from '../../../ui/Container/Container'
import { mockData } from '../mockData'
import NextImage from 'next/image'
import classes from './Expertise.module.scss'

const Expertise = () => {
    return (
        <section className={classes.Section}>
            <Container>
                <div className={classes.Content}>
                    <div className={classes.Image}>
                        <NextImage
                            src={mockData.expertiseSection.photo}
                            alt=''
                            quality={95}
                            priority
                        />
                    </div>

                    <div className={classes.Row}>
                        {mockData?.expertiseSection?.title && <h3>{mockData.expertiseSection.title}</h3>}

                        <div className={classes.Text}>
                            {mockData?.expertiseSection?.textBig && <p className={classes.TextBig}>
                                {mockData.expertiseSection.textBig}
                            </p>}

                            {mockData?.expertiseSection?.textSmall && <p className={classes.TextSmall}>
                                {mockData.expertiseSection.textSmall}
                            </p>}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Expertise