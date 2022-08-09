import classes from './FormModal.module.scss'
import IconClose from '../../icons/IconClose'
import { Button } from './../Button/Button'

function FormModal({ title, onSubmit, onCloseModal, isLoading, children, isSucces }) {
    return (
        <div className={classes.Wrapper}>
            {!isSucces ? (
                <div className={classes.FormWrap}>
                    <p className={classes.FormTitle}>{title}</p>

                    <div className={classes.Form}>
                        {children}

                        <div className={classes.Row}>
                            <p className={classes.Policy}>
                            Нажимая на кнопку «Отправить», я даю свое<br />
                                <a href='/politika_konfidencialnosti.pdf' target='_blank' rel='noopener noreferrer'>
                                    {' '}
                                    согласие на обработку персональных данных
                                </a>
                            </p>
                            <div className={classes.BtnSubmit}>
                                <Button onClick={onSubmit} type='submit' disabled={isLoading} dark>
                                    Отправить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.Succes}>
                    <h3 className={classes.SuccesTitle}>
                        Спасибо <br /> за обращение
                    </h3>

                    <p className={classes.SuccesDesc}>Наши менеджеры свяжутся с&nbsp;вами в&nbsp;ближайшее время.</p>
                </div>
            )}

            <div className={classes.Close} onClick={onCloseModal}>
                <IconClose />
            </div>
        </div>
    )
}

export default FormModal
