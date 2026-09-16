import { request, gql } from "graphql-request";

export interface Car {
  id: string;
  name: string;
  price: number;
  carAvg: number | string;
  carBrand: string;
  carType: string;
  image: {
    url: string;
  };
}
const GET_CARS = gql`
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
}`;

export const getCarsList = async (): Promise<Car[]> => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

  try {
    const result = await request<{ carLists: Car[] }>(endpoint, GET_CARS);
    return result.carLists;
  } catch (error) {
    console.error("Error fetching car list:", error);
    return [];
  }
};