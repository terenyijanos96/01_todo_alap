import TodoView from "./Megjelenit.js";
import {TODOLIST2} from "./adatok.js"

$(function(){
    const tarolo = $(".tarolo")

    new TodoView(tarolo, TODOLIST2)

})