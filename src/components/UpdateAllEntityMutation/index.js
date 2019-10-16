import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const GET_TODOS = gql`
  query GetTodos {
    todos
  }
`;
const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
// *********************************
// Multiple Entities Update Todo
// **********************************
export default function UpdateAllEntity() {
  let input;
  const [addTodo] = useMutation(ADD_TODO, {
    update(
      cache,
      {
        data: { addTodo }
      }
    ) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addTodo]) }
      });
    }
  });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
