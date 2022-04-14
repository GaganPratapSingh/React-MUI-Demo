import { Grid } from "@material-ui/core"


const GridLayout=()=>{
    return(
        <>
        <Grid item xs='12' container spacing={2}>
            <Grid item lg={3} sm={6} style={{backgroundColor:"green", color:"wheat"}}><h1>Block 1</h1></Grid>
            <Grid item lg={3} sm={6} style={{backgroundColor:"green", color:"wheat"}}><h1>Block 2</h1></Grid>
            <Grid item lg={3} sm={6} style={{backgroundColor:"green", color:"wheat"}}><h1>Block 3</h1></Grid>
            <Grid item lg={3} sm={6} style={{backgroundColor:"green", color:"wheat"}}><h1>Block 4</h1></Grid>
        </Grid>
        </>
    )
}
export default GridLayout;