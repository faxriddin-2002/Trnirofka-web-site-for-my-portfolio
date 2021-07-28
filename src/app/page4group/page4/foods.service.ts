import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() { }

  foods: any[] = [{text: 'Biscuit',text1: 'Biscuit',text2: 'Biscuit',text3: 'Biscuit',text4: 'Biscuit'}, {text: 'souseg',text1: 'souseg',text2: 'souseg',text3: 'souseg',text4: 'souseg'},{text: '5kg Meet',text1: '5kg Meet',text2: '5kg Meet',text3: '5kg Meet',text4: 'souseg'}]
  tims: any[] = [{time:"Morning"},{time:"lunch"} ,{time:"dinner"}];
  days: any[] = ["Monday","Tuesday","Wednesday","Thoursday","Friday","Saturday","Sunday"]

  trnirofka: any[] = [{text: 'Biscuit',text1: 'Biscuit',text2: 'Biscuit',text3: 'Biscuit',text4: 'Biscuit'}, {text: 'souseg',text1: 'souseg',text2: 'souseg',text3: 'souseg',text4: 'souseg'},{text: '5kg Meet',text1: '5kg Meet',text2: '5kg Meet',text3: '5kg Meet',text4: 'souseg'}]
  tims2: any[] = [{time:"Morning"},{time:"lunch"} ,{time:"dinner"}];
  days2: any[] = ["Monday","Tuesday","Wednesday","Thoursday","Friday","Saturday","Sunday"]
}
