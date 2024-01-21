// get car
// get car by id (detail)
// get car by category
// get car by brand
import axiosInterceptorInstance from "@/core/interceptors/axios";

class RootSerivces {
  public getCar() {
    //axios
    // return await axiosInterceptorInstance.get("http://localhost:port/car").then((res) => {
    //     return res.data;
    // });
  }
  public getCarById(id: string) {
    //axios
    // return await axiosInterceptorInstance.get(`http://localhost:port/car/${id}`).then((res) => {
    //     return res.data;
    // });
  }
  public getCarByCategory(category: string) {
    //axios
    // return await axiosInterceptorInstance.get(`http://localhost:port/car/${category}`).then((res) => {
    //     return res.data;
    // });
  }
}

const rootServices = new RootSerivces();

export default rootServices;
