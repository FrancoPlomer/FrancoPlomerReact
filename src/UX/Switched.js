import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
        '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none',
        },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
    }))(({ classes, ...props }) => {
    return (
        <>
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
                }}
                {...props}
            />
            <AccountCircleIcon />
        </>
        );
    });
    export default function CustomizedSwitches({show}) 
    {
            const [state, setState] = useState({
            checkedB: false,
            });
            useEffect(() => {
                if (!show) {
                    setState({checkedB: false});
                }
            }, [show])
            const handleChange = (event) => {
                setState({ ...state, [event.target.name]: event.target.checked });
            };

        return (
            <FormGroup>
                <FormControlLabel
                    control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                />
            </FormGroup>
        );
    }