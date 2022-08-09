import RangeSlider from '../../../../ui/RangeSlider/RangeSlider'
import classes from './RangeSliders.module.scss'

const RangeSliders = ({ data }) => {
  return (
    <>
        {data?.length > 0 && (
            <div className={classes.RangeSliders}>
                {data.map((item) => (
                    <div className={classes.Item} key={item.id}>
                      <RangeSlider title={item.title}/>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}

export default RangeSliders