import { Grid, Stack } from "@mui/material";
import '../styles.css'

export default function Header() {
    return (


        <Stack spacing={1}>
            <div className="roboto-flex-header" style={{fontSize:'2.2em'}}>
                Malachy Swonger
            </div>
            <div className="roboto-flex-sub-header" style={{fontSize:'1.3em'}}>
                About
            </div>
            <div className="roboto-flex-sub-header" style={{fontSize:'1.3em'}}>
                2025
            </div>
            <div className="roboto-flex-sub-header" style={{fontSize:'1.3em'}}>
                2024
            </div>
            <div className="roboto-flex-sub-header" style={{fontSize:'1.3em'}}>
                2023
            </div>
        </Stack>



    )
}