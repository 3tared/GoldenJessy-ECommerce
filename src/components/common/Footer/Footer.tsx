import style from './style.module.css';

const { footerContainer } = style;
const Footer = () => {
  return (
    <div className={footerContainer}>
      &copy;{new Date().getFullYear()} Golden Jessy. All rights reserved.
    </div>
  );
};

export default Footer;
