import {useContext} from 'react';
import {Context} from '../contexts/MetamaskStatusProvider';




const useIsMetamaskAble = () => {
    const {isAble} = useContext(Context);

    return isAble;
}


export default useIsMetamaskAble;