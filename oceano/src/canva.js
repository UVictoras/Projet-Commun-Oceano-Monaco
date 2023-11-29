
// function Play(props){
//   return<div>
//     <html>
//       <head>
//         <meta charset="UTF-8" />
//         <meta content="width=device-width,initial-scale=1.0" name="viewport" />
//       <style>
//         .canvas-container {
//           width: 100vw;
//           height: 100dvh;
//           align-items: center;
//           display: flex;
//           justify-content: center;
//           position: relative;
//         }
//       </style>
//       </head>
    
//       <body>
//         <div class="canvas-container">
//           <canvas
//             id="display-canvas"
//             oncontextmenu="event.preventDefault()"
//           ></canvas>
//         </div>
        
//         <script src="https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse.js"></script>
    
//         <script type="module">
//           async function InitApp() {
//             await SDK3DVerse.joinOrStartSession({
//               userToken: "public_RMKn_AQskeSYIngV",
//               sceneUUID: "25174276-7390-4710-a75e-a0a0950bcfc3",
//               canvas: document.getElementById("display-canvas"),
//               viewportProperties: {
//                 defaultControllerType: SDK3DVerse.controller_type.orbit,
//               },
//             })
//           }
//           window.addEventListener("load", InitApp);
//         </script>
//       </body>
//     </html>
//   </div>
// }
// export default Play