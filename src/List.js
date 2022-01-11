import React from 'react';

const List = ({people}) => {
  return (
    <article>
     {people.map((person)=>{
       const {id,age,image,name}=person
       return( 
         <article className='person' key={id}>
          
           <img src={image} alt={name} />
           <div>
           <h4>{name}</h4>
           <p>{age} years</p>

           </div>
         </article>
       )
     })}
    </article>
  );
};

export default List;
