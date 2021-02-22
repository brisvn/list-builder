import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        background: '#B8E9FB',
        width: '100vw',
        maxWidth: '1650px'
    },
    outerColumn: {
        height: 100
    },
    paper2: {
        padding: theme.spacing(2),
        margin: "auto",
        background: '#D4D4D4',
        width: '100vw',
        maxWidth: '1650px'
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 100,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className="App">
            <h1>New Datasheet</h1>
            <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
                <div className={classes.root}>
                    <Grid container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          spacing={1}
                    >
                        <Grid item>
                            <Paper className={classes.paper}>
                                <h2>Create New Datasheet</h2>
                                <p>A Datasheet shows what your models can do, on this page you will use your codex to
                                    import your models into the app</p>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-end"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <Grid item>
                                        <Button variant="contained"  color="primary" href="#outlined-buttons"
                                                onClick={() => { alert('clicked') }}>Save</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary" href="#outlined-buttons"
                                                onClick={() => {  }}>Cancel</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper2}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <h2>Enter the information for your unit here</h2>
                                    </Grid>
                                    <Grid container direction="row" spacing={1}>
                                        <Grid item>
                                            <h3>Name</h3>
                                            <TextField id="unit-name" style={{maxWidth:'100vw'}} variant="outlined"
                                                       size="small"/>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <h3>Characteristics</h3>
                                        <Grid container direction={"row"} spacing={1}>
                                            <Grid item>
                                                <TextField id="outlined-basic" label= "No." variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="outlined-basic" label= "M" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <FormControl variant="filled" className={classes.formControl}>
                                                    <InputLabel id="demo-simple-select-filled-label">WS</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-filled-label"
                                                        id="demo-simple-select-filled"
                                                    >
                                                        <MenuItem value={"2+"}>2+</MenuItem>
                                                        <MenuItem value={"3+"}>3+</MenuItem>
                                                        <MenuItem value={"4+"}>4+</MenuItem>
                                                        <MenuItem value={"5+"}>5+</MenuItem>
                                                        <MenuItem value={"6+"}>6+</MenuItem>
                                                        <MenuItem value={"-"}>-</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <FormControl variant="filled" className={classes.formControl}>
                                                    <InputLabel id="demo-simple-select-filled-label">BS</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-filled-label"
                                                        id="demo-simple-select-filled"
                                                    >
                                                        <MenuItem value={"2+"}>2+</MenuItem>
                                                        <MenuItem value={"3+"}>3+</MenuItem>
                                                        <MenuItem value={"4+"}>4+</MenuItem>
                                                        <MenuItem value={"5+"}>5+</MenuItem>
                                                        <MenuItem value={"6+"}>6+</MenuItem>
                                                        <MenuItem value={"-"}>-</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <TextField id="outlined-basic" label= "S" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="outlined-basic" label= "T" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="outlined-basic" label= "W" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="outlined-basic" label= "A" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="outlined-basic" label= "Ld" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <FormControl variant="filled" className={classes.formControl}>
                                                    <InputLabel id="demo-simple-select-filled-label">Sv</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-filled-label"
                                                        id="demo-simple-select-filled"
                                                    >
                                                        <MenuItem value={"2+"}>2+</MenuItem>
                                                        <MenuItem value={"3+"}>3+</MenuItem>
                                                        <MenuItem value={"4+"}>4+</MenuItem>
                                                        <MenuItem value={"5+"}>5+</MenuItem>
                                                        <MenuItem value={"6+"}>6+</MenuItem>
                                                        <MenuItem value={"7+"}>7+</MenuItem>
                                                        <MenuItem value={"-"}>-</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <h3>Abilities</h3>
                                    </Grid>
                                    <Grid item>
                                        <h3>Keywords</h3>
                                    </Grid>
                                    <Grid item>
                                        <p>Faction Keywords</p>
                                    </Grid>
                                    <Grid item>
                                        <p>Keywords</p>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

