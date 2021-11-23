function Canvas(prop) {
// failing to render the canvas
    const handleClick = (e) => {

        const canvas = document.getElementById("canvas");
        canvas.classList.add("canvasShow")
        canvas.classList.remove("canvasHidden")
        
        const ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        const img1 = document.getElementById("0")
        const img2 = document.getElementById("1")
        // const img3 = document.getElementById("2")
        // const img4 = document.getElementById("3")
        // const img5 = document.getElementById("4")
        // const img6 = document.getElementById("5")
        
        ctx.drawImage(img1, 0, 0);
        // ctx.drawImage(img2);
            // ctx.drawImage(img2, 0, 0);
            // ctx.drawImage(img3, 0, 0);
            // ctx.drawImage(img4, 0, 0);
            // ctx.drawImage(img5, 0, 0);
            // ctx.drawImage(img6, 0, 0);
       

    }

    return (
        <button onClick={handleClick}>Click Me</button>
    )

}

export default Canvas