import { navbarData } from "./Data"

export const Navbar = () => {
  return (
    <nav className="Navbar">
    <ul className="navbar__list">
    {navbarData.map((item,index)=>(
        <li className="navbar__item" key={index}> 
            {item.icon}
            <p className="item__name">{item.text}</p>
            <span className="Badge">{item.Badge}</span>
        </li>
    ))}
    </ul>
    </nav>
  )}



     