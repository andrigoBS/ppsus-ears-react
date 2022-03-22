import React, {useEffect, useState} from "react";
import InstitutionService from "../../../services/institution/InstitutionService";

const HomeInstitution = () => {

    const [response, setResponse] = useState("");

    useEffect(() => {
        InstitutionService.getAll().then(setResponse);
    }, []);

    return (
        <div>
            <p>Home Institution {response.message}</p>
        </div>
    );
}

export default HomeInstitution;