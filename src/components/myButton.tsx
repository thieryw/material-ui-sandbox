import React from "react";
import {Button, makeStyles, Theme} from "@material-ui/core";



type Props ={
    backgroundColor: "red" | "blue" | "purple";
    border: "solid red 2px" | "solid black 1px";
}

const useStyles = makeStyles<Theme, Props>(theme => ({

    buttonStyle: props => {
        return {
            "backgroundColor": props.backgroundColor,
            "border": props.border,
            [theme.breakpoints.up("sm")] : {
                "color": "blue"
            },

            "&:hover": {
                backgroundColor: "black"
            },

            "&:disabled": {
                backgroundColor: "black",
                color: "orange"
            }
            

            
        }
    }
}));


export const MyButton: React.FunctionComponent<Props & {disabled?: boolean}> = props=>{

    const classes = useStyles(props);

    return(

        <Button 
            disabled={props.disabled} 
            className={classes.buttonStyle} 
            variant="contained" 
            color="primary"
        >
            My Button
        </Button>

    )
}









