import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chord-wheel',
  templateUrl: './chord-wheel.component.html',
  styleUrls: ['./chord-wheel.component.scss']
})
export class ChordWheelComponent implements OnInit 
{
  // -----------------------------------------------------------------
  // - Properties

  currentPosition! : number
  keyFR! : string
  keyFRAlt! : string
  keyEN! : string
  keyENAlt! : string

  // -----------------------------------------------------------------
  // - Constructor

  constructor() { }

  // -----------------------------------------------------------------
  // - Method : Initialisation

  ngOnInit(): void 
  {
    this.currentPosition = 1
    this.keyFR = "Do"
    this.keyFRAlt = ""
    this.keyEN = "C"
    this.keyENAlt = ""
  }

  // -----------------------------------------------------------------
  // - Method : Rotate L & R

  rotateL()
  {
    this.currentPosition -= 1
    this.checkPosition()
    this.switchKey(this.currentPosition)
  }
  rotateR()
  {
    this.currentPosition += 1
    this.checkPosition()
    this.switchKey(this.currentPosition)
  }

  // -----------------------------------------------------------------
  // - Method : Random Position

  randomPosition()
  {
    this.currentPosition = Math.floor(Math.random() * 11) + 1
    this.switchKey(this.currentPosition)
  }

  // -----------------------------------------------------------------
  // - Method : Check Position

  checkPosition()
  {
    if(this.currentPosition > 12)
    {
      this.currentPosition = 1
    }
    if(this.currentPosition < 1)
    {
      this.currentPosition = 12
    }
  }

  // -----------------------------------------------------------------
  // - Method : Switch Key

  switchKey(position : number)
  {
    switch (position) {
      case 1:
        this.keyEN = "C"
        this.keyENAlt = ""
        this.keyFR = "Do"
        this.keyFRAlt = ""
        break;
      case 2:
        this.keyEN = "G"
        this.keyENAlt = ""
        this.keyFR = "Sol"
        this.keyFRAlt = ""
        break;
      case 3:
        this.keyEN = "D"
        this.keyENAlt = ""
        this.keyFR = "Ré"
        this.keyFRAlt = ""
        break;
      case 4:
        this.keyEN = "A"
        this.keyENAlt = ""
        this.keyFR = "La"
        this.keyFRAlt = ""
        break;
      case 5:
        this.keyEN = "E"
        this.keyENAlt = ""
        this.keyFR = "Mi"
        this.keyFRAlt = ""
        break;
      case 6:
        this.keyEN = "B"
        this.keyENAlt = ""
        this.keyFR = "Si"
        this.keyFRAlt = ""
        break;
      case 7:
        this.keyEN = "F#"
        this.keyENAlt = "Gb"
        this.keyFR = "Fa dièse"
        this.keyFRAlt = "Sol bémol"
        break;
      case 8:
        this.keyEN = "C#"
        this.keyENAlt = "Db"
        this.keyFR = "Do dièse"
        this.keyFRAlt = "Ré bémol"
        break;
      case 9:
        this.keyEN = "G#"
        this.keyENAlt = "Ab"
        this.keyFR = "Sol dièse"
        this.keyFRAlt = "La bémol"
        break;
      case 10:
        this.keyEN = "Eb"
        this.keyENAlt = ""
        this.keyFR = "Mi bémol"
        this.keyFRAlt = ""
        break;
      case 11:
        this.keyEN = "Bb"
        this.keyENAlt = ""
        this.keyFR = "Si bémol"
        this.keyFRAlt = ""
        break;
      case 12:
        this.keyEN = "F"
        this.keyENAlt = ""
        this.keyFR = "Fa"
        this.keyFRAlt = ""
        break;   
    }
  }
}