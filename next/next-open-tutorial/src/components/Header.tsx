
const Header = () => {
    return (
        <header className="header">
            <div className="sub-nav">
                <ul>
                    <li><a href="">로그인</a></li>
                    <li><a href="">회원가입</a></li>
                </ul>
            </div>
            <div className="main-nav">
                <div className="logo-cont">
                    로고
                </div>
                <ul>
                    <li>메뉴1</li>
                    <li>메뉴2</li>
                    <li>메뉴3</li>
                    <li>메뉴4</li>
                </ul>
            </div>
        </header>

    )
}

export default Header;