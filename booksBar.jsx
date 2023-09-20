import React, { useState, useEffect } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";




export function BookBar({ terror, nombre }) {
 

  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState(0); // Añadí un estado para el índice actual de los libros

  useEffect(() => {
    setBooks(terror);
  }, []);


  // Añadí una función para mover el índice a la izquierda
  const moveLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // Añadí una función para mover el índice a la derecha
  const moveRight = () => {
    if (index < books.length - 9) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="mx-3">
      <p className="pt-2 pb-1 tracking-[3px] text-md ">{nombre}</p>
      <hr class="border-t-2 border-gray-400 w-full mb-1" />

      <div className="flex items-center justify-between">
        <button
          onClick={moveLeft}
          type="button"
          className="text-black bg-black-700 hover:bg-gray-300
          focus:outline-none 
          font-medium rounded-full p-2.5 text-center 
          inline-flex items-center mx-auto my-auto dark:bg-blue-600 
          dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden sm:block m-3 mr-1 text-lg"
        >
          <LuChevronLeft />{" "}
        </button>

        <ul className="flex gap-2 mt-1 mx-auto flex-x-auto overflow-x-auto no-scrollbar">
          {books.slice(index, index + 9).map((book, index) => (
            <li className="group" key={index}>
              
              <a href="">
                <img
                
                  src={book.imagen}
                  alt=""
                  className="h-[100px] w-[69px] object-cover transition duration-500 group-hover:scale-105 rounded-lg mx-auto"
                />

                <div>
                  <h3 className="text-[8px] text-center text-gray-700 group-hover:underline group-hover:underline-offset-4 w-[80px] truncate mt-1 font-bold">
                    {book.nombre}
                  </h3>
                </div>
                </a>
               
            </li>
          ))}
        </ul>
        <button
          onClick={moveRight}
          type="button"
          className="text-black bg-black-700 hover:bg-gray-300
          focus:outline-none 
          font-medium rounded-full p-2.5 text-center 
          inline-flex items-center mx-auto my-auto dark:bg-blue-600 
          dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden sm:block m-3 text-lg"
        >
          <LuChevronRight />{" "}
        </button>
      </div>
    </div>
  );
}
