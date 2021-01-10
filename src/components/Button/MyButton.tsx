import React from 'react';
import Button from '@material-ui/core/Button'

interface ButtonProps{
    buttonText :string,
    onClick? :() => void,
}

const MyButton: React.FC<ButtonProps> = ({buttonText, onClick}) => {
    return (
    <Button variant="outlined" onClick={onClick}>
        {buttonText}
    </Button>
    );
}


export default MyButton;