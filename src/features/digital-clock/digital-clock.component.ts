import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Month } from '../model/main-model';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {


  public source = interval(1000);
  public subscription: Subscription = new Subscription;
  public time: string = '';
  public month: string = '';
  public date: number = 0;
    

  ngOnInit(): void {
    this.subscription = this.source.subscribe((val: any) => {
      this.getRealTime()
    });
    this.getMonthName(new Date);
    this.getDateToday(new Date);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  getRealTime(): void{
    let date = new Date();
    this.time = date.toLocaleTimeString(); 
  }

  getMonthName(date: Date): void{
    this.month = Month[date.getMonth()].name;
    console.log(date.getUTCDate());
  }

  getDateToday(date: Date): void {
    this.date = date.getUTCDate() + 1;
  }

}
