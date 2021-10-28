import '../assets/styles/Footer.css'

const Footer = (props) => {

    const { className } = props

    return <div className={`footer-container ${className}`}>
        <div className="wrap-icon">
            <a href="https://www.facebook.com/Learn-Vocabulary-109966034797404"><i className="fab fa-facebook h3"></i></a>
            <a href="https://github.com/DoHuyenLuong"><i className="fab fa-github ms-4 text-dark h3"></i></a>
            <a href="https://www.youtube.com/channel/UCOAVNCWLVYtKEvu_omXYkoQ/featured"><i className="fab fa-youtube ms-4 text-danger h3"></i></a>
            <a href="mailto:huyenluong80832000@gmail.com"><i className="far fa-envelope ms-4 text-danger h3"></i></a>
        </div>
        <p style={{ fontWeight: 'bold', textAlign: 'center', margin: '0' }}>
            ©{new Date().getFullYear()}. ALL RIGHTS RESERVED. | Design by
            <a style={{ color: '#d30000', textDecoration: 'none', marginLeft: '5px' }} href="https://www.facebook.com/Learn-Vocabulary-109966034797404">
                Nhom 3
            </a>
        </p>
    </div>
}

export default Footer
