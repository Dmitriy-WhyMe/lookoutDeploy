import NextImage from 'next/image'
import { mockData } from './mockData'
import IconDecorPickingOne from '../../icons/IconDecorPickingOne'
import IconDecorPickingTwo from '../../icons/IconDecorPickingTwo'
import classes from './Picking.module.scss'

const Picking = () => {
  return (
    <section className={classes.Section}>
        <div className={classes.Content}>
            {mockData?.photo && (
                <div className={classes.Image}>
                    <NextImage
                        src={mockData.photo}
                        alt=''
                        objectFit='contain'
                        quality={95}
                        priority
                    />
                </div>
            )}
            <div className={classes.DecorOne}><IconDecorPickingOne/></div>
            <div className={classes.DecorTwo}><IconDecorPickingTwo/></div>
            <div className={classes.Text}>
                <div className={classes.Title}>{mockData.title}</div>
                <p>{mockData.text}</p>
                <button className={classes.Btn}>
                    {mockData.btn}
                </button>
            </div>
        </div>
    </section>
  )
}

export default Picking