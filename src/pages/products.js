import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Accordion from '../components/accordion'
import { StaticImage } from 'gatsby-plugin-image'

const ProductsPage = () => {
    const bannerImage = <StaticImage aspectRatio={5/1} transformOptions={{cropFocus: "northwest"}} layout="fullWidth" alt="Electrical control room with switchgear" src="../images/stock/products.jpg" />
  return (
    <Layout pageTitle="Products" banner={bannerImage}>
        <p>Whether your facility is a power plant, a mine, a food processing plant, a hospital, a data center, 
            a factory or any other commercial or industrial installation, Designed Power has the expertise to 
            tailor a solution for any of your power needs. In today's world where "green" really does matter, 
            DP can show you the short and long-term benefits of redesigning or upgrading your current system, 
            and what the savings will be.</p>
		<p>Does your equipment need to be upgraded or does a retrofit make more sense? Will your existing electrical 
            infrastructure support your growth plans or do you need to expand your capacity to allow future growth? 
            Whatever your needs, Designed Power can provide you with a full spectrum of power equipment, services and solutions:</p>

        <Accordion title="Critical Power">
            <ul className="product-list">
                <li>Uninterruptible Power Supplies:</li>
                <ul className="inner-product-list">
                    <li>Single phase</li>
                    <li>Three Phase</li>
                </ul>
                <li>True on-line static UPS</li>
                <li>Generators</li>
                <li>Rotary UPS</li>
                <li>Coordinated UPS Systems</li>
                <li>Automatic transfer switches</li>
                <li>Static transfer switches</li>
                <li>Maintenance bypass switches</li>
                <li>PDU's</li>
                <li>TVSS/SPD</li>
                <li>Replacement Batteries</li>
                <li>Service contracts & call-out service</li>
            </ul>
        </Accordion>

        <Accordion title="Custom Distribution Equipment">
            <ul className="product-list">
                <li>Bus duct:</li>
                <ul className="inner-product-list">
                    <li>Plug-in power distribution</li>
                    <li>Sandwich-style</li>
                    <li>Non-segregated</li>
                    <li>Segregated</li>
                    <li>Isolated phase</li>
                </ul>
                <li>Distribution transformers:</li>
                <ul className="inner-product-list">
                    <li>Dry type</li>
                    <li>Padmount</li>
                    <li>Polemount</li>
                    <li>Unit substation</li>
                </ul>
                <li>Panelboards</li>
                <li>Switchboards</li>
                <li>Switchgear</li>
            </ul>
        </Accordion>

        <Accordion title="DC Power/Battery Systems/Energy Storage">
            <ul className="product-list">
                <li>Energy Storage Systems:</li>
                <ul className="inner-product-list">
                    <li>AC and DC connected systems</li>
                    <li>All kW and MW ratings</li>
                    <li>Load-shifting &amp; peak-shaving</li>
                    <li>All kWH ratings</li>
                </ul>
                <li>Solar Energy Systems:</li>
                <ul className="inner-product-list">
                    <li>Turnkey systems</li>
                    <li>Hardware only</li>
                    <li>Roof-top, ground mount, car ports</li>
                </ul>
                <li>Charger systems:</li>
                <ul className="inner-product-list">
                    <li>Switch-mode chargers</li>
                    <li>Ferroresonant  chargers</li>
                    <li>Mag-Amp chargers</li>
                    <li>Rectifiers</li>
                    <li>Power supplies</li>
                    <li>Battery eliminators</li>
                    <li>DC/DC converters</li>
                    <li>Inverters</li>
                    <li>Battery condition monitors</li>
                </ul>
                <li>Batteries:</li>
                <ul className="inner-product-list">
                    <li>Lithium Ion Batteries (all chemistries)</li>
                    <li>VRLA Batteries</li>
                    <li>Lead Crystal Batteries</li>
                    <li>Flooded Cell Batteries</li>
                    <li>NiCad Batteries</li>
                    <li>Gel-Cell batteries</li>
                    <li>Replacement batteries (any brands)</li>
                    <li>Battery racks, enclosures &amp; cabinets</li>
                </ul>
                <li>SCR power controls</li>
                <li>Energy storage capacitors</li>
            </ul>
        </Accordion>

        <Accordion title="Drives & Motor Control">
            <ul className="product-list">
                <li>Variable frequency AC drives</li>
                <li>Low voltage AC drives</li>
                <li>Low voltage MCC's</li>
                <li>Digital DC drives</li>
                <li>Electronic soft starters</li>
                <li>Contactors and starters</li>
                <li>Custom motor controls</li>
                <li>Motor protective relays</li>
                <li>Medium voltage starters</li>
                <li>Medium voltage AC drives</li>
                <li>Medium voltage MCC's</li>
                <li>Synchronous motor controls</li>
            </ul>
        </Accordion>

        <Accordion title="Electrical Services">
            <ul className="product-list">
                <li>UPS service contracts</li>
                <li>Call-out services</li>
                <li>Energy efficiency studies and upgrades</li>
                <li>Annual maintenance contracts</li>
                <li>Load testing and burn-in</li>
                <li>Turnkey installations</li>
                <li>Relay testing &amp; calibration</li>
                <li>Breaker testing</li>
                <li>Onsite repair, refurbishment and upgrades</li>
                <li>Fault coordination studies</li>
                <li>Load flow and arc flash studies</li>
                <li>Substation layout, foundations and structural engineering</li>
                <li>Harmonic studies and  filter design</li>
                <li>Tap changer services and upgrades</li>
            </ul>
        </Accordion>

        <Accordion title="Engineered Systems">
            <ul className="product-list">
                <li>Rectifier systems</li>
                <li>Enclosure systems</li>
                <li>Protective relay systems</li>
                <li>Coordinated drive systems</li>
                <li>Static var compensators</li>
                <li>Turnkey substations</li>
                <li>Portable equipment buildings</li>
                <li>Bus duct systems</li>
                <li>Harmonic filter systems</li>
            </ul>
        </Accordion>

        <Accordion title="Power Factor Correction">
            <ul className="product-list">
                <li>Low, medium, &amp; high voltage capacitors</li>
                <li>Fixed &amp; auto capacitor banks</li>
                <li>Padmounted capacitor banks</li>
                <li>Power factor monitoring</li>
                <li>Power factor controllers</li>
                <li>Dynamic var compensation</li>
            </ul>
        </Accordion>
        
        <Accordion title="Power Metering">
            <ul className="product-list">
                <li>Cloud-based metering systems</li>
                <li>Temporary metering and data logging</li>
                <li>Wireless metering solutions</li>
                <li>Microprocessor based meters</li>
                <li>SCADA systems</li>
                <li>Revenue meters</li>
                <li>Power quality monitoring systems</li>
                <li>Power trend analysis</li>
                <li>Metering enclosures</li>
                <li>Current transformers (CTs)</li>
                <li>Potential transformers (PTs)</li>
            </ul>
        </Accordion>

        <Accordion title="Power Quality">
            <ul className="product-list">
                <li>Power quality monitoring systems</li>
                <li>Harmonic canceling transformers</li>
                <li>Neutral current eliminators</li>
                <li>Passive harmonic filters</li>
                <li>Line reactors</li>
                <li>Active harmonic filters</li>
                <li>K-factor transformers</li>
                <li>Harmonic blocking filters</li>
                <li>Uninterruptible Power Supplies</li>
                <li>Surge Protective Devices (TVSS)</li>
            </ul>
        </Accordion>

        <Accordion title="Power T &amp; D">
            <ul className="product-list">
                <li>Protective relays</li>
                <li>Smart Grid devices</li>
                <li>SCADA systems</li>
                <li>System uprates</li>
                <li>Switchgear</li>
                <li>Transformers</li>
                <li>Instrument transformers</li>
                <li>Lightning/surge arresters</li>
                <li>Sectionalizing switches</li>
                <li>Reclosers</li>
                <li>Power circuit breakers</li>
            </ul>
        </Accordion>

        <Accordion title="Substations">
        <ul className="product-list">
                        <li>Primary &amp; secondary unit subs</li>
                        <li>Turnkey substations (both transmission and distribution voltages)</li>
                        <li>Sub substation equipment packages</li>
                        <li>Substation components</li>
                        <li>Engineered substation structures &amp; bus systems</li>
                        <li>All voltage ranges</li>
                    </ul>
        </Accordion>

        <Accordion title="Switchgear">
        <ul className="product-list">
                            <li>Replacement breakers</li>
                            <li>Refurbishment and upgrades</li>
                        <li>Arc-resistant switchgear</li>
                        <li>LV drawout switchgear</li>
                        <li>MV metalclad switchgear</li>
                            <li>MV metal-enclosed switchgear</li>
                        <li>Padmounted switchgear</li>
                        <li>Load interrupter switchgear</li>
                        <li>Paralleling switchgear</li>
                        <li>SF6 insulated switchgear</li>
                    </ul>
        </Accordion>

        <Accordion title="Transformers">
        <ul className="product-list">
                        <li>Distribution</li>
                        <li>Isolation</li>
                        <li>Ultra-high efficiency</li>
                        <li>Specialty</li>
                        <li>Pole mount</li>
                        <li>Padmount</li>
                        <li>Dry type power</li>
                        <li>Cast coil power</li>
                        <li>Small, medium and large power</li>
                        <li>Tap changers</li>
                        <li>Transformer life extension and upgrade</li>
                        <li>Rebuild and repair services</li>
                    </ul>
        </Accordion>
    </Layout>
  )
}


export const Head = () => <Seo title="Products" />

export default ProductsPage









