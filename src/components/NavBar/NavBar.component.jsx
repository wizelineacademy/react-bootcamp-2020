import React, { Component } from 'react';
import { connect } from "react-redux"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { styles } from './NavBarStyles';
import getVideoList from '../../providers/Video';
import { withRouter } from 'react-router-dom';
import './NavBar.styles.css';

import { Drawer } from '@material-ui/core'; 
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'; 
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import StarSharpIcon from '@material-ui/icons/StarSharp';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      user: '',
      password: '',
      searchWord: 'wizeline',
      isDrawerOpened: false
    };
    // this.setState({
    //   searchWord: 'wizeline',
    // });
    this.logIn = this.logIn.bind(this)
  }

  logIn = () => {
    this.props.dispatch({ type: 'LOGIN', payload:{userName: this.state.user, password: this.state.password}});
    // if (this.props.logged === 'logged' ) {
      this.setState({open: false});
    // }
  }

  logOut = () => {
    this.props.dispatch({ type: 'LOGOUT' });
    this.setState({open: false});
  }

  setVideos = (data) => {
    this.props.dispatch({ type: 'SET_VIDEOS', payload: data});
  }

  handleChange = (event) => {
    this.setState({
      searchWord: event.target.value,
    });
  };
  
  toggleDrawerStatus = () => { 
    this.setState({ 
      isDrawerOpened: true, 
    }) 
  } 
  closeDrawer = () => { 
    this.setState({ 
      isDrawerOpened: false, 
    }) 
  }

  render() {
    const { history } = this.props;
    const { isDrawerOpened } = this.state; 
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
          <IconButton
            onClick={this.toggleDrawerStatus}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          <MenuIcon />
          </IconButton>
          <div className={classes.search}>
          {/* <p>//{this.props.logged}--</p>
          <button onClick={() => this.logIn()}>+</button>
          <button onClick={() => this.logOut()}>-</button> */}
              <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
              <InputBase
              value={this.state.searchWord}
                onChange={this.handleChange}
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={async event => {
                  if (event.key === 'Enter') {
                    let aux = await getVideoList(this.state.searchWord);
                    this.setVideos(aux.data);
                    const { history } = this.props;
                    history.push('/');
                  }
                }}
              />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
              <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              onClick={(event) => {this.setState({anchorEl: event.currentTarget})}}
              color="inherit"
              >
              <AccountCircle />
              </IconButton>
          </div>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id='primary-search-account-menu'
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(this.state.anchorEl)}
          onClose={(event) => {this.setState({anchorEl: null})}}
          >
              {this.props.logged === 'noLogged' ? <MenuItem onClick={() => {this.setState({open: true})}}>Login</MenuItem>
              : <MenuItem onClick={() => {this.logOut()}}>Logout</MenuItem>}
        </Menu>
      
        <Modal
          open={this.state.open}
          onClose={() => {this.setState({open: false})}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div 
            style={{top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}
            className={classes.paper}>
            <h2 id="simple-modal-title">Login</h2>
        <TextField
          onChange={(event) => {this.setState({user: event.target.value})}}
          id="standard-basic" 
          label="Username" />
        <TextField
          onChange={(event) => {this.setState({password: event.target.value})}}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password" />
        <Button color="primary" className='btn' onClick={() => this.logIn()}>Login</Button>
        <Button color="primary" className='btn' onClick={() => {this.setState({open: false})}}>Cancel</Button>
          </div>
        </Modal>

        <Drawer 
          variant="temporary"
          open={isDrawerOpened} 
          onClose={this.closeDrawer} 
        > 
          <Link to='/' style={styles.link}> 
            <List> 
              <ListItem button> 
                <ListItemIcon><HomeSharpIcon/> 
                </ListItemIcon> 
                <ListItemText className='text' primary='Home' /> 
              </ListItem> 
            </List> 
          </Link> 
          {this.props.logged === 'logged' ? 
            <Link to='/favorites' style={styles.link}> 
            <List> 
              <ListItem button> 
                <ListItemIcon><StarSharpIcon/> 
                </ListItemIcon> 
                <ListItemText className='text' primary='Favorites' /> 
              </ListItem> 
              </List> 
            </Link> : '' }
        </Drawer> 
      </div>  
    );
  };
}

function mapStateToProps(state) {
  return {
    logged: state.logged
  };
}

export default withRouter(withStyles(styles, { withTheme: false })(connect(mapStateToProps)(NavBar)));