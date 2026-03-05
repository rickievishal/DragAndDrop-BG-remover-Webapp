const NavBar = () => {
    return (
       <div className="w-full max-w-lg mx-auto py-4 fixed top-0 -translate-x-1/2 left-[50%]">
            <nav className="w-full h-[50px] flex justify-center items-center px-4 py-2 rounded-lg bg-[var(--bg-secondary-color)] border border-[var(--bg-border-color)] flex shadow">
                <h1 className="mr-4">removebg</h1>
                <div className="w-full h-full flex justify-center items-center rounded-md bg-[var(--bg-dark)] text-[var(--secondary-color)]">
                    Built with love by vishal
                </div>
            </nav>
       </div>
    )
}
export default NavBar;