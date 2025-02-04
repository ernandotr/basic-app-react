import React, { ReactNode } from "react";

interface UserProps {
    name: string;
    age: number;
    children?: ReactNode
}   


const User = ({name, age, children}: UserProps) => {
  return(
    <div>
        <p>My name is {name} and I am {age} years old</p><br />

        {children && <div>{children}</div>}
    </div>
  );
};

export default User;