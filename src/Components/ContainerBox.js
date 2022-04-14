import { Container } from "@material-ui/core"

const ContainerBox=()=>{
    return(
        <>
        <Container maxWidth='xs' style={{backgroundColor:"blue"}}>
            <h1>This is container with MUI</h1>
        </Container>
        <Container maxWidth='sm' style={{backgroundColor:"blue"}}>
            <h1>This is container with MUI</h1>
        </Container>
        <Container maxWidth='md' style={{backgroundColor:"blue"}}>
            <h1>This is container with MUI</h1>
        </Container>
        <Container maxWidth='lg' style={{backgroundColor:"blue"}}>
            <h1>This is container with MUI</h1>
        </Container>
        <Container fixed style={{backgroundColor:"blue"}}>
            <h1>This is container with MUI</h1>
        </Container>
        
        </>
    )
}
export default ContainerBox;