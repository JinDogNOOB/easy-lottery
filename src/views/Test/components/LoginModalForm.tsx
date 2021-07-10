import React, {useState} from "react";


export interface LoginFormProps{
    toggle:()=>void
}

const LoginModalForm:React.FC<LoginFormProps> = ({toggle}) => {

    const [id, setId] = useState<string>();
    const [pw, setPw] = useState<string>();
    
    const onSetId = (e: React.ChangeEvent<HTMLInputElement>) => {setId(e.target.value);}
    const onSetPw = (e: React.ChangeEvent<HTMLInputElement>) => {setPw(e.target.value);}

    const doLogin = () => {
        // 로그인 통신
        /*
        fetch("/login", {body:{id:id, pw:pw}});
        */
        toggle();
        alert("로그인 성공")
    }
    

    return(
        <div>
            <h2>로그인</h2>

            <h2>ID</h2>
            <input type="text" value={id} onChange={onSetId} />
            <h2>PW</h2>
            <input type="text" value={pw} onChange={onSetPw} />

            <button onClick={()=>{toggle();}}>취소</button>
            <button onClick={()=>{doLogin();}}>확인</button>
        </div>
    )
}

export default LoginModalForm;