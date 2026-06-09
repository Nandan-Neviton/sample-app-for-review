function validateTodo(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required"
    });
  }

  if (typeof title !== "string") {
    return res.status(400).json({
      success: false,
      message: "Title must be a string"
    });
  }

  if (title.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: "Title cannot be empty"
    });
  }

  if (title.length > 100) {
    return res.status(400).json({
      success: false,
      message: "Title cannot exceed 100 characters"
    });
  }

  next();
}

module.exports = validateTodo;
//
//breakthrough envision done by me
// this is test on new branch
// to check if the works in the 
// dashboard or not.
// test
// test
//test 
//t e s t

//   if (typeof title !== "string") {
//     return res.status(400).json({
//       success: false,
//       message: "Title must be a string"
//     });
//   }

//   if (title.trim().length === 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot be empty"
//     });
//   }

//   if (title.length > 100) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot exceed 100 characters"
//     });
//   }

//   next();
// }

// module.exports = validateTodo;
// //
// //breakthrough envision done by me
// // this is test on new branch
// // to check if the works in the 
// // dashboard or not.
// // test
// // test
// //test 
//   if (typeof title !== "string") {
//     return res.status(400).json({
//       success: false,
//       message: "Title must be a string"
//     });
//   }

//   if (title.trim().length === 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot be empty"
//     });
//   }

//   if (title.length > 100) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot exceed 100 characters"
//     });
//   }

//   next();
// }

// module.exports = validateTodo;
// //
// //breakthrough envision done by me
// // this is test on new branch
// // to check if the works in the 
// // dashboard or not.
// // test
// // test
// //test 
//   if (typeof title !== "string") {
//     return res.status(400).json({
//       success: false,
//       message: "Title must be a string"
//     });
//   }

//   if (title.trim().length === 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot be empty"
//     });
//   }

//   if (title.length > 100) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot exceed 100 characters"
//     });
//   }

//   next();
// }

// module.exports = validateTodo;
// //
// //breakthrough envision done by me
// // this is test on new branch
// // to check if the works in the 
// // dashboard or not.
// // test
// // test
// //test 
//   if (typeof title !== "string") {
//     return res.status(400).json({
//       success: false,
//       message: "Title must be a string"
//     });
//   }

//   if (title.trim().length === 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot be empty"
//     });
//   }

//   if (title.length > 100) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot exceed 100 characters"
//     });
//   }

//   next();
// }

// module.exports = validateTodo;
// //
// //breakthrough envision done by me
// // this is test on new branch
// // to check if the works in the 
// // dashboard or not.
// // test
// // test
// //test 
//   if (typeof title !== "string") {
//     return res.status(400).json({
//       success: false,
//       message: "Title must be a string"
//     });
//   }

//   if (title.trim().length === 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot be empty"
//     });
//   }

//   if (title.length > 100) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot exceed 100 characters"
//     });
//   }

//   next();
// }

// module.exports = validateTodo;
// //
// //breakthrough envision done by me
// // this is test on new branch
// // to check if the works in the 
// // dashboard or not.
// // test
// // test
// //test 
//   if (typeof title !== "string") {
//     return res.status(400).json({
//       success: false,
//       message: "Title must be a string"
//     });
//   }

//   if (title.trim().length === 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot be empty"
//     });
//   }

//   if (title.length > 100) {
//     return res.status(400).json({
//       success: false,
//       message: "Title cannot exceed 100 characters"
//     });
//   }

//   next();
// }

// module.exports = validateTodo;
// //
// //breakthrough envision done by me
// // this is test on new branch
// // to check if the works in the 
// // dashboard or not.
// // test
// // test
// //test 