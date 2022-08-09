import { useState } from 'react'
import classes from './Form.module.scss'
import { Button } from '../../../../ui/Button/Button'
import PhoneMaskField from '../../../../ui/PhoneMaskField/PhoneMaskField'
import { TextArea } from '../../../../ui/TextArea/TextArea'
import { TextField } from '../../../../ui/TextField/TextField'
import Consent from '../../../../ui/Consent/Consent'

function Form({ data, siteTitle }) {
    const [isLoading, setIsLoading] = useState(false)
    const [successSubmit, setSuccessSubmit] = useState(false)
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
    const [formErrors, setFormErrors] = useState({ name: false, phone: false })

    const onChangeFormData = (nameField, valueField) => {
        setFormData({ ...formData, [nameField]: valueField })
    }

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

        bodyFormData.append('name', formData.name)
        bodyFormData.append('phone', formData.phone)
        bodyFormData.append('msg', formData.message)
        bodyFormData.append('siteUrl', window.location.href)
        bodyFormData.append('siteUrl', siteTitle)

        try {
            const { data } = await axios.post(`https://api.lookout.consulting/forms/consultation/`, bodyFormData)

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
        <div className={classes.Form}>
            {data.title && <div className={classes.Title} dangerouslySetInnerHTML={{ __html: data.title }} />}

            <TextField
                className={`${classes.TextField}`}
                name='name'
                label={data?.placeholderName || ''}
                value={formData.name}
                onChange={(e) => onChangeFormData('name', e.currentTarget.value)}
                errorText='Введите имя'
                isError={formErrors.name && !formData.name}
            />

            <PhoneMaskField
                className={`${classes.TextField}`}
                name='phone'
                label={data?.placeholderPhone || ''}
                value={formData.phone}
                onChange={(e) => onChangeFormData('phone', e.currentTarget.value)}
                errorText='Введите телефон'
                isError={formErrors.phone && !formData.phone}
                required
            />

            <TextArea
                className={`${classes.TextArea}`}
                name='message'
                label={data?.placeholderMessage || ''}
                value={formData.message}
                onChange={(e) => onChangeFormData('message', e.currentTarget.value)}
            />

            <div className={classes.Control}>
                <Consent className={classes.Consent} />
                <Button className={classes.BtnSend} onClick={handleSubmit}>
                    {data.BtnSend}
                    Отправить
                </Button>
            </div>
        </div>
    )
}

export default Form
