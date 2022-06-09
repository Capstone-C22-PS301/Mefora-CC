/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 exports.helloWorld = (req, res) => {
    const url = 'https://us-central1-aiplatform.googleapis.com/v1/projects/graceful-ratio-351309/locations/us-central1/endpoints/6984687197865639936:predict';
    const targetAudience = "https://us-central1-graceful-ratio-351309.cloudfunctions.net";
    const {GoogleAuth} = require('google-auth-library');
    const auth = new GoogleAuth();
    const fakeData = {
    "instances":[
    {
    "Disease":"pregnancy",
    "User_Id":"user_105"
    }]
    }
    let resClient
    
    async function request() {
      try{
      console.info("sampai sini")
      const client = await auth.getIdTokenClient(targetAudience);
      console.log(client);
      resClient = await client.request({url, body: fakeData});
      console.info(resClient.data.authenticationInfo)
      return resClient
      }catch(err){
        res.status(500).send(err)
      }
    }
    
    request().then((data)=>{
      res.status(200).send(data)
    }).catch(err => {
      console.error(err.message);
      process.exitCode = 1;
    });
    };
    