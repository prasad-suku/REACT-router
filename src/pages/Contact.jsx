import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Contact() {
  return (
    <>
    <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt quam ipsam ab, cum similique eius aliquid voluptas dicta vel error facere autem suscipit hic, optio porro voluptatum, delectus earum expedita quis doloremque est ullam! Eveniet optio itaque delectus dolorum inventore voluptates excepturi incidunt laborum reprehenderit, illum, quaerat quidem! Sit temporibus aliquam architecto recusandae perspiciatis aperiam autem nulla explicabo libero quo a commodi voluptas deserunt, aspernatur inventore vel et vitae unde ad facere tempora saepe suscipit asperiores mollitia! Quasi, nemo. Voluptatum accusantium nostrum vel, dolore quas illum modi. Maiores atque eaque exercitationem, amet dolores sunt accusamus suscipit reprehenderit corrupti delectus repellendus magni dicta, inventore reiciendis explicabo velit! Aperiam laborum ex assumenda optio eaque quasi. Quam earum, rerum aut maiores hic, enim ex deserunt ducimus similique provident velit! Temporibus id ratione labore maxime placeat non porro nesciunt dicta accusantium a dolor deleniti fugiat ea dignissimos obcaecati, quia quis voluptatibus, laboriosam vero modi necessitatibus? Soluta, fuga unde ullam nihil laudantium esse et alias quae corporis cupiditate optio voluptatibus vero accusantium voluptates! Eius quam atque ea accusamus necessitatibus quibusdam cupiditate inventore eum magni eaque, ipsam nostrum quos? Illum totam necessitatibus architecto aut, odit voluptates, ex in suscipit iusto minima odio nihil! At, veniam!</p>
     
     <button><Link to="/email">Email to</Link></button>
     <button><Link to="/">feedback</Link></button>
     <Link to='post/1'>post 1</Link>
     <Link to='post/2'>post 2</Link>
     <Link to='post/3'>post 3</Link>
  </>

  )
}

export default Contact