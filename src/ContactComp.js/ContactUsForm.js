import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";

const ContactForm = () => {
    return (
        <>
            <Typography align="center">React app with MUI</Typography>
            <Card style={{maxWidth:450, margin:"0 auto", padding:'20px 5px'}}>
                <CardContent>
                    <Typography variant="h5">Contact us</Typography>
                    <Typography color="secondary" >Fill up the form to Contact us</Typography>
                    <form>
                    <Grid container spacing={1} >
                        <Grid xs={12} sm={6} item>
                            <TextField label='First Name' placeholder="Enter first name" variant="outlined" fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label='Last Name' placeholder="Enter last name" variant="outlined" fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField type='email' label='Email' placeholder="Enter email" variant="outlined" fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField type='number' label='Phone' placeholder="Enter phone number" variant="outlined" fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label='Message' multiline rows={4} placeholder="Enter your message" variant="outlined" fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} item >
                            <Button type="submit" color="primary" variant="outlined" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
            </Card>

        </>
    )
}
export default ContactForm;