import Link from "next/link";

const RegisterComplete = () => {
    return ( 
        <div>
            <p>SignUp Form Register Successful</p>
         <p> Go To <Link href={"/login"}>LogIn</Link></p>
        </div>
     );
}
 
export default RegisterComplete;