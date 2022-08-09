import classes from './Partners.module.scss'
import { mockData } from './mockData'
import ButtonLink from '../../../ui/ButtonLink/ButtonLink'
import IconLogo from '../../../icons/IconLogo'

function Partners() {
    const isShowBtnLogin = mockData?.btnLogin?.link && mockData?.btnLogin?.title
    const isShowBtnConnection = mockData?.btnConnection?.link && mockData?.btnConnection?.title
    const isShowControl = isShowBtnLogin && isShowBtnConnection

    return (
        <section className={classes.Section}>
            <div className={classes.Inner}>
                <div className={classes.Left}>
                    <div className={classes.CircleWrap}>
                        <div className={classes.Circle}>
                            <IconLogo />
                        </div>

                        <div className={classes.CircleDecorOne} />
                        <div className={classes.CircleDecorTwo} />
                        <div className={classes.CircleDecorThree} />
                    </div>
                </div>

                <div className={classes.Right}>
                    {mockData?.title && <div className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}
                    {mockData?.text && <div className={classes.Text} dangerouslySetInnerHTML={{ __html: mockData.text }} />}

                    {isShowControl && (
                        <div className={classes.Control}>
                            {isShowBtnLogin && (
                                <ButtonLink className={classes.BtnLogin} href={mockData.btnLogin.link} white outline>
                                    {mockData.btnLogin.title}
                                </ButtonLink>
                            )}

                            {isShowBtnConnection && (
                                <ButtonLink className={classes.BtnConnection} href={mockData?.btnConnection?.link} white>
                                    {mockData.btnConnection.title}
                                </ButtonLink>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Partners
