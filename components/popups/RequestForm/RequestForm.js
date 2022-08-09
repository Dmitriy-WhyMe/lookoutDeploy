import React, { useState } from 'react'
import classes from './RequestForm.module.scss'
import { useContext } from 'react'
import { FormContext } from '../../../context/index'
import axios from 'axios'
import { TextField } from '../../ui/TextField/TextField'
import FormModal from './../../ui/FormModal/FormModal'
import { useRouter } from 'next/router'
import { TextArea } from '../../ui/TextArea/TextArea'

function RequestForm({ siteTitle }) {
    const router = useRouter()
    const { onCloseModal } = useContext(FormContext)

    const [isLoading, setIsLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({ name: false, phone: false })
    const [successSubmit, setSuccessSubmit] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        email: ''
    })

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

        bodyFormData.append('send', 'Y')
        bodyFormData.append('name', formData.name)
        bodyFormData.append('phone', formData.phone)
        bodyFormData.append('msg', formData.message)
        bodyFormData.append('siteUrl', window.location.href)
        bodyFormData.append('siteUrl', siteTitle)

        try {
            const { data } = await axios.post(`https://api.lookout.consulting/forms/feedback/`, bodyFormData)

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
        <FormModal
            title='Отправка запроса'
            onSubmit={handleSubmit}
            onCloseModal={onCloseModal}
            isLoading={isLoading}
            isSucces={successSubmit}
        >
            <TextField
                className={classes.TextField}
                name='name'
                label='Ваше имя'
                value={formData.name}
                onChange={(e) => onChangeFormData('name', e.currentTarget.value)}
                errorText='введите имя'
                isError={formErrors.name && !formData.name}
            />

            <TextField
                className={classes.TextField}
                name='phone'
                label='Телефон'
                value={formData.phone}
                onChange={(e) => onChangeFormData('phone', e.currentTarget.value)}
                errorText='Введите номер телефона'
                isError={formErrors.phone && !formData.phone}
                required
            />

            <TextField
                className={classes.TextField}
                name='email'
                label='email'
                value={formData.email}
                onChange={(e) => onChangeFormData('email', e.currentTarget.value)}
            />

            <TextArea
                className={classes.TextArea}
                name='message'
                label={'Сообщение'}
                value={formData.message}
                onChange={(e) => onChangeFormData('message', e.currentTarget.value)}
            />

            <p className={classes.Info}>
                Интересует более подробная информация <br /> по планировкам в ЖК CHAMPINE
            </p>

            <p className={classes.Policy}>
                Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь <br /> с
                <a href='/politika_konfidencialnosti.pdf' target='_blank' rel='noopener noreferrer'>
                    {' '}
                    политикой обработки персональных данных
                </a>
            </p>
        </FormModal>
    )
}

export default RequestForm
