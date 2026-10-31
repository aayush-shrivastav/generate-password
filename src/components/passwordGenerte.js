import { use, useState, useEffect, useCallback } from "react"

function PasswordGenerte() {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState("10")
    const [changeNum, setChangeNum] = useState(false);
    const [changeChar, setChangeChar] = useState(false);

    const GeneratePass = useCallback(() => {
        let str = "abcdefghihklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (changeNum) {
            str += "0123456789";
        }
        if (changeChar) {
            str += "!@#$%^&*()_+~`|}{[]:;?><,./-";
        }

        let pass = "";
        for (let i = 0; i < length; i++) {
            pass += str.charAt(Math.floor(Math.random() * str.length));
        }
        setPassword(pass);
    }, [length, changeChar, changeNum])

    useEffect(() => {
        GeneratePass();
    }, [GeneratePass]);



    return (
        <>
            <h1>Password Generator</h1>
            <p>{password}</p>
            <div>
                <input
                    type="range"
                    min="5"
                    max="50"
                    onChange={(e) => {
                        setLength(e.target.value);
                    }}

                />
                <label>Length is {length}</label>
                <input
                    type="checkbox"
                    defaultChecked={changeNum}
                    onClick={() => {
                        setChangeNum(!changeNum);
                    }}
                />
                <label>Add Number</label>
                <input
                    type="checkbox"
                    defaultChecked={changeChar}
                    onClick={() => {
                        setChangeChar(!changeChar);
                    }}
                />
                <label>Special Charactors</label>
            </div>
            <button>Copy PassWord</button>
        </>
    )
}

export default PasswordGenerte;