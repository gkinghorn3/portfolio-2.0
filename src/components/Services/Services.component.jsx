
import './services.styles.scss'

const Services = () => {
    return (
        <section className='services-container'>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/code-icon.png' alt='' />  
                </div>
                 
                <h3>Web Development</h3>
                <p>Responsive, accessible and intuitive user experiences built with secure & performant technologies.</p>
            </article>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/SEO-audit.png' alt='' />  
                </div>
                 
                <h3>SEO Audits</h3>
                <p>Thorough technical, on-page, and backlink audits covering the metrics that Google actually uses in their ranking algorithm.</p>
            </article>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/seo-icon.png' alt='' />  
                </div>
                 
                <h3>SEO Management</h3>
                <p>Keyword research, on-page optimisations and technical optimisations to help you beat the competitors and generate a "free" automated source of traffic and lead gen.</p>
            </article>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/content-creation.png' alt='' />  
                </div>
                 
                <h3>Content Creation</h3>
                <p>Content strategies for positioning you as an authority in your industry, and building a hands-off source of traffic & income.</p>
            </article>
        </section>
    )
}

export default Services;