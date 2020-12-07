export default (theme) => ({
  logo: {
    width: 'calc(100% + 80px)',
    position: 'relative',
    left: -40,
    right: 40,
    top: -16,
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(0, 0, 1),
  },
});
