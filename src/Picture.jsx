import vite from './assets/vite.svg'
function Picture(){
const ImgURL =  vite

const handleClick = (e) => e.target.style.display = "none"

return (
  <img onClick={(e) => handleClick(e)} src={ImgURL} alt="" />
)
}

export default Picture

