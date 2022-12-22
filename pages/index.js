import Head from 'next/head'
import Header from '../feature/cars/header'
import CarsList from '../feature/cars/list'


export default function Home() {
  return (
    <>
      <Head>
        <title>Car Portal</title>
        <meta name="description" content="Car portal app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://kit.fontawesome.com/070ae587ea.js" crossorigin="anonymous"></script>
      </Head>
      <main>
        <div className="container pt-1">
          <Header></Header>
          <CarsList></CarsList>
        </div>
      </main>
    </>
  )
}
