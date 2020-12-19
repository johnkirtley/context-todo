import Link from 'next/link'

const Menu = () => {

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/tasks">
                <a>Tasks</a>
            </Link>
            <Link href="/account">
                <a>Account</a>
            </Link>
        </nav>
    )
}

export default Menu;