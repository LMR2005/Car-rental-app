import { gql, request } from "graphql-request";

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/cmtfwc8yb01vp06w2pvxm4kdi/master';

export const getCarsList = async () => {
    const query = gql`
    query CarLists {
  carLists {
    id
    name
    price
    carAvg
    carBrand
    carType
    image {
      url
    }
  }
}`
    const result: any = await request(MASTER_URL,query);
    return result;
};