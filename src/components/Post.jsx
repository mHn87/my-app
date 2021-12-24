import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2)

  },

  media: {
    height:"426px",
    [theme.breakpoints.down("sm")]:{
      height:"213px"
    }
  },

  card: {
    marginBottom: theme.spacing(5)
  },



}))


function Post() {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
         className={classes.media}
         image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
         title = "پســت اول"
         />
         <CardContent>
           <Typography gutterBottom variant="h5">پســــت شماره 1</Typography>
           <Typography variant="body">در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم؛ از این طریق می‌توانید متن آزمایشی و متن تستی خودتان را تایپ کرده و تان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شوتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شودر طرح‌هایتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شود.</Typography>
         </CardContent>
         <CardActions>
           <Button size="small" color="primary">بیشتــــر</Button>
           <Button size="small" color="primary">اشتــراک گـذاری</Button>
         </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default Post;
