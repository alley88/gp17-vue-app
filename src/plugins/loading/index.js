import LoadingUI from "./index.vue";
import Vue from "vue";
export default (()=>{
    var JSloading = Vue.extend(LoadingUI);
    var loadingVm = new JSloading({
        el:document.createElement("div")
    })
    return {
        show(){
            document.body.appendChild(loadingVm.$mount().$el);
        },
        hide(){
            loadingVm.$mount().$el.remove();
        }
    }
})()