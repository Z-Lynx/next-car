// login -> POST
// register
// update profile

// cookie
// local storage
import axiosInterceptorInstance from "@/core/interceptors/axios";

class AuthServices {
  public login = async (email: string, password: string) => {
    // using axios
    // return await axiosInterceptorInstance.post("http://localhost:port/login", {
    //     email,
    //     password,
    // }).then((res) => {
    //     return res.data;
    // });
  };
  // register
  // update profile
  // save to cookie

  // save to local storage
  // public saveUserToLocalStorage = (user: User) => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // };
}

const authServices = new AuthServices();
export default authServices;

const res = authServices.login("test", "test");

// component
