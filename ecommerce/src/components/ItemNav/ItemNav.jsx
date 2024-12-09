import { NavLink } from "react-router-dom"

export const ItemNav = ({nombre, to}) => {
    
        return(
            <NavLink className={({ isActive }) => isActive ? "ActiveOption" : "Option"} to={to}>{nombre}</NavLink>
        )
    }
    
    export default ItemNav