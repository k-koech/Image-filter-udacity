import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { V0MODELS } from './controllers/model.index';
import { sequelize } from './sequelize';
import { IndexRouter } from './controllers/index.router';
import { requireAuth } from './controllers/users/routes/auth.router';

require('dotenv').config();

(async () => {
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  app.use('/api/', IndexRouter)


  app.get("/filteredimage/",requireAuth, async(req,res)=>{

    let {image_url}: any = req.query;
    if( !image_url ) {
      return res.status(400)
                .send(`Image is required!!`);
    }
    else
    {
        filterImageFromURL(image_url)
        .then((result)=>{
          res.sendFile(result);
          res.on(`finish`,()=>deleteLocalFiles([result]));
        })
        .catch((err)=>res.status(400).send(err))
    }
  } );


  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();



 // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  
  //! END @TODO1