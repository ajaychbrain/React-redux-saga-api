 export const productAPiData =  async()  => {
        try {
            return await fetch(`https://fakestoreapi.com/products`).then((response) =>
             response.json()
          );

        } 
        catch(error){
            console.log(error);
        }
  }