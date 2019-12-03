
import {observable,action} from 'mobx';
import { IPlusButton , Button } from '../model'



export default class PlusButton implements IPlusButton{
    @observable public leftbutton:number = 0 ;
    @observable public rightbutton:number = 0;
    @observable public right:Button[] =[];
    @observable public left:Button[] =[];
    @action public plus(value:string,{...button}:Button){
        switch(value){
            case "left":
                this.PlusLeftbutton();
                this.PlusLeft(button);
                break;
            case "right":
                this.PlusRightbutton();
                this.PlusRight(button);
                break;
            default:
                break;
        }
    }
    @action public PlusLeftbutton(){
        this.leftbutton++;
    }
    @action public PlusRightbutton(){
        this.rightbutton++;
    }
    @action public PlusLeft(button:Button){
        button.title=button.title||"新建"
        this.left.push(button)
    }
    @action public PlusRight(button:Button){
        button.title=button.title||"新建"
        this.right.push(button);
    }
}