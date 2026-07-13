import React, {useState} from "react";
export const FormWithObj = () => {
    const [user, setUser] = useState ({
        username:"",
        password: "",
    });
    return(
        <div>
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
            <form>
                <div className="row">
                    <label htmlFor="username">UserName:</label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={user.username} 
                    />
                </div>
                <div className="row">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="text"
                        id="password"
                        name="password"
                        value={user.password}
                    />
                </div>
            </form>
        </div>
    );
};