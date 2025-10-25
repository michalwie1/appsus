import { AppHeader } from '../cmps/AppHeader.jsx'
import { showSuccessMsg } from '../services/event-bus.service.js'
const { Fragment } = React;


export function Home() {
    return <Fragment>
            <AppHeader />
        <section className="home">
            <h1>Sprint 3</h1>
            <h3>Michael Askira</h3>
            <h3>Michal Wieder</h3>
            {/* <h1>Welcome home</h1>
            <button onClick={() => showSuccessMsg('Yep, that works')}>Show Msg</button>
            <div className="box-container">
                <div className="box1"></div>
                <div className="box2"></div>
            </div> */}
        </section>
    </Fragment>
}