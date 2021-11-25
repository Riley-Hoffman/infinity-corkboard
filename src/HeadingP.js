// A p that serves the visual purpose of an H1 for display in the bottom row when the real h1 is sr-only

function HeadingP() {
  
                    return (
                    <div className="flexBox headingPBox">
                            <p className="headingOne" aria-hidden="true">Infinity Corkboard</p>
                    </div>
                )
}

export default HeadingP