import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#fff',
        color: '#323233',
        '& a':{
            color: '#323233',
            marginLeft: 10
        },
    },
    main:{
        minHeight: '80vh'
    },
    footer:{
        textAlign: 'center'
    }
});

export default useStyles;