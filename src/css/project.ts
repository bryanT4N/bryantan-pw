import makeStyles from '@mui/styles/makeStyles';
import { createStyles } from '@mui/styles';

export const projectStyles = makeStyles(() =>
  createStyles({
    container: {
      flexDirection: 'row',
      margin: 20,
      marginLeft: 0,
      width: '100%',
      display: 'flex',
    },
    imgContainer: {
      flex: '1 1',
      marginRight: 24,
    },
    img: {
      width: 180,
      borderRadius: 6,
      border: '1px solid #e8e8e8',
      flex: '1 1',
    },
    content: {
      flex: '3.8 1',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -4,
    },
    title: {
      flex: '3 0',
      fontWeight: 800,
      letterSpacing: '0.8px',
      fontSize: 18,
    },
    description: {
      fontSize: 14,
    },
    linkContainer: {
      display: 'flex',
    },
    flexLinkContainer: {
      display: 'flex',
      marginLeft: 'auto',
    },
    link: {
      marginRight: '.7rem',
      marginLeft: '-.7rem',
      padding: '.5rem .7rem',
      color: 'blue',
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
    flexChip: {
      marginLeft: 'auto',
    }
  }),
);
