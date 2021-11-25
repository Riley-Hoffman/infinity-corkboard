
// Header element with H1 placed at the top of html for semantics
// Visually hidden on large screens with a P in the lower section taking care of the display
// Visual display is switched to the header when window becomes smaller
function Header() {

    return (
        <header className="flexBox sr-only">
            <div className="wrapper">
            <h1 className="headingOne">Infinity Corkboard</h1>
            </div>
        </header>
    )
}

export default Header