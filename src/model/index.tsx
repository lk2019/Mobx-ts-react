export interface Iruler {
    width: number[];
    set(value:number,index:number):void;
}

export interface Button {
	width?: number;
	actionCode?: string;
	type?: 'primary' | 'default'|'dangerous';
	action?: () => void;
	title?: string;
	className?:any
}

export interface IPlusButton {
    leftbutton: number;
    rightbutton:number;
    right:Button[] ;
    left:Button[] ;
    plus(value:string,button:Button):void;
}