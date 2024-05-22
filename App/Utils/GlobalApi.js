import { gql, request } from 'graphql-request';

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwexfewb063y07wb2ametxgx/master"

const getSlider=async()=>{
    const query = gql`
    query getSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
  `
  const result=await request(MASTER_URL, query);
  return result;
  
}
export default{
    getSlider
}