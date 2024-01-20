// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/uWRPtZjeKh8
//  */
// import {  Avatar } from "@/components/ui/avatar"
// // import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
// // import { Badge } from "@/components/ui/badge"
// // import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <Card className="w-[350px] bg-white rounded-lg shadow-md p-4">
//       <CardHeader className="flex items-start justify-between">
//         <div className="flex items-center space-x-2">
//           <Avatar>
//             <AvatarImage alt="Codeium logo" src="/placeholder.svg?height=40&width=40" />
//           </Avatar>
//           <div>
//             <CardTitle className="text-lg font-semibold">Codeium</CardTitle>
//             <div className="flex items-center">
//               <StarIcon className="text-yellow-400" />
//               <StarIcon className="text-yellow-400" />
//               <StarIcon className="text-yellow-400" />
//               <StarIcon className="text-yellow-400" />
//               <StarIcon className="text-yellow-400" />
//               <span className="ml-1 text-sm text-gray-500">(10)</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-1">
//           <span className="font-semibold text-blue-600">Free</span>
//           <TrendingUpIcon className="text-gray-500" />
//           <span className="text-gray-500">3056</span>
//         </div>
//       </CardHeader>
//       <CardContent className="mt-4">
//         <p className="text-sm text-gray-600">AI-powered code acceleration toolkit to code smarter, not harder.</p>
//         <div className="mt-2">
//           <Badge variant="secondary">#code assistant</Badge>
//         </div>
//       </CardContent>
//       <CardFooter className="flex justify-end mt-4">
//         <Button className="flex items-center space-x-1" variant="outline">
//           <span>Visit</span>
//           <ExternalLinkIcon className="text-blue-600" />
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

// function ExternalLinkIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//       <polyline points="15 3 21 3 21 9" />
//       <line x1="10" x2="21" y1="14" y2="3" />
//     </svg>
//   )
// }


// function StarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   )
// }


// function TrendingUpIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//       <polyline points="16 7 22 7 22 13" />
//     </svg>
//   )
// }
