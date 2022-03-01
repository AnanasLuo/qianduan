/**
 * Storage封装
 */
const STORAGE_KEY  = 'mall';
export default {
    //存储值
    setItem(module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = vaule;
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }   
    },

    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return  this.getStorage()[key];
    },
    getStorage(){
      return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    
    clear(key,module_name){
        let val = this.getStorage;
        if(module_name){
            if(!module_name) return;
            delete val[module_name];
        }else{
            delete val[key];
        }
        this.setItem(val);
    }
}