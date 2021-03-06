import React from 'react';
import './App.scss';
import {Button, Typography} from "@material-ui/core";
//import {styledTyped} from "./util/styledTyped";
import {ThemeProvider, makeStyles} from "@material-ui/core/styles";
import {theme, theme2} from "./theme";
import {ExampleWithAnimation} from "./components/ExampleWithAnimation";
import {MyButton} from "./components/myButton";
import {MyButton2} from "./components/myButton2";

const useStyles = makeStyles({
  titleStyle: {
    color: "blue",
    fontSize: "3em",
    fontStyle: "italic"
  },

  personalButtonStyle: {
    color: "purple",
    fontStyle: "oblique",
    border: "solid red 2px",
    backgroundColor: "black",
    transition: "none",
    "&:hover": {
      backgroundColor: "green"
    }

  }
});




export const App: React.FunctionComponent = ()=>{

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography color="secondary" className={classes.titleStyle} variant="h1">Material UI Sandbox</Typography>

        <ThemeProvider theme={theme2}>
          <div className="buttons-1">
            <Button>Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="outlined" color="primary">primary outlined</Button>
            <Button variant="outlined" color="secondary">secondary outlined</Button>
          </div>
        </ThemeProvider>

        <div className="buttons-2">
          <Button fullWidth variant="contained" color="primary">full width</Button>
          <Button fullWidth variant="contained" color="secondary">full width</Button>
        </div>

        <div className="button-3">
          <Button className={classes.personalButtonStyle}>Personal Button</Button>
        </div>

        <Typography>
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
          lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,lorem lipsum,
        </Typography>


        <ExampleWithAnimation />


        <MyButton backgroundColor="red" border="solid black 1px" />


        <MyButton disabled backgroundColor="purple" border="solid red 2px" />

        {/* Button with default Props */}

        <MyButton2
          onClick={()=> alert("some sort of action")}
        />

        {/* Button with default props overridden */}

        <MyButton2
          onClick={()=> alert("some sort of action")} 
          backgroundColor="purple"
          border="solid black 1px"

        />






      </div>
    </ThemeProvider>
    
  )
}


