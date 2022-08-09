import { useState, useRef } from 'react'
import classes from './Contacts.module.scss'
import Container from './../../../ui/Container/Container'
import NextImage from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import axios from 'axios'
import { mockData } from './mockData'
import Form from './Form/Form'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { getPhotoSize } from '../../../../utils/getPhotoSize'

gsap.registerPlugin(ScrollTrigger)

function Contacts() {
    const [isLoading, setIsLoading] = useState(false)
    const [successSubmit, setSuccessSubmit] = useState(false)
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
    const [timeStart, setTimeStart] = useState('10:00')
    const [timeEnd, setTimeEnd] = useState('20:00')

    const { width } = useWindowSize()
    const sizePhoto = getPhotoSize(width)
    const photo = +sizePhoto <= 768 ? mockData?.photoHorizontal : mockData?.photoVertical

    const isShowContentJSX = mockData?.phone || mockData?.email || mockData?.address

    const innerRef = useRef(null)

    const [formErrors, setFormErrors] = useState({ name: false, phone: false })

    let timer

    const onChangeFormData = (nameField, valueField) => {
        setFormData({ ...formData, [nameField]: valueField })
    }

    const sendMessage = () => {
        timer = setTimeout(() => {
            setSuccessSubmit(false)
        }, 7000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name) {
            setFormErrors((prev) => ({ ...prev, name: true }))
        }

        if (!formData.phone) {
            return setFormErrors((prev) => ({ ...prev, phone: true }))
        }

        return

        setIsLoading(true)

        const bodyFormData = new FormData()

        bodyFormData.append('send', 'Y')
        bodyFormData.append('name', formData.name)
        bodyFormData.append('phone', formData.phone)
        bodyFormData.append('timeFrom', timeStart)
        bodyFormData.append('timeTo', timeEnd)
        bodyFormData.append('msg', formData.message)

        try {
            const { data } = await axios.post(`https://api.risan-laketown.ru/api/post/form.php`, bodyFormData)

            setIsLoading(false)

            if (data.status === 'success') {
                setSuccessSubmit(true)
                setFormErrors({ name: false, phone: false })
                sendMessage()

                setFormData({ name: '', phone: '', message: '' })
                setTimeStart('10:00')
                setTimeEnd('21:00')
            }
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.Section}>
            <Container>
                <div className={classes.Inner}>
                    {(isShowContentJSX || mockData?.title) && (
                        <div className={classes.Row}>
                            {mockData?.title && (
                                <h2 className={classes.Title} dangerouslySetInnerHTML={{ __html: mockData.title }} />
                            )}

                            {isShowContentJSX && (
                                <div className={classes.Content}>
                                    {mockData?.phone && (
                                        <a className={classes.Phone} href={`tel:${mockData.phone}`}>
                                            {mockData.phone}
                                        </a>
                                    )}

                                    {mockData?.email && (
                                        <a className={classes.Email} href={`mailto:${mockData.email}`}>
                                            {mockData.email}
                                        </a>
                                    )}

                                    {mockData?.address && (
                                        <div className={classes.Addres} dangerouslySetInnerHTML={{ __html: mockData.address }} />
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <div className={classes.Row}>
                        {photo && (
                            <div className={classes.ImageBlock}>
                                <div className={classes.Image}>
                                    <NextImage src={photo} layout='fill' objectFit='cover' alt='' quality={95} />
                                </div>

                                <div className={classes.ItemImageCopy} />
                            </div>
                        )}

                        <Form data={mockData} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contacts
