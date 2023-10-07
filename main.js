import TodoView from "./Megjelenit.js";
import {TODOLIST, TODOLIST2} from "./adatok.js"

$(function(){
    const tarolo = $(".tarolo")

    new TodoView(tarolo, TODOLIST)

})