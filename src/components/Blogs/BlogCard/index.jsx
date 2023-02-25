import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function BlogCard(props) {
  return (
   <>
    <div className='databl' style={{display: "flex",  gridGap: "5rem", padding:"5rem" }}>
    {props.blogsdata.map((val, index) => {
          const {cover,heading,content } = val;
          return(
          <Card sx={{ maxWidth: 305 }}  key={index} style={{backgroundColor:"grey",color:"white", padding:"1rem"}}>
        
            <CardMedia
              component="img"
              height="140"
              image={cover}
              alt="blog"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {heading}
              </Typography>
              <Typography variant="body2" color="white">
                {content}
              </Typography>
            </CardContent>
        
        </Card>
          )
    })}
    </div>
   </>
  )
  
}

export default BlogCard