import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { ShoppingBagIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
    const { pathname } = useLocation()
    const isHomePage = pathname === "/"
    return (
        <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="navbar px-4 min-h-16 justify-between">
                    {/* LOGO */}
                    <div className="flex-1 lg:flex-none">
                        <Link to="/" className="transition-all active:scale-95">
                            <Logo />
                        </Link>
                    </div>
                    {/* right section */}
                    <div className="flex items-center gap-4">
                        <ThemeSelector />
                        {isHomePage && (
                            <div className="indicator">
                                <div className="p-2 rounded-full hover:bd-base-200 transition-colors">
                                    <ShoppingBagIcon className="size-5" />
                                    <span className="badge badge-sm badge-primary indicator-item">8</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
