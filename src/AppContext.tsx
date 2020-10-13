import React, {Props} from 'react';


export interface LayoutContext {
    showCopyright: boolean,
}

export interface MapsContext {
    maps: {
        result: {}
    },
    map: {},
}

interface AppContext {
    layout: LayoutContext,
    setLayout: (value: LayoutContext) => void,

    maps: MapsContext,
    setMaps: (value: MapsContext) => void,
}

const defaultContext = {
    layout: {
        showCopyright: true
    },
    maps: {
        maps: {
            result: {}
        },
        map: {}
    },
    image: {
        isModalOpen: false,
        imageName: "",
        dataset: {
            id: ""
        }
    }
}

export const appContext = React.createContext<AppContext>(undefined!);

export function useAppContext(): AppContext {
    return React.useContext<AppContext>(appContext);
}

const AppContextProvider = (props: Props<AppContext>) => {
    const [layout, setLayout] = React.useState<LayoutContext>(defaultContext.layout);
    const [maps, setMaps] = React.useState<MapsContext>(defaultContext.maps);

    console.log("AppContext: useEffect");

    return (
        <appContext.Provider value={{
            layout, setLayout,
            maps, setMaps }}>
            {props.children}
        </appContext.Provider>
    );
};

export default AppContextProvider;
