import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import styled from 'styled-components';


const manufacturers = [
  {
    title: "ABB",
    description: "A proven leader in electrical engineering, committed to maximizing electrical power effectiveness and industrial productivity.",
    img: "ABB-200x200.png",
  },
  {
    title: "Alpha Group",
    description: "An alliance of independent companies dedicated to developing and manufacturing total power solutions.",
    img: "alpha-group.jpg",
  },
  {
    title: "Ametek",
    description: "A proven industry workhorse whose solidstate power and process control solutions serve a broad spectrum of industrial markets.",
    img: "Ametek-200x200.png",
  },
  {
    title: "BCI Technologies",
    description: "Manufacturer of the SCADA Power RICH System specifically designed for power monitoring and control systems.",
    img: "BCI-tech.jpg",
  },
  {
    title: "Benshaw",
    description: "An independent manufacturer of motor controls, switchgear and the world’s foremost manufacturer of electronic softstarters.",
    img: "Benshaw-200x200.png",
  },
  {
    title: "Dis-Tran",
    description: "An elite supplier of packaged substations, steel transmission structures, and steel substation structures.",
    img: "dis-tran.jpg",
  },
  {
    title: "Eaton",
    description: "A leading diversified power management company that offers a comprehensive array of electrical products and services dedicated to ensuring that reliable, efficient and safe power is available when it&#8217;s needed most.",
    img: "Eaton-200x200.png",
  },
  {
    title: "Enel X",
    description: "A global business leading the transformation of the energy sector. Focused on smartgrid related digital technologies, Enel X is a leader energy storage and microgrids.",
    img: "Enel-X-200x200.png",
  },
  {
    title: "ESS Metron",
    description: "Custom switchgear and control enclosures and houses.",
    img: "ESS-Metron-200x200.png",
  },
  {
    title: "Fluence",
    description: "A global energy storage technology solutions and services company combining the agility of a technology company with the expertise, vision, and financial backing of two industry powerhouses &#8211; Siemens and AES.",
    img: "Fluence-200x200.png",
  },
  {
    title: "Georgia Transformer",
    description: "North America’s foremost large power transformer producer, using the best engineering and design concepts available for manufacturing shell form transformers up to 1,400 MVA &amp; 500 kV and core form up to 400 MVA &amp; 345 kV.",
    img: "Georgia-200x200.png",
  },
  {
    title: "Gruber Power Services",
    description: "Proven experts in the service, support and repair of critical power systems of all brands and vintages, providing onsite maintenance for UPS systems.",
    img: "Gruber-200x200.png",
  },
  {
    title: "Industrial Electric Manufacturing",
    description: "The nation&#8217;s largest independent full-line manufacturer of electrical distribution and power quality equipment.",
    img: "IEM.jpg",
  },
  {
    title: "La Marche",
    description: "A well-established leader in providing reliable power conversion products, including industrial battery chargers, rectifiers, power supplies, inverters and more.",
    img: "lamarche-2.jpg",
  },
  {
    title: "Mirus International",
    description: "A manufacturer that designs and develops world-class power quality improvement products for mission-critical operations. Their specialized product line includes highly efficient harmonic filters, transformers, autotransformers, and data center power distribution equipment.",
    img: "Mirus-200x200.png",
  },
  {
    title: "Mitsubishi Electric",
    description: "A manufacturer of high-quality uninterruptible power supplies to protect mission-critical data centers and equipment during times of power instability. Mitsubishi is dedicated to staying at the forefront of power semiconductor technology and is globally recognized for innovation and excellence.",
    img: "Mitsubishi-200x200.png",
  },
  {
    title: "NEC Energy Solutions",
    description: "A leading company developing and manufacturing advanced batteries for electric grid, backup power and lead-acid replacement applications.",
    img: "NEC-200x200.png",
  },
  {
    title: "Powell Industries",
    description: "A leading manufacturer of SF6 switches and other power distribution equipment.",
    img: "Powell-200x200.png",
  },
  {
    title: "Virginia Transformers",
    description: "North America’s largest power transformer manufacturer, with over five decades of experience in the custom design and manufacturing of power transformers. Their products cover virtually every market – utility, industrial, commercial, alternative energy, marine/offshore, transit, data centers and more.",
    img: "Virginia-200x200.png",
  },
].sort((a, b) => {
  if (a.title.toUpperCase() > b.title.toUpperCase()) {
    return 1
  }
  return -1
})


export const query = graphql`
  query {
    allFile {
      nodes {
        name
        ext
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  }
`

const StyledDisplayDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  .logo {
    border-right: 1px solid #ccc;
    padding: 1em;
    width: 200px;
  }
  .desc {
    padding: 1em;
    flex: 1;
    h2 {
      color: var(--gray);
    }
  }
`


const Manufacturer = ({ ctx, node }) => {
  return (
    <StyledDisplayDiv>
      <div className="logo">
        <GatsbyImage image={getImage(node)} alt={`${ctx.title} Logo`} />
      </div>
      <div className="desc">
        <h2>{ctx.title}</h2>
        <p>{ctx.description}</p>
      </div>
    </StyledDisplayDiv>
  )
}


const ManufacturersPage = ({ data }) => {
  const bannerImage = <StaticImage aspectRatio={5/1} transformOptions={{cropFocus: "northeast"}} layout="fullWidth" alt="Electrical equipment" src="../images/stock/related-links.jpg" />

  const nodes = data.allFile.nodes
  return (
    <Layout pageTitle="Manufacturers" banner={bannerImage}>
      <p>Designed Power has in-depth, ongoing relationships with a wide variety and ever-expanding list of manufacturers and sources. 
        DP has key partnering relationships, spanning decades in many cases, with the brands shown below (as well as many others). 
        Please note that because of varied territorial boundaries, not all products or brands shown are available from DP in all locations.</p>

      {manufacturers.map(m => {
        const node = nodes.filter(n => `${n.name}${n.ext}` === m.img)[0]
        return <Manufacturer key={m.title} ctx={m} node={node}/>
      })}
      
    </Layout>
  )
}


export const Head = () => <Seo />

export default ManufacturersPage








