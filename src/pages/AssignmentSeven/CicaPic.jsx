
function CicaPic() {
    const imageUrl = './src/AssignmentSeven/assets/09285.jpg'

    const handleClick = (e) => e.target.style.display = "none";

    return <img src={imageUrl} alt="cicuuuus" onClick={(e) => handleClick(e)}/>
}

export default CicaPic;