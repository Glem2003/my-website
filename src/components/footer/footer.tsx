// style
import './footer.sass';

// type
import { footerProps } from './footer.type';

const Footer: React.FC<footerProps> = (props) => {

    const {
        copyright,
        version
    } = props

    return (
        <footer className='footer'>

            <p className='footer__copyright'>{copyright}</p>
            <p className='footer__version'>{version}</p>

        </footer>
    );
};

export default Footer;