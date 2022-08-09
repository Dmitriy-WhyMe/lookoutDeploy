import Container from '../../../ui/Container/Container'
import NextImage from 'next/image'
import { Button } from '../../../ui/Button/Button'
import { mockData } from './mockData'
import classes from './AboutCountry.module.scss'

const AboutCountry = () => {
  return (
    <section className={classes.Section}>
        <Container>
            <div className={classes.Content}>
                {mockData?.photo && (
                    <div className={classes.Image}>
                        <NextImage
                            src={mockData.photo}
                            alt=''
                            quality={95}
                            priority
                        />
                    </div>
                )}
                <div className={classes.Text}>
                    <div className={classes.Title}>{mockData.title}</div>
                    <p>{mockData.text}</p>
                    <Button className={classes.Btn}>
                        {mockData.btn}
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutCountry