import React, {useEffect, useState} from "react";
import InstitutionService from "../../../services/institution/InstitutionService";
import {GraphicDoughnut} from "../../../components/dashboard/GraphicDoughnut";

const HomeInstitution = () => {

    const [response, setResponse] = useState("");

    useEffect(() => {
        InstitutionService.getAll().then(setResponse);
    }, []);

    return (
        <div>
            <p>Home Institution {response.message}</p>


            <div style={{width: "250px", height: "250px"}}>
                <GraphicDoughnut labels={["teste","oi"]} colors={[0,1]} quantities={[1,2]}/>
            </div>

        </div>

    );
}

export default HomeInstitution;