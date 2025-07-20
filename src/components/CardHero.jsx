import React from "react";

const CardHero = () => {
  return (
    <div className="col-span-4 row-span-4 mx-auto">
      <img
        src="https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
        className="object-cover rounded-md mx-auto mb-3 shadow-sm mt-9"
      />
      <div className="px-8">
        <h3 className="text-sm text-blue-600 font-semibold">By John Doe</h3>
        <h1 className="text-lg leading-6 font-semibold ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sunt ad libero maxime dignissimos eius inventore hic itaque tempore,
          quis error. Commodi maiores sint excepturi.
        </h1>
      </div>
    </div>
  );
};

export default CardHero;
