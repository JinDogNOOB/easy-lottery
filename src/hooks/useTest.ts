


const useTest = () => {
    let test:string = "asd";


    const change = () => {
        test = "aaaaaa";
        console.log("aaaaa");
    }

    return {test, change}
}


export default useTest;