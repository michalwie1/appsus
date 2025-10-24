import { AppHeader } from '../cmps/AppHeader.jsx'
import { showSuccessMsg } from '../services/event-bus.service.js'
const { Fragment } = React;


export function Home() {
    return <Fragment>
            <AppHeader />
        <section className="container home">
            <h1>Welcome home</h1>
            <button onClick={() => showSuccessMsg('Yep, that works')}>Show Msg</button>
            <div className="box-container">
                <div className="box1"></div>
                <div className="box2"></div>
            </div>
        </section>
    </Fragment>
}