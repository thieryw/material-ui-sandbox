import React from "react";
import {Button, makeStyles, Theme} from "@material-ui/core";


type Props = {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
} & Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
    backgroundColor: "red" as "red" | "blue" | "purple",
    border: "solid red 2px" as "solid red 2px" | "solid black 1px",
    disabled: false
}


const useStyles = makeStyles<Theme, Props>(theme =>({
    buttonStyle: (props: Props) =>{
        return{
            "backgroundColor": props.backgroundColor,
            "border": props.border,
            [theme.breakpoints.up("sm")]: {
                "color": "blue"
            },
            "&:hover": {
                "backgroundColor": "black"
            },

            "&:disabled": {
                "backgroundColor": "black",
                "color": "orange"
            }
            
            
        }
    }
}));


export const MyButton2: React.FunctionComponent<Props> = props=>{
    const classes = useStyles(props);

    return(
        <Button
            disabled={props.disabled}
            className={classes.buttonStyle}
            onClick={props.onClick}
            variant="contained"
            color="primary"
        >
            MyButton2

        </Button>
    )
}

MyButton2.defaultProps = defaultProps;
    