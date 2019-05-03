import { useEffect, useState } from "react";

/**
 *
 * @param {string} selectedFloor Comes from select
 * @param {*} getRooms This is just API
 *
 */
export const useGetRooms = (selectedFloor, getRooms) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  /**
   * useEffect тригеррится только тогда когда меняется 2-ой аргумент [selectedFloor]
   */
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getRooms(selectedFloor);
      setRooms(response.data);
      setLoading(false);
    })();
  }, [selectedFloor]); // Триггеры на которые будут дергаться API

  return [rooms, isLoading];
};

export const useField = defaultValue => {
  const [value, handleChange] = useState(defaultValue);
  return [value, handleChange];
};
