import React from 'react'
import "./style.css"
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




const Commoncard = (props) => {
  
  const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};
  const {title, flag, description,url} = props;
     const location= useLocation()

  return (
    <Card sx={{ maxWidth: 345 , marginY:4}}>
  
  {flag &&  <CardMedia
      component="img"
      height="194"
      image={flag}
      alt="Paella dish"
    /> }
    <CardContent>
      <Typography variant='h5'>{title}</Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      {url? <a href={url}><button className='btn btn-primary'>Read more</button></a>:""}
      </IconButton>
     
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Content:</Typography>
        <Typography paragraph>
        {description}
        </Typography>
        
      </CardContent>
    </Collapse>
  </Card>
  )
}

export default Commoncard
