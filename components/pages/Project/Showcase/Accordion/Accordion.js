import Collapsible from 'react-collapsible'
import RangeSlider from '../../../../ui/RangeSlider/RangeSlider'
import classes from './Accordion.module.scss'

const Accordion = () => {
	return (
		<div className={classes.Accordion}>
            <Collapsible
                triggerTagName="div"
                transitionTime={500}
                transitionCloseTime={500}
                easing="ease"
                className={classes.Item}
                openedClassName={classes.Item}
                triggerClassName={classes.TitleWrap}
                triggerOpenedClassName={classes.TitleWrap}
                contentOuterClassName={classes.TextWrap}
                contentInnerClassName={classes.Text}
                trigger={(
                    <>
                        <div className={classes.TitleItem}>Цена</div>
                        <div
                            className={classes.Arrow}
                        />
                    </>
                )}
            >
                <div className={classes.SubContainer}>
                    <RangeSlider />
                </div>
            </Collapsible>

            <Collapsible
                triggerTagName="div"
                transitionTime={500}
                transitionCloseTime={500}
                easing="ease"
                className={classes.Item}
                openedClassName={classes.Item}
                triggerClassName={classes.TitleWrap}
                triggerOpenedClassName={classes.TitleWrap}
                contentOuterClassName={classes.TextWrap}
                contentInnerClassName={classes.Text}
                trigger={(
                    <>
                        <div className={classes.TitleItem}>Общая площадь, м2</div>
                        <div
                            className={classes.Arrow}
                        />
                    </>
                )}
            >
                <div className={classes.SubContainer}>
                    <RangeSlider />
                </div>
            </Collapsible>

            <Collapsible
                triggerTagName="div"
                transitionTime={500}
                transitionCloseTime={500}
                easing="ease"
                className={classes.Item}
                openedClassName={classes.Item}
                triggerClassName={classes.TitleWrap}
                triggerOpenedClassName={classes.TitleWrap}
                contentOuterClassName={classes.TextWrap}
                contentInnerClassName={classes.Text}
                trigger={(
                    <>
                        <div className={classes.TitleItem}>Жилая площадь, м2</div>
                        <div
                            className={classes.Arrow}
                        />
                    </>
                )}
            >
                <div className={classes.SubContainer}>
                    <RangeSlider />
                </div>
            </Collapsible>

            <Collapsible
                triggerTagName="div"
                transitionTime={500}
                transitionCloseTime={500}
                easing="ease"
                className={classes.Item}
                openedClassName={classes.Item}
                triggerClassName={classes.TitleWrap}
                triggerOpenedClassName={classes.TitleWrap}
                contentOuterClassName={classes.TextWrap}
                contentInnerClassName={classes.Text}
                trigger={(
                    <>
                        <div className={classes.TitleItem}>Участок, м2</div>
                        <div
                            className={classes.Arrow}
                        />
                    </>
                )}
            >
                <div className={classes.SubContainer}>
                    <RangeSlider />
                </div>
            </Collapsible>

            <Collapsible
                triggerTagName="div"
                transitionTime={500}
                transitionCloseTime={500}
                easing="ease"
                className={classes.Item}
                openedClassName={classes.Item}
                triggerClassName={classes.TitleWrap}
                triggerOpenedClassName={classes.TitleWrap}
                contentOuterClassName={classes.TextWrap}
                contentInnerClassName={classes.Text}
                trigger={(
                    <>
                        <div className={classes.TitleItem}>Проекты</div>
                        <div
                            className={classes.Arrow}
                        />
                    </>
                )}
            >
                <div className={classes.SubContainer}>
                    <div className={classes.Collumn}>
                        <div className={classes.Row}>
                            <input type="checkbox" id="customCheckOne" required/>
                            <label htmlFor="customCheckOne">Lotus Homes Catalkoy</label><br/>
                        </div>
                        <div className={classes.Row}>
                            <input type="checkbox" id="customCheckTwo" required/>
                            <label htmlFor="customCheckTwo">Alagadi Villalas </label><br/>
                        </div>
                    </div>
                </div>
            </Collapsible>

            <Collapsible
                triggerTagName="div"
                transitionTime={500}
                transitionCloseTime={500}
                easing="ease"
                className={classes.Item}
                openedClassName={classes.Item}
                triggerClassName={classes.TitleWrap}
                triggerOpenedClassName={classes.TitleWrap}
                contentOuterClassName={classes.TextWrap}
                contentInnerClassName={classes.Text}
                trigger={(
                    <>
                        <div className={classes.TitleItem}>Тип недвижимости</div>
                        <div
                            className={classes.Arrow}
                        />
                    </>
                )}
            >
                <div className={classes.SubContainer}>
                    <div className={classes.Collumn}>
                        <div className={classes.Row}>
                            <input type="checkbox" id="customCheckThree" required/>
                            <label htmlFor="customCheckThree">Вилла</label><br/>
                        </div>
                    </div>
                </div>
            </Collapsible>
		</div>
	)
}

export default Accordion