import React from "react";

const Footer = React.forwardRef((props, ref) => {
    return (
        <footer ref={ref} className="footer row m-0">
            <div className="col-12 text-center">
                <a href="#" className="footer-link">Back to top</a>
            </div>
        </footer>
    );
});
Footer.displayName = "Footer";

export default Footer;
