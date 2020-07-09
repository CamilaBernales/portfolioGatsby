import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
const Home = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          slug
        }
      }
    }
  `)
  const { titulo, contenido } = info.allDatoCmsPagina.nodes[0]
  return (
    <>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </>
  )
}

export default Home
