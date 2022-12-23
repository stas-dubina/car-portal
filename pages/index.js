import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from '../feature/cars/header'
import CarsList from '../feature/cars/list'


export default function Home() {
  return (
    <>
      <Head>
        <title>Car Portal</title>
        <meta name="description" content="Car portal app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container pt-1">
        <Header></Header>
        <div className="container pt-1">
          <CarsList></CarsList>
        </div>
      </main>
    </>
  )
}
