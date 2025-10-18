import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import "../../styles/HomeStyle.css"

const Home = () => {
  return (
   <>
   <Layout>
    {/* Home section Hero banner */}
    <Section1></Section1>
   </Layout>
   </>
  )
}

export default Home