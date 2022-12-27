/* eslint-disable no-alert, no-console */

import { React } from "react";

function List(props) {
  const { list } = props;

  return (
    <ul>
      {list?.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default List;
