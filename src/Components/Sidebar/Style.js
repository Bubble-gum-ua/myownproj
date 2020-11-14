import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    button: {
        backgroundColor: "yellow",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px",
        color: "blue",
        padding: "10px 50px 10px 5px",
        margin: "0",
        width: 100,
        textAlign: "left",
        fontWeight: "bold",


    },
    sidebar: {
        textAlign: "left",
        fontWeight: "bold",
        lineHeight: 2,

    },
    a: {
        '&:hover': {
            fontSize: 20,
            fontWeight: "bold",
            background: "yellow", /* Цвет фона */
            boxShadow: "0 0 5px rgba(0, 0, 1, 1)", /* Параметры тени */
            padding: "5px",
            textAlign: "left",
        }

    },

});

export default useStyles;

