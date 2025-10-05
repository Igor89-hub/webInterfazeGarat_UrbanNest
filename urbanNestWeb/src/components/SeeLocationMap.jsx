import { useLocation } from "react-router"
export function SeeLocationMap() {

    const location = useLocation();

    const { ciudad, calle, houseData } = location.state || {};


    return (
        <div className="sm-mainLayout">
            <header className="sm-mainLayout-headerTitle">
                {ciudad && calle && `${ciudad} - ${calle}`}
            </header>
        </div>
    )
}