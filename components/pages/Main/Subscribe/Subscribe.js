import { useState } from 'react'
import classes from './Subscribe.module.scss'
import { mockData } from './mockData'
import { Button } from '../../../ui/Button/Button'
import IconDecorRight from './IconDecorRight'
import IconDecorLeft from './IconDecorLeft'

function Subscribe({ siteTitle }) {
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

    return (
        <section className={classes.Section}>
            <div className={classes.Inner}>
                {mockData?.title && <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />}

                <div className={classes.Field}>
                    <input
                        className={classes.Input}
                        type='text'
                        name="name"
                        value={email}
                        placeholder=' '
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <label className={classes.Label} htmlFor="name">{mockData.placeholder}</label>

                    <Button className={classes.BtnSubmit} onClick={handleSubmit}>
                        {mockData.btnSubmit}
                    </Button>
                </div>
            </div>

            <div className={classes.DecorLeft}>
                <IconDecorLeft />
            </div>

            <div className={classes.DecorRight}>
                <IconDecorRight />
            </div>
        </section>
    )
}

export default Subscribe
