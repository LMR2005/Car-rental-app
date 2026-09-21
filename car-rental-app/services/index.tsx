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

export const getStoreLocations = async () => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

  const query = gql`
  query storeLocation {
  storeLocations(where: {}) {
    address
  }
}
  `

  const result = await request(endpoint, query);
  return result;
}

export const createBooking = async (formValue:any) => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

  const carId =
    typeof formValue.carId === "object"
      ? formValue.carId?.connect?.id || formValue.carId?.id
      : formValue.carId;

  const mutationQuery = gql`
  mutation MyMutation {
  createBooking(
    data: 
    {carId: {connect: 
      {id: "${carId}"}}, 
      contactNumber: "`+formValue.contactNumber+`", 
      dropOffDate: "`+formValue.dropOffDate+`", 
      dropOffTime: "`+formValue.dropOffTime+`", 
      pickUpDate: "`+formValue.pickUpDate+`", 
      pickUpTime: "`+formValue.pickUpTime+`", 
      userName: "`+formValue.userName+`"}
  ) {
    id
  }
}
  `;

  const result=await request(endpoint, mutationQuery);
  return result;
}