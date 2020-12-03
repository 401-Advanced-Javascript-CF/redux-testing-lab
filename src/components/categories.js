import React from 'react';
import { selectCategory } from '../store/categories.js';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
function Categories(props){
let stuff = props.category.category.map((idk, index) => <li><a key={index} href="#" onClick={()=> props.selectCategory(idk)} >{idk.displayName}</a></li>);
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const classes = useStyles();
return (
    <>
    {stuff}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {props.category.active.displayName}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {props.category.active.description}
            </Typography>
          </Container>
          </div>
          </main>
          </>

  );
    {/* // return (
    //     <div>
    //     <ul>
    //             {stuff}
    //     </ul>
    // <h1>{props.category.active.displayName}</h1>
    // <p>{props.category.active.description}</p>
    //     </div>
    // ) */}
}
const mapStateToProps = (state) => ( {
  category: state.category
})

const mapDispatchToProps = {selectCategory}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);