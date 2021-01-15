import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
  },
  picture: {
    height: '50vh',
  },
  title: {
    fontSize: 20,
  },
});

export default function Coffee() {
  const classes = useStyles();
  const [inCart, setInCart] = React.useState(0);
  const addToCart = (n=1) => setInCart(inCart+n);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.picture}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG"
        title="Coffee"
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Black coffee
        </Typography>
        <Typography variant="body2" component="p">
          Great to wake up
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
            aria-label="Add to cart"
            color="primary"
            onClick={() => addToCart()}>
          <Badge badgeContent={inCart} color="secondary">
            <AddShoppingCartIcon/>
          </Badge>
        </IconButton>
        <IconButton
          aria-label="Remove from cart"
          color="secondary"
          disabled={inCart===0}
          onClick={() =>setInCart(0)}
          ><RemoveShoppingCartIcon/></IconButton>
      </CardActions>
    </Card>
  );
}