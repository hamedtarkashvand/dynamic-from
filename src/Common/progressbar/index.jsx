import React from 'react';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {CColor} from './../../Global/style';

const Progressbar = ({valueProgress}) =>{
    return  (
             <div className="progressbar">
              <CircularProgressbar
                maxValue={10}
                minValue={0}
  
                value={valueProgress}
                text={`${valueProgress}`}
                styles={buildStyles({
                  textColor: CColor.white,
                  textSize: "35px",
                  pathColor:CColor.grayEEE,
                  trailColor: CColor.green61F 
                })}
                strokeWidth={8}
              />
             </div>
     )}

export {Progressbar}