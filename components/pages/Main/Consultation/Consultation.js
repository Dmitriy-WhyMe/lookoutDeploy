import classes from './Consultation.module.scss'
import Container from './../../../ui/Container/Container'
import { mockData } from './mockData'
import Form from './Form/Form'

function Consultation() {
    return (
        <section className={classes.Section}>
            <Container>
                <div className={classes.Inner}>
                    <div className={classes.Photo}>
                        <div className={classes.PhotoSquare}>
                            <div className={classes.PhotoSquareInner}>
                                {mockData?.photo && (
                                    <div className={classes.Piople} style={{ backgroundImage: `url(${mockData.photo.src})` }} />
                                )}
                            </div>

                            <div className={classes.PhotoSquareDecor} />
                        </div>
                    </div>

                    {mockData && <Form data={mockData} />}
                </div>
            </Container>
        </section>
    )
}

export default Consultation
