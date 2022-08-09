import { useState } from 'react'
import classes from './Footer.module.scss'
import Container from '../Container/Container'
import { Button } from '../Button/Button'
import Link from 'next/link'
import { mockData } from './mockData'
import IconLogo from '../../icons/IconLogo'
import IconLogoAuthor from './IconLogoAuthor'
import Social from '../Social/Social'

function Footer() {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        return

        if (!formData.name) {
            setFormErrors((prev) => ({ ...prev, name: true }))
        }

        if (!formData.phone) {
            return setFormErrors((prev) => ({ ...prev, phone: true }))
        }

        setIsLoading(true)

        const bodyFormData = new FormData()

        bodyFormData.append('email', email)
        bodyFormData.append('siteUrl', window.location.href)
        bodyFormData.append('siteUrl', siteTitle)

        try {
            const { data } = await axios.post(`https://api.lookout.consulting/forms/subscription/`, bodyFormData)

            setIsLoading(false)

            if (data.status === 'success') {
                setSuccessSubmit(true)
                setFormErrors({ name: false, phone: false })
                setFormData({ name: '', phone: '', message: '' })
            }
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    const isShowSocialJSX = mockData?.social?.linkVk || mockData?.social?.tglink || mockData?.social?.linkZen

    return (
        <footer className={classes.Footer}>
            <Container>
                <div className={classes.Inner}>
                    <div className={classes.Row}>
                        <div className={classes.Col}>
                            <IconLogo className={classes.Logo} />

                            <p className={classes.Copy}>© 2022 Lookout</p>
                        </div>

                        {mockData?.menu?.length > 0 && (
                            <div className={`${classes.Col} ${classes.Center}`}>
                                <div className={classes.Menu}>
                                    <div className={classes.MenuCol}>
                                        {mockData.menu.slice(0, 3).map((item, index) => (
                                            <Link href={item.link} key={index}>
                                                <a className={classes.MenuLink}>{item.title}</a>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className={classes.MenuCol}>
                                        {mockData.menu.slice(3, 6).map((item, index) => (
                                            <Link href={item.link} key={index}>
                                                <a className={classes.MenuLink}>{item.title}</a>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className={classes.MenuCol}>
                                        {mockData.menu.slice(6, 9).map((item, index) => (
                                            <Link href={item.link} key={index}>
                                                <a className={classes.MenuLink}>{item.title}</a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {(mockData?.phone || mockData?.btnCall) && (
                            <div className={classes.Col}>
                                <a className={classes.Phone} href={`tel:${mockData.phone}`}>
                                    {mockData.phone}
                                </a>

                                {mockData?.btnCall && (
                                    <Button className={classes.BtnCall} outline>
                                        {mockData.btnCall}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    <div className={classes.Row}>
                        <div className={classes.Col}>
                            <Link href="https://d-c.agency">
                                <a target="_blank">
                                    <div className={classes.Author}>
                                        <p>Разработка сайта</p>
                                    <IconLogoAuthor />
                                    </div>
                                </a>
                            </Link>
                            
                        </div>

                        <div className={`${classes.Col} ${classes.Center}`}>
                            <div className={classes.Subscribe}>
                                {mockData?.subscribe?.title && (
                                    <div
                                        className={classes.SubscribeTitle}
                                        dangerouslySetInnerHTML={{ __html: mockData.subscribe.title }}
                                    />
                                )}

                                <div className={classes.SubscribeField}>
                                    <input
                                        className={classes.SubscribeInput}
                                        type='text'
                                        value={email}
                                        name="name"
                                        placeholder=' '
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                    />
                                    <label className={classes.Label} htmlFor="name">{mockData.subscribe.placeholder}</label>

                                    <Button className={classes.SubscribeBtnSubmit}>{mockData.subscribe.btnSend}</Button>
                                </div>
                            </div>
                        </div>

                        <div className={classes.Col}>
                            {isShowSocialJSX && (
                                <div className={classes.Social}>
                                    {mockData?.social?.title && <p className={classes.SocialTitle}>{mockData.social.title}</p>}

                                    <Social
                                        className={classes.SocialWrap}
                                        vkLink={mockData?.social?.linkVk}
                                        tglink={mockData?.social?.linkTg}
                                        zenLink={mockData?.social?.linkZen}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
