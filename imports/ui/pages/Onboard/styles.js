const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 100,
    margin: 'auto',
    maxWidth: 800
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    border: '1px solid #D3D3D3',
    borderBottom: 0,
    borderRadius: 0,
    boxShadow: 'none',
    padding: '50px 40px',
    paddingBottom: 36,
    width: '100%'
  },
  img: { height: 'auto', width: 100 },
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    textAlgin: 'center'
  },
  subTitle: { fontSize: '1.2rem', fontWeight: 500, textAlgin: 'center' },

  stepper: {
    border: '1px solid #D3D3D3',
    borderTop: 0,
    padding: '50px 40px',
    paddingTop: 0
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  backButton: {
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit
  },
  button: {
    // color: 'white',
    fontWeight: 500,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit
  },
  label: {
    // color: 'white'
  }
});

export default styles;
