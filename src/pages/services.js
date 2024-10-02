import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'


const ServicesPage = () => {
  const bannerImage = <StaticImage aspectRatio={4/1} transformOptions={{cropFocus: "northeast"}} layout="fullWidth" alt="Several engineers wearing hard hats and safety vests" src="../images/stock/services.jpg" />

  return (
    <Layout pageTitle="Services" banner={bannerImage}>
        <p>Designed Power offers product related services from original equipment manufacturers and experienced third-party service providers. 
            With access to a diverse group of service organizations, DP can provide customized field service offerings specific to your precise needs.</p>

        <h2>UPS Services:</h2>
        <p>Commissioning and preventive maintenance plans are some of the keys to achieving maximum performance from your critical power equipment. 
            Initiating a preventive maintenance service plan for your UPS can help detect a wide range of potential problems before they become serious 
            issues or result in outages. Whether you need battery replacements or annual maintenance, DP has a range of options to suit your needs and 
            budget. Proactive solutions like contracted annual maintenance can provide guaranteed call-out response times and reduced overall cost of services.</p>

        <h2>Engineering Field Services:</h2>
        <p>With a variety of service providers and plans tailored to meet your unique needs, Designed Power is well positioned to recommend and provide 
            electrical services specifically designed for your organization. Whether you need a power system upgrade, relay testing, circuit breaker retrofits, 
            or preventative maintenance, Designed Power has the service capabilities you need.</p>

    </Layout>
  )
}


export const Head = () => <Seo />

export default ServicesPage








