import React, { useEffect, useContext } from 'react';

import { MenuContext } from '../contexts/menu';

export function Dashboard() {
    const { handleChangeTitle } = useContext(MenuContext);

    useEffect(() => {
        handleChangeTitle("Dashboard");
    }, [handleChangeTitle]);

    return <></>
}