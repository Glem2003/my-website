// hooks
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";

// data
import { navItems } from '../data/navItems';

const useMenuActive = () => {

    const [isMenuActive, setMenuActive] = useState<string>('home')
    const navigate = useNavigate()
    const location = useLocation()

    const handleActive = (value: string, path: string) => {
        setMenuActive(value)
        navigate(path)
    }

    useEffect(() => {
        const activeItem = navItems.find(item => location.pathname.startsWith(item.to))
        if (activeItem) setMenuActive(activeItem.text)
    }, [location.pathname])

    return {
        isMenuActive,
        setMenuActive,
        handleActive
    }
}

export default useMenuActive