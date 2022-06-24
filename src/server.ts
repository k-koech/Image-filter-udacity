import express from 'express';
import { sequelize } from './sequelize';
import bodyParser from 'body-parser';
import { deleteLocalFiles, filterImageFromURL } from './util/util';
import { VoiceId } from 'aws-sdk/clients/polly';

require('dotenv').config();

(async () => { 
  const app = express();
  const port = process.env.PORT || 8082; // default port to listen
  
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use('/api/', IndexRouter)
  
  app.get("/filteredimage",async(req,res)=>{

    let image_url = "Golden_tabby_and_white_kitten_n01.jpg"
    
    if( image_url ) 
    {
      filterImageFromURL(image_url)
      .then((result)=>{
        res.sendFile(result);
        res.on(`finish`,()=>deleteLocalFiles([result]));
      })
      .catch((err)=>res.status(400).send(err))
     
    }
    else
    {
      return res.status(400)
      .send(`Image is required!!`);
    }
  } );
  
  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();