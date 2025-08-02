import '../LandingCss/ServiceCardStyle.css';

function ServicesCard({ text, paragraph }) {
    return (
        <div className="service-card">
            <h2>{text}</h2>
            <p>{paragraph }</p>
        </div>
    )
}

export default ServicesCard