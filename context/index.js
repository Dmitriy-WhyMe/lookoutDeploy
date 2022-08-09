import { createContext, useState } from 'react'

export const FormContext = createContext()

function FormProvider({ children }) {
    // TYPES FORM: 'call' | 'request' | 'menu'
    const [showModal, setShowModal] = useState(null)

    const onOpenModal = (nameForm) => {
        const body = document.querySelector('body')
        body.classList.add('no-scroll')

        setShowModal(nameForm)
    }

    const onCloseModal = () => {
        const body = document.querySelector('body')
        body.classList.remove('no-scroll')

        setShowModal(null)
    }

    const value = {
        showModal,
        onOpenModal,
        onCloseModal
    }

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export { FormProvider }
