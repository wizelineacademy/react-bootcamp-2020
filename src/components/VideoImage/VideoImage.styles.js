import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    height: `${props.height}px`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  }),
  button: (props) => {
    const { isSelected } = props;
    const textColor = isSelected ? { color: '#2893E9' } : { color: 'white' };
    return {
      ...textColor,
      position: 'absolute',
      top: theme.spacing(1) / 2,
      right: theme.spacing(1) / 2,
      backgroundColor: 'black',
      minWidth: 'auto',
      borderRadius: 0,
      '&:hover': {
        backgroundColor: 'black',
      },
      '&:hover span[data-testid=buttonText]': {
        maxHeight: 20,
        width: 'auto',
        marginRight: 4,
      },
    };
  },
  icon: {
    // marginLeft: theme.spacing(1),
  },
  text: {
    display: 'inline-block',
    width: 0,
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'max-width 0.5s, width  0.5s, max-height 0.5s',
  },
}));

export default useStyles;
