import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
    title: {
        margin: '4 0 2'
    },
}));

export default function LandlordInfo({currentStep}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        company: '',
        fullName: '',
    })

    const handleChange = (event) => {
        setState({...state, [event.target.id]: event.target.value})
    }

    const render = () => {
        if (currentStep !== QualificationSteps.GOVERNMENT_HELP) {
            return null
        }

        const {company, fullName} = state;
        return (<React.Fragment>
            <Typography variant="h6" className={classes.title}>
                Enter your landlord's information
            </Typography>
            <Typography variant='body1'>
                This information will determine where your letter is sent. You can send this information to go
                to your landlord, the owner of the property where you live, or another person who has the right
                to have you evicted or removed from where you live. If you are unsure where to send this notice,
                please look at your lease or ask your landlord where you may send a legal notice.
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <TextField id="company" label="company" value={company} onChange={handleChange}
                               variant={"outlined"}/>
                    <TextField id="fullName" label="fullName" value={fullName} onChange={handleChange}
                               variant={"outlined"}/>
                </FormGroup>
            </FormControl>
        </React.Fragment>)
    }

    return render();
}

LandlordInfo.propTypes = {
    currentStep: PropTypes.number,
}
