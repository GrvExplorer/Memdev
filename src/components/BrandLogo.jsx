
function BrandLogo({logo}) {
  return (
    <div className="flex">
    <img src={logo} alt="logo" className="logo" />
    <span className="logo-name ">mem.dev</span>
  </div>
  )
}

export default BrandLogo