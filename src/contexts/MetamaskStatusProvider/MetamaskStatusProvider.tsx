import React, {createContext, useEffect, useState} from 'react';




export interface StatusContext{
    isAble: boolean,
}

export const Context = createContext<StatusContext>({
    isAble: false
})

const MetamaskStatusProvider:React.FC = ({children}) => {
    const [isAble, setIsAble] = useState<boolean>(false);

    useEffect(()=>{
        // @ts-ignore: Unreachable code error
        if(window.ethereum == undefined){
            console.log("provider.window.ethereum does not exist")
            setIsAble(false);
        }else{
            console.log("provider.window.ethereum does exist")
            setIsAble(true);
        }
    }, [])

    

    return (<Context.Provider 
        value={{isAble: isAble}}>
            {children}
            </Context.Provider>
    );
}


export default MetamaskStatusProvider;