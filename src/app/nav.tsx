
import Link from 'next/link';

export default function NavLink({ href, children } :any) {
    return (
        <nav>
            <Link href={href}>{children}</Link>
        </nav>
    )
}