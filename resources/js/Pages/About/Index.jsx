import Layout from './../Layout.jsx'
import { Head } from '@inertiajs/react'

export default function index({link}) {
    return (
        <Layout>
            <Head title="About" />
            <h1>{link}</h1>
            <p>This is a {link} page!</p>
        </Layout>
    )
}
