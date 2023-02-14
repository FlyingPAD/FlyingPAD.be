import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})
export class MetronomeComponent implements OnInit 
{
  // -------------------------------------------------------------------------------------------
  // - Properties :

  audio : HTMLAudioElement

  bpm : number
  bpmMIN : number
  bpmMAX : number

  volumeMIN : number
  volumeMAX : number

  intervalID : any

  imgTik : boolean

  // -------------------------------------------------------------------------------------------
  // - Constructor :

  constructor ()
  {
    this.audio = new Audio()

    this.bpm = 120
    this.bpmMIN = 30
    this.bpmMAX = 240

    this.audio.volume = 1.0
    this.volumeMIN = 0.0
    this.volumeMAX = 1.0

    this.imgTik = false
  }

  // -------------------------------------------------------------------------------------------
  // - Initialization :

  ngOnInit(): void 
  {
    this.audio.src = "../../../../assets/audio/tik.mp3"
    this.audio.load()
  }

  // -------------------------------------------------------------------------------------------
  // - BPM Control :

  bpmSet(value : number)
  {
    this.bpm = value
    if(this.intervalID)
    {
      this.audioLoopStop()
      this.audioLoopPlay()
    }
  }
  bpmIncrement(value : number)
  {
      this.bpm += value
      this.bpmLimit()
      if(this.intervalID)
      {
        this.audioLoopStop()
        this.audioLoopPlay()
      }
  }  
  bpmDecrement(value : number)
  {
      this.bpm -= value
      this.bpmLimit()
      if(this.intervalID)
      {
        this.audioLoopStop()
        this.audioLoopPlay()
      }
  }

  bpmLimit()
  {
    if(this.bpm > this.bpmMAX)
    {
      this.bpm = this.bpmMAX
    }
    if(this.bpm < this.bpmMIN)
    {
      this.bpm = this.bpmMIN
    }
  }

  // -------------------------------------------------------------------------------------------
  // - Display Control :

  tik()
  {
    this.imgTik = true
    setTimeout(() => {
      this.imgTik = false
    }, 125)
    
  }
  // -------------------------------------------------------------------------------------------
  // - Audio Control :

  audioLoopPlay()
  { 
    if (this.intervalID == undefined) 
    {
      this.audio.play()
      this.tik()
      this.intervalID = setInterval(() => {
        this.audio.play()
        this.tik()
      }, 60000 / this.bpm)
    }   
  }
  audioLoopStop()
  {
    if (this.intervalID) 
    {
      clearInterval(this.intervalID)
      this.intervalID = undefined
      this.imgTik = false
    }
  }

  // -------------------------------------------------------------------------------------------
  // - Component Destruction :

  ngOnDestroy(): void 
  {
    if (this.intervalID) 
    {
      clearInterval(this.intervalID)
      this.intervalID = undefined
      this.imgTik = false
    }
  }
}