import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export default function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map(dog => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    </div>
  );
}
