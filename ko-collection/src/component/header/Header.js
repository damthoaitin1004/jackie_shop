import React from 'react';

const Header = () => {
    return (
        <header className="header-area header-sticky shadow">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav ">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo" style={{ marginTop: "3%", color: "black" }}>
                               <h2 style={{color:"white",fontWeight:"bold"}}>KO Collection</h2>
                            </a>
                            <ul className="nav text-light">
                                <li className="scroll-to-section">
                                    <a href="#top" className="active">
                                        Home
                                    </a>
                                </li>
                                <li className="scroll-to-section">
                                    <a href="#men">Sản phẩm mới</a>
                                </li>

                                <li className="submenu">
                                    <a href="javascript:;">Sản phẩm</a>
                                    <ul>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="products.html">Products</a>
                                        </li>
                                        <li>
                                            <a href="single-product.html">Single Product</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:;">Tìm kiếm</a>
                                    <ul>
                                        <li>
                                            <a href="#">Features Page 1</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section">
                                    <a href="#explore">Đăng nhập</a>
                                </li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
};
export default Header;
