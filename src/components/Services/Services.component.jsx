
import './services.styles.scss'

const Services = () => {
    return (
        <section className='services-container'>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/code-icon.png' alt='' />  
                </div>
                 
                <h3>Web Development</h3>
                <p>Custom development using modern frameworks, with responsiveness, accessibility, and and an intuitive user experiences in mind.</p>
            </article>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/ppc-icon.png' alt='' />  
                </div>
                 
                <h3>PPC Optimisation</h3>
                <p>Paid marketing campaign split testing, analysis and management across a variety of channels. </p>
            </article>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/seo-icon.png' alt='' />  
                </div>
                 
                <h3>SEO Management</h3>
                <p>Keyword research, on-page optimisation, and content creation to help you climb the search engine results page ladder.</p>
            </article>
            <article className='service-card'>
                <div className='icon-container'>
                     <img src='/icons/ecom-icon.png' alt='' />  
                </div>
                 
                <h3>E-commerce Dev & Management</h3>
                <p>Support for the whole spectrum of backend e-commerce logistics as well as store development across the main e-com platforms.  </p>
            </article>
        </section>
    )
}

export default Services;