import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

const experienceStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 700,
      fontSize: '2rem',
      marginBottom: 15,
    },
    container: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      margin: 15,
    },
    content: {
      flexDirection: 'column',
      display: 'flex',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    imgContainer: {
      height: 56,
      width: 56,
      float: 'left',
      position: 'relative',
    },
    img: {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxSizing: 'border-box',
      backgroundClip: 'content-box',
      border: '4px solid transparent',
      borderRadius: '6px',
    },
    companyContainer: {
      flex: '1 0',
      width: 'auto',
      marginLeft: '80px',
      overflow: 'hidden',
      marginBottom: 2,
    },
    jobTitle: {
      display: 'inline',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '1px',
      marginBottom: 2,
      marginTop: 0,
      textDecoration: 'underline',
      // fontSize: 16,
      // fontWeight: 600,
      // marginBottom: 2,
      // marginTop: 0,
    },
    company: {
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '0.8px',
      marginBottom: 4,
      marginTop: 2,
      // display: 'inline',
      // fontSize: 14,
      // fontWeight: 500,
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
    flexDate: {
      fontSize: 13,
      fontWeight: 500,
      fontFamily: 'fantasy',
      color: '#535969',
      // fontStyle: 'oblique',
      marginLeft: 'auto',
      marginTop: 0,
      marginBottom: 0,
    },
    date: {
      fontSize: 10,
      marginTop: 4,
      marginBottom: 0,
    },
    city: {
      fontSize: 13,
      marginLeft: 'auto',
    },
    information: {
      fontSize: 14,
      fontWeight: 300,
      marginLeft: 79,
    },
  }),
);

export { experienceStyles };
