import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Pokemon = ({ data }) => {
  const router = useRouter()
  console.log(router)

  if(router.isFallback) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <h1>{data.name} numero #{data.id}</h1>
      <Image src={data.sprites.front_default} height={400} width={400} />
      <Link href='/' >Devolver al inicio</Link>
    </div>
  )
}

export default Pokemon

export const getStaticProps = async ({ params }) => { //Pagina Server Side Rendering
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return { props: { data } }
}

export const getStaticPaths = async () => {
  const paths =[
    { params: { id: '1' } },
    { params: { id: '2' } },
  ]
  return {
    paths,
    fallback: true, //blocking does not use the isFallbackProps property but overrides this
  }
}

/*export const getServerSideProps = async ({ params }) => { //Pagina Server Side Rendering
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return { props: { data } }
}*/