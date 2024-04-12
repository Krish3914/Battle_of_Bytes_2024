import { useEffect } from "react";
import FilledButton from "../components/FilledButton";

const Tickets = () => {
  useEffect(() => {
    window.document.title = "Tickets | KARMA'24";
    window.scrollTo(0, 0);
  }, []);

  const ticketOptions = [
  {
    id: 1,
    score: 200,
    title: "Tech Troopers",
    price: "Mentor: Mr. Vikas Sangwan",
    description: ["Early bird tickets for the first 100 participants"],
    bg: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  {
    id: 2,
    score: 150,
    title: "Javascript Titans",
    price: "Mentor: Mr. PK Sharma",
    description: [
      "Regular tickets for the next 100 participants",
      "Regular tickets for the next 100 participants",
    ],
    bg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fmusic-people-night-eiffel-tower-crowd-concert-audience-romantic-stage-performance-crowded-visitor-rock-concert-musical-theatre-858401.jpg&f=1&nofb=1&ipt=9df7194a64946c087e2e3163b0fb17afb2d1059a8b6e1f8dd664ddbd205ae4c0&ipo=images",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  {
    id: 3,
    score: 100,
    title: "Logic Legends",
    price: "Mentor: Mr. Puneet Sharma",
    description: ["Late bird tickets for the last 100 participants"],
    bg: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  {
    id: 4,
    score: 200, // Repeated item with same score as the first one
    title: "Tech Troopers",
    price: "Mentor: Mr. Vikas Sangwan",
    description: ["Early bird tickets for the first 100 participants"],
    bg: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  {
    id: 5,
    score: 200,
    title: "Tech Troopers",
    price: "Mentor: Mr. Vikas Sangwan",
    description: ["Early bird tickets for the first 100 participants"],
    bg: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  {
    id: 6,
    score: 150,
    title: "Javascript Titans",
    price: "Mentor: Mr. PK Sharma",
    description: [
      "Regular tickets for the next 100 participants",
      "Regular tickets for the next 100 participants",
    ],
    bg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fmusic-people-night-eiffel-tower-crowd-concert-audience-romantic-stage-performance-crowded-visitor-rock-concert-musical-theatre-858401.jpg&f=1&nofb=1&ipt=9df7194a64946c087e2e3163b0fb17afb2d1059a8b6e1f8dd664ddbd205ae4c0&ipo=images",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  {
    id: 7,
    score: 100,
    title: "Logic Legends",
    price: "Mentor: Mr. Puneet Sharma",
    description: ["Late bird tickets for the last 100 participants"],
    bg: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  {
    id: 8,
    score: 200, // Repeated item with same score as the first one
    title: "Tech Troopers",
    price: "Mentor: Mr. Vikas Sangwan",
    description: ["Early bird tickets for the first 100 participants"],
    bg: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  // ... repeat logic for remaining items (Javascript Titans and Logic Legends) with appropriate scores

  // Note: You might want to consider assigning unique scores (no duplicates) 
  // for a more informative ordering.
]
;

  return (
    <div className="container mx-auto max-w-screen-xl">
      
      <h1  className="text-karma-blue font-bold font-retroTeam text-5xl sm:text-7xl">Leaderboard</h1>
      <div className="grid grid-cols-1  gap-8 justify-center items-center py-20 lg:py-44 px-8">
        {ticketOptions.map((option, index) => (
          <div
            key={index}
            className={`grdient-shadow-box relative p-8 rounded-sm flex flex-col justify-between text-center h-80 border border-gray-600 -skew-x-6 ${
              index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
            style={{
              // backgroundImage: `url(${option.bg})`,
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${option.bg}) no-repeat center center/cover`,
              backgroundSize: "cover",
            }}
          >
            {/* <div className="flex justify-between items-center"> */}
            <h2 className="text-5xl font-bold font-retroTeam">{option.title}</h2>
            <p className="text-5xl font-bold font-retroTeam text-karma-green">
              {option.price}
            </p>
            {/* </div> */}
            {/* <ul className="text-left mt-4 list-disc">
              {option.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul> */}
            {/* <button className="bg-primary text-white py-2 rounded-md">Buy Now</button> */}
            <FilledButton
              text={option.id}
              className="mt-4"
              onClick={() => window.open(option.paymentUrl)}
            />
            <FilledButton
              text={`Score: ${option.score}`}
              className="mt-4"
              onClick={() => window.open(option.paymentUrl)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tickets;
