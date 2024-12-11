// import React from 'react'

const CommentsList = () => {
  const comments = [
    {
      id: 0,
      comment: "عالیه",
      name: "Ali",
    },
    {
      id: 1,
      comment: "موافقم",
      name: "Mani",
    },
    {
      id: 2,
      comment: "جالبه",
      name: "shiva",
    },
    {
      id: 3,
      comment: "موافق نیستم",
      name: "saba and samin",
    },
  ];
  return (
    <div className=" flex flex-col w-full h-[300px] place-content-center place-items-center bg-blue-200 mt-[50px] ">
      {comments?.map((item, index) => {
        return (
          <section className=" rtl text-right" key={index}>
            <h1> {item.name} </h1>
            <div
              id={`${item.id}cmnt`}
              onClick={() =>
                (document.getElementById(`${item.id}cmnt`).contentEditable =
                  "true")
              }
              className=" text-right my-2 w-[150px] bg-green-200 border border-black  "
            >
              {item.comment}
              <hr className=" bg-black text-black h-[2px] " />
            </div>
          </section>
        );
      })}
      {/* 0cmnt
            1cmnt
            2cmnt
            3cmnt
         */}
    </div>
  );
};

export default CommentsList;
