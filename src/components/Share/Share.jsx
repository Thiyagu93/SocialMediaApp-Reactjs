import React from 'react'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material';
import './Share.css'

const Share = () => {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
              <img className='shareprofileimage' src='assets/person/1.jpeg' alt=""/>
              <input placeholder="what's in your mind"
              className='shareinput'
               />
            </div>
            <hr className='sharehr'/>
            <div className="sharebottom">
              <div className="shareoptions">
                <div className="shareoption">
                  <PermMedia htmlColor='tomato' className="shareicon"/>
                  <span className="shareoptiontext">Photo or video</span>
                </div>
                <div className="shareoption">
                  <Label htmlColor='blue' className="shareicon"/>
                  <span className="shareoptiontext">Tag</span>
                </div>
                <div className="shareoption">
                  <Room htmlColor='green' className="shareicon"/>
                  <span className="shareoptiontext">Location</span>
                </div>
                <div className="shareoption">
                  <EmojiEmotions htmlColor='goldenrod' className="shareicon"/>
                  <span className="shareoptiontext">Feelings</span>
                </div>
              </div>
              <button className='sharebtn'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share