// import React from 'react'

// const header = () => {
//   return (
//   <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-black p-8 text-white   "> 


//  <nav class="flex justify-between items-center px-6 py-4">
//         <div class="bg-gradient-to-r from-cyan-400 to-blue-600 bg-[length:200%_auto] 
//            animate-[shimmer_3s_infinite] bg-clip-text text-transparent text-4xl font-bold">HYY GUYS </div>

         
       
//         <ul class="flex gap-16 space-x-4  ">
//             <li class="hover:text-red-900 hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">Home</li>
//             <li class="hover:text-red-900  hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">About</li>
//             <li class="hover:text-red-900  hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">Contact</li>
//             <li class="hover:text-red-900  hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">Help</li>
           
//         </ul>
      
//     </nav>
    
//     <div class="h-1 w-full bg-white shadow-[0_0_15px_5px_#3b82f6] box-border">
//     <div class="absolute top-0 left-0 w-full h-full shadow-[0_4px_10px_2px_#3b82f6]"></div>
// </div>
   
    
//   </div>
  
//   )
// }

// export default header
import React from "react";

const header = () => {
    return (
        <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-black p-8 text-white">
            <nav className="flex justify-between items-center px-6 py-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-[length:200%_auto] animate-[shimmer_3s_infinite] bg-clip-text text-transparent text-4xl font-bold">
                    HYY GUYS
                </div>

                <ul className="flex gap-6 space-x-4">
                    <li className="hover:text-red-900 hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">
                        Home
                    </li>
                    <li className="hover:text-red-900 hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">
                        About
                    </li>
                    <li className="hover:text-red-900 hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">
                        Services
                    </li>
                    <li className="hover:text-red-900 hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">
                        Contact
                    </li>
                    <li className="hover:text-red-900 hover:shadow-red-900 shadow-md cursor-pointer animate-bounce p-4 bg-gray-400 rounded-lg">
                        Help
                    </li>
                </ul>
            </nav>

            {/* Fixed Glowing Line */}
            <div className="relative w-full">
                <div className="h-1 w-full bg-white shadow-[0_0_15px_5px_#3b82f6] box-border contrast-25"></div>
                <div className="absolute top-0 left-0 w-full h-full shadow-[0_4px_10px_2px_#3b82f6]"></div>
            </div>
        </div>
    );
};

export default header;
