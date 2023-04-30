import React, { useState, useEffect } from 'react'
import { SlMenu } from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './style.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'

const Header = () => {
    const menuItemList = [
        {
            _id: 1,
            name: 'Home',
            path: '/'
        },
        {
            _id: 2,
            name: 'YouTube Comments SA',
            path: '/youtube-comment-sentiment-analyser'
        },
        {
            _id: 3,
            name: 'Text SA',
            path: '/text-sentiment-analyser'
        },
        {
            _id: 4,
            name: 'About',
            path: '/about'
        }
    ]

    const [show, setShow] = useState("top")
    const [lastScrollY, setLastScrollY] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)
    const navigate = useNavigate()
    const loacation = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [loacation])

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide")
            }
            else {
                setShow("show")
            }
        } else {
            setShow("top")
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    const openMobileMenu = () => {
        setMobileMenu(true)
    }

    const navigationHandler = (type) => {
        setMobileMenu(false)
    }

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo">
                    Social Media Sentiment Analyser
                    {/* <img src={logo} alt="" /> */}
                </div>
                <ul className="menuItems">
                    {menuItemList.map((Item) => {
                        return <li key={Item._id} className="menuItem" onClick={() => navigationHandler()}><Link to={Item.path}>{Item.name}</Link></li>
                    })}
                </ul>

                <div className="mobileMenuItems">
                    {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
                </div>
            </ContentWrapper>
        </header>
    )
}

export default Header