import { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import classes from './Layout.module.scss'
import Head from 'next/head'
import { FormContext } from './../../../context/index'
import CallForm from './../../popups/CallForm/CallForm'
import Header from '../../ui/Header/Header'
import RequestForm from '../../popups/RequestForm/RequestForm'

const Layout = ({ title, keywords, description, children }) => {
    const { showModal } = useContext(FormContext)

    return (
        <>
            <Head>
                <title>{title}</title>
                {keywords ? <meta name='keywords' content={keywords} /> : null}
                {description ? <meta name='description' content={description} /> : null}
            </Head>

            <Header />

            <div className={classes.Layout}>{children}</div>

            <CSSTransition in={showModal === 'call'} timeout={200} mountOnEnter={true} unmountOnExit={true}>
                {(state) => <CallForm className={state} />}
            </CSSTransition>

            <CSSTransition in={showModal === 'request'} timeout={200} mountOnEnter={true} unmountOnExit={true}>
                {(state) => <RequestForm className={state} />}
            </CSSTransition>
        </>
    )
}

export default Layout
