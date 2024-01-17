import './index.css'

const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <div>
          <h1 className="Banner-heading">{headerText}</h1>
          <p className="Banner-description">{description}</p>
          <button className="banner-button">Show More</button>
        </div>
      </div>
    </li>
  )
}
export default BannerCard
