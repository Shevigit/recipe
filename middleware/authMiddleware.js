app.use((Error,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke')
});
