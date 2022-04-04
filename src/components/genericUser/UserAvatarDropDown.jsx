import {useAuth} from "../../providers/auth/Auth";
import React from "react";
import {useViewConfiguration} from "../../providers/viewConfiguration/ViewConfiguration";

const UserAvatarDropDown = () => {
    let auth = useAuth();
    let configuration = useViewConfiguration();

    if (!auth.user) {
        return <p>Você não se identificou</p>;
    }

    return (
        <p>
            Bem-Vindo {auth.user.name}!
            <button onClick={() => {auth.logout(configuration.baseRoute);}}>
                Sair
            </button>
        </p>
    );
}

export default UserAvatarDropDown;