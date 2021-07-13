import React, { useState } from "react"
import CommonModal from "../../components/CommonModal";
import LoginModalForm from "./components/LoginModalForm";
import NewLoginModal from "./components/NewLoginModal";
import SignupModalForm from "./components/SignupModalForm";

const Test:React.FC = () =>{
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);

    const loginModalToggle = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    }

    const signupModalToggle = () => {
        setIsSignupModalOpen(!isSignupModalOpen);
    }



    return (
    <div>
        <h1>hello</h1>
        <button onClick={()=>{loginModalToggle();}}>로그인</button>
        <button onClick={()=>{signupModalToggle();}}>회원가입</button>

        <NewLoginModal
            isOpen={isLoginModalOpen}
            toggle={loginModalToggle}
        />


        <CommonModal
        isOpen={isLoginModalOpen}
        toggle={loginModalToggle}
        >
            <LoginModalForm toggle={loginModalToggle} />
        </CommonModal>


        <CommonModal 
        isOpen={isSignupModalOpen}
        toggle={signupModalToggle}
        >
            <SignupModalForm toggle={signupModalToggle} />
        </CommonModal>

    </div>
    )
}





export default Test;