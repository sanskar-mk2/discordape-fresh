import Theme from "./Theme.jsx";

function Navigation() {
    return (
        <nav>
            <div className="flex justify-between navbar bg-base-200 shadow">
                <a href="/" className="btn font-bold btn-ghost normal-case text-xl">
                    Discord<span className="text-primary">ape</span>
                </a>
                <div className="px-4">
                    <Theme />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
