import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
export default function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
    </div>
  );
}
