import React, { useState } from 'react'
import classes from './CallForm.module.scss'
import { useContext } from 'react'
import { FormContext } from '../../../context/index'
import axios from 'axios'
import { TextField } from '../../ui/TextField/TextField'
import FormModal from './../../ui/FormModal/FormModal'
import { useRouter } from 'next/router'
import { TextArea } from '../../ui/TextArea/TextArea'
import TimeField from '../../ui/TimeField/TimeField'

function CallForm({ siteTitle }) {
    const router = useRouter()
    const { onCloseModal } = useContext(FormContext)

    const [isLoading, setIsLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({ name: false, phone: false })
    const [successSubmit, setSuccessSubmit] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        timeStart: '10:00',
        timeEnd: '20:00'
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
        bodyFormData.append('timeFrom', formData.timeStart)
        bodyFormData.append('timeTo', formData.timeEnd)
        bodyFormData.append('siteUrl', window.location.href)
        bodyFormData.append('siteUrl', siteTitle)

        try {
            const { data } = await axios.post(`https://api.lookout.consulting/forms/callback/`, bodyFormData)

            setIsLoading(false)

            if (data.status === 'success') {
                setSuccessSubmit(true)
                setFormErrors({ name: false, phone: false })
                setFormData({ name: '', phone: '', message: '', timeStart: '10:00', timeEnd: '20:00' })
            }
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    return (
        <FormModal
            title='Заказать звонок'
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

            <TimeField
                timeStart={formData.timeStart}
                timeEnd={formData.timeEnd}
                onChangeStart={(_, time) => onChangeFormData('timeStart', time)}
                onChangeEnd={(_, time) => onChangeFormData('timeEnd', time)}
            />

            <TextArea
                className={classes.TextArea}
                name='message'
                label={'Коментарий к заявке'}
                value={formData.message}
                onChange={(e) => onChangeFormData('message', e.currentTarget.value)}
            />
        </FormModal>
    )
}

export default CallForm
