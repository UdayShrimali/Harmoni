// import React from 'react'

// function Exusestat() {
//   return (
//     <div className='userlist'>
//     <div className='colorwhite'>
//       <table className='alluser bg-white text-black'>
//         <thead>
//           <tr className='userheader'>
//             <th>fullName</th>
           
//             <th>Email</th>
           
//             <th className=''>password</th>
           
//           </tr>
//         </thead>
//         <tbody>
//           { [
//             { fullName: "Demo", email: 'mailto:user1@gmail.com', password: '123' },
//             { fullName: "Demo1", email: 'mailto:user1@gmail.com', password: '123' },
//             { fullName: "Demo2", email: 'mailto:user1@gmail.com', password: '123' },
            
//           ].map((user) => (
//             <tr key={user.fullName}>
//               <td>{user.fullName}</td>
           
             
//               <td>{user.email}</td>
              
//               <td className=''>{user.password}</td>
          
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
//   )
// }

// export default Exusestat
import React, { useState } from 'react';
import './Exusestat.css'

const UserTable = () => {
  // Initialize state with some sample user data
  const [users, setUsers] = useState([
    { fullname: 'Demo1', email: 'mailto:user1@gmail.com', password: '123' },
    { fullname: 'Demo2', email: 'mailto:user2@gmail.com', password: '4546' },
    { fullname: 'Demo3', email: 'mailto:user3@gmail.com', password: '789' }
  ]);

  // Function to handle adding a new user (for demonstration)
  
  return (
    <div>
      <h1>User Table</h1>
     
      <table className='usestate' border="1" >
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
