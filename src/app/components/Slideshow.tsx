"use client"; //Client Component
import { IconButton } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from "react"

import '../styles.css'

export default function SlideShow() {
    const [index, setIndex] = useState(0)
    const maxIndex = 4

    function renderImage(index: number) {
        return (
        <img
            key={index}
            src={("/images/SitePics-" + index + ".jpg")}
            alt="Photo" width={0}
            height={0}
            sizes="100vw"
            style={{ width: '800%', height: 'auto', maxHeight: '90vh' }} // optional
        />)

    }

    return (
        <>
            <div className="left_nav" style={{alignSelf:'center', alignContent:'center', textAlign:"center", height:'100%'}} onClick={() => setIndex((index + 1) % maxIndex)}>
                <IconButton size="large" sx={{background:'white', opacity:'30%'}} onClick={() => setIndex((index - 1 + maxIndex) % maxIndex)}> <ChevronLeftIcon/> </IconButton>
            </div>
            <div className="image_slideshow">
            {renderImage(index + 1)}
            </div>
            <div className="right_nav" style={{alignSelf:'center', alignContent:'center', textAlign:"center", height:'100%'}} onClick={() => setIndex((index + 1) % maxIndex)}>
                <IconButton size="large" sx={{background:'white', opacity:'30%'}} onClick={() => setIndex((index + 1) % maxIndex)}> <ChevronRightIcon/> </IconButton>
            </div>
        </>
    )
}