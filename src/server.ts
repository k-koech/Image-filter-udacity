import express from 'express';
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
 
  app.get("/filteredimage",async(req:express.Request,res:express.Response)=>{

    let image_url =String(req.query.image_url)    
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
    res.send( "Filter your image" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();