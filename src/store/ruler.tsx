import {observable,action} from 'mobx';
import {Iruler} from '../model'

export default class Ruler implements Iruler{
    @observable public width:number[] = [100,100,100];
    @action public set(value:number,index:number){
        return this.width[index]=value;
	}
}