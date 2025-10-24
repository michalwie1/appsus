import { AppHeader } from "../cmps/AppHeader.jsx"

const { Fragment } = React;

export function About() {
    return (
        <Fragment>
                <AppHeader />
            <section className="container about">
                <h1>About Page</h1>
            </section>
        </Fragment>
    )
}
