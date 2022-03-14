//request.js
import axios from 'axios'
export function request(config){    //request只有一个config形参，该形参是个对象。
    // return new Promise((resolve, reject)=>{    //封装在Promise里，直接返回这个promise实例对象。
    const axiosBin = axios.create({   
            baseURL: 'http://httpbin.org',  
            timeout: 5000
    //     })
    //     axiosBin(config)      
    //     .then(res=>{  
    //         resolve(res)     //promise成功返回res     
    //     })
    //     .catch(err=>{    
    //         reject(err)     //promise失败返回err          
    //     })    
    })
    return axiosBin(config) 
}