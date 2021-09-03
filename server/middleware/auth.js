import jwt from 'jsonwebtoken'



const auth = async (req,res,next) => {
    try {
        {/* from HTTP headers MESSAGE to get the authorization header, 
        and we want to split the value of authorization header into an array by space and get the token 
        at the first index of that array*/}
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if(token && isCustomAuth){
            //jwt.verify returns the payload decoded
            decodedData = jwt.verify(token, 'test');
            console.log(decodedData);
            //req.userId is not retrieving any the value from the HTTP content, it sets a property for the HTTP content instead
            req.userId = decodedData?.id;
        }
        else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;