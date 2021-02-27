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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        background: '#B8E9FB',
        width: '100vw',
        maxWidth: '1630px'
    },
    outerColumn: {
        height: 100
    },
    paper2: {
        padding: theme.spacing(2),
        margin: "auto",
        background: '#D4D4D4',
        width: '100vw',
        maxWidth: '1630px'
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 100,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default function AddDatasheet() {
    const classes = useStyles();
    const [abilityOpen, setAbilityOpen] = React.useState(false);
    const [factionOpen, setFactionOpen] = React.useState(false);
    const [keywordOpen, setKeywordOpen] = React.useState(false);
    const [loadoutOpen, setLoadoutOpen] = React.useState(false);
    const [abilityName, setAbilityName] = React.useState("");
    const [abilityText, setAbilityText] = React.useState("");
    const [abilityNames] = React.useState([]);
    const [abilityTexts] = React.useState([]);
    const [abilities] = React.useState([]);


    function Ability(name,text){
        this.name = "";
        this.text = "";
    }

    const handleClickFactionOpen = () => {
        setFactionOpen(true);
    };

    const handleFactionClose = () => {
        setFactionOpen(false);
    };
    const handleClickAbilityOpen = () => {
        setAbilityOpen(true);
    };

    const handleAbilityClose = () => {
        setAbilityText("");
        setAbilityName("");
        setAbilityOpen(false);
    };

    const handleClickKeywordOpen = () => {
        setKeywordOpen(true);
    };

    const handleKeywordClose = () => {
        setKeywordOpen(false);
    };

    const handleAbilityName = e => {
        setAbilityName(e.target.value);
    };

    const handleAbilityText = e =>{
        setAbilityText(e.target.value);
    };

    const handleAbilityCloseAdd = () => {
        if(!abilityName || !abilityText) {
            console.log("empty")
        } else{
            abilityTexts.push(abilityText);
            abilityNames.push(abilityName);
            let i = 0;
            for (i in abilityTexts){
                let x = new Ability();
                x.name = abilityNames[i];
                x.text = abilityTexts[i];
                abilities.push(x);
            }
            let j = 0;
            for (j in abilities){
                console.log(abilities[j].name);
                console.log(abilities[j].text);
            }
        }
        setAbilityText("");
        setAbilityName("");
        setAbilityOpen(false);
    };

    const handleLoadoutOpen = () =>{
        setLoadoutOpen(true);
    };
    const handleLoadoutClose = () =>{
        setLoadoutOpen(false);
    };


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
                                                onClick={() => {  window.location.reload(false) }}>Cancel</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper2}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item xs>
                                        <h2>Enter the information for your unit here</h2>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                        spacing={1}
                                    >
                                        <Grid item xs={3}>
                                            <h3>Name</h3>
                                            <TextField id="unit-name" style={{minWidth:'407px'}} variant="outlined"
                                                       size="normal"/>
                                        </Grid>
                                        <Grid item xs spacing={0}>
                                            <h3>Battlefield Role</h3>
                                            <FormControl variant="filled" className={classes.formControl}>
                                                <InputLabel
                                                    id="battlefield-role-select"
                                                    style={{minWidth:"300px"}}
                                                >
                                                    Battlefield Role
                                                </InputLabel>
                                                <Select
                                                    id="battlefield-role"
                                                    style={{minWidth:"150px"}}
                                                >
                                                    <MenuItem value={"HQ"}>HQ</MenuItem>
                                                    <MenuItem value={"Troops"}>Troops</MenuItem>
                                                    <MenuItem value={"Elites"}>Elites</MenuItem>
                                                    <MenuItem value={"Fast Attack"}>Fast Attack</MenuItem>
                                                    <MenuItem value={"Heavy Support"}>Heavy Support</MenuItem>
                                                    <MenuItem value={"Flyer"}>Flyer</MenuItem>
                                                    <MenuItem value={"Dedicated Transport"}>Dedicated Transport</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <h3>Characteristics</h3>
                                        <Grid container direction={"row"} spacing={1}>
                                            <Grid item>
                                                <TextField id="No." label= "No." variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="M" label= "M" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <FormControl variant="filled" className={classes.formControl}>
                                                    <InputLabel id="WS">WS</InputLabel>
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
                                                    <InputLabel id="BS">BS</InputLabel>
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
                                                <TextField id="S" label= "S" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="T" label= "T" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="W" label= "W" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="A" label= "A" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="Ld" label= "Ld" variant="filled"
                                                           style={{maxWidth:'100px'}}  />
                                            </Grid>
                                            <Grid item>
                                                <FormControl variant="filled" className={classes.formControl}>
                                                    <InputLabel id="Sv">Sv</InputLabel>
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
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <h3>Abilities</h3>
                                        <Button variant="contained" color="primary" href="#outlined-buttons"
                                                onClick={handleClickAbilityOpen}>Add Ability</Button>
                                        <Dialog open={abilityOpen} onClose={handleAbilityClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Add Ability</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    To add an ability to this datasheet fill out this form
                                                </DialogContentText>
                                                <TextField
                                                    required
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="Ability Name"
                                                    value = {abilityName}
                                                    onChange={handleAbilityName}
                                                    fullWidth
                                                />
                                                <TextField
                                                    required
                                                    autoFocus
                                                    margin="dense"
                                                    id="text"
                                                    label="Ability Text"
                                                    value={abilityText}
                                                    onChange={handleAbilityText}
                                                    fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleAbilityCloseAdd} color="primary" >
                                                    Add
                                                </Button>
                                                <Button onClick={handleAbilityClose} color="primary">
                                                    Cancel
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Grid>
                                    <Grid item>

                                    </Grid>
                                    <Grid item xs ={1}>
                                        <h3>Keywords</h3>
                                        <p>Faction Keywords</p>
                                        <Button variant="contained" color="primary" href="#outlined-buttons"
                                                onClick={ handleClickFactionOpen } style={{minWidth:"210px"}}>
                                            Add Faction Keyword
                                        </Button>
                                        <Dialog open={factionOpen} onClose={handleFactionClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Add Faction Keyword</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    To add a faction keyword to this datasheet fill out this form
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="Faction Keyword"
                                                    fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleFactionClose} color="primary">
                                                    Add
                                                </Button>
                                                <Button onClick={handleFactionClose} color="primary">
                                                    Cancel
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Grid>
                                    <Grid item>
                                        <p>Keywords</p>
                                        <Button variant="contained" color="primary" href="#outlined-buttons"
                                                onClick={ handleClickKeywordOpen }>Add Keyword</Button>
                                        <Dialog open={keywordOpen} onClose={handleKeywordClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Add Ability</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    To add a faction keyword to this datasheet fill out this form
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="Keyword"
                                                    fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleKeywordClose} color="primary">
                                                    Add
                                                </Button>
                                                <Button onClick={handleKeywordClose} color="primary">
                                                    Cancel
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                        <Grid item>
                                            <h3>Loadout Options</h3>
                                            {/* This is the most complicated part need to think on it some,
                                             will probably need to implement the AWS database to make it
                                             work correctly*/}
                                            <Button variant="contained" color="primary" href="#outlined-buttons"
                                                    onClick={ handleLoadoutOpen }>Add Option</Button>
                                            <Dialog open={loadoutOpen} onClose={handleLoadoutClose} aria-labelledby="form-dialog-title">
                                                <DialogTitle id="form-dialog-title">Add Option</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        To add a loadout option fill out this form
                                                    </DialogContentText>
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="Option-name"
                                                        label="Name"
                                                        fullWidth
                                                    />
                                                    <FormControl
                                                        variant="filled"
                                                        className={classes.formControl}
                                                        fullWidth
                                                    >
                                                        <InputLabel id="type">Option Type</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-filled-label"
                                                            id="Option Type"
                                                        >
                                                            <MenuItem value={"Melee Weapon"}>Melee Weapon</MenuItem>
                                                            <MenuItem value={"Shooting Weapon"}>
                                                                Shooting Weapon
                                                            </MenuItem>
                                                            <MenuItem value={"Other"}>Other</MenuItem>
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <p>Limits</p>
                                                    <Button variant="contained" color="primary">
                                                        Add Limit
                                                    </Button>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleLoadoutClose} color="primary">
                                                        Add
                                                    </Button>
                                                    <Button onClick={handleLoadoutClose} color="primary">
                                                        Cancel
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Grid>
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

