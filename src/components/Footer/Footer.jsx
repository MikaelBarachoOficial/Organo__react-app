import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='social-icons'>
                <a href="https://www.facebook.com/">
                    <img src="/images/fb.png" alt="facebook" />
                </a>
                <a href="https://twitter.com/home">
                    <img src="/images/tw.png" alt="twitter" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src="/images/ig.png" alt="instagram" />
                </a>
            </div>

            <img src="/images/logo.png" alt='logo' />

            <p>Desenvolvido por Mikael Baracho.</p>
        </footer>
    )
}