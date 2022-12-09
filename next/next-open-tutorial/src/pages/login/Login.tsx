import Axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    function login(params:string) {
        Axios.post("/api/login").then((res) => {
            if (res.status === 200) {
              //로그인 성공
              router.push("/admin");
            }
        });
    }

    return(
        <form action="">
            <input type="text" name="id"/>
            <input type="password" name="password"/>
            <button onClick={login.prototype}>
                로그인버튼
            </button>
        </form>
    );
}