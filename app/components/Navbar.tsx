export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between py-4 px-8 bg- text-white">
            <div className="flex items-center">
                <h1 className="text-lg font-bold">MyApp</h1>
            </div>
            <div className="flex items-center">
                <a href="#" className="mx-4">Home</a>
                <a href="#" className="mx-4">About</a>
                <a href="#" className="mx-4">Contact</a>
            </div>
        </nav>
    );
}