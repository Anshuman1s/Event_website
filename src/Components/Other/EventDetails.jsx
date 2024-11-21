import React, { useState, useEffect } from "react";

const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block">
      <button
        className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-md shadow hover:scale-105 transition-transform"
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-200 rounded-md mt-1 shadow-lg w-full z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Spinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="spinner border-4 border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
  </div>
);

const AddCardModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("Upcoming");
  const [img, setImg] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ id: Date.now(), name, tag, img, color: "bg-white" });
    setName("");
    setTag("Upcoming");
    setImg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90vw] max-w-sm">
        <h2 className="text-lg font-bold mb-4">Add New Card</h2>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Event Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Tag</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Recent">Recent</option>
            <option value="Past">Past</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const EventDetails = () => {
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([
    { id: 1, tag: "Upcoming", color: "bg-white", img: "https://images.pexels.com/photos/814133/pexels-photo-814133.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Chess" },
    { id: 2, tag: "Recent", color: "bg-white", img: "https://img.freepik.com/premium-photo/confetti-fireworks-crowd-music-festival_989072-16.jpg?semt=ais_hybrid", name: "Concert" },
    { id: 3, tag: "Past", color: "bg-white", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifuBbwRggmxRHLyAHgqeSl8Ba4AYsXRRPOQ&s", name: "Hackathon" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCards = filter === "All" ? cards : cards.filter((card) => card.tag === filter);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [filter]);

  const handleAddCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div className="h-screen p-[0.1px]">
      <div className="navbar h-[5vw] w-full flex items-center justify-center text-2xl font-medium font-[Saira] text-black">
        <h1 className="text-center">Event Details</h1>
      </div>
      <div className="p-5 flex justify-between items-center">
        <Dropdown
          title={filter === "All" ? "FILTER" : filter}
          options={["All", "Upcoming", "Recent", "Past"]}
          onSelect={(value) => setFilter(value)}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          + Add Card
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-5">
        {isLoading ? (
          <Spinner />
        ) : (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className={`w-[20vw] h-[20vw] card-shadow hover-scale ${card.color}`}
            >
              <div className="w-[10vw] h-[8vw] rounded mx-auto mt-5 overflow-hidden">
                <img className="w-full h-full object-cover" src={card.img} alt={card.name} />
              </div>
              <h1 className="font-medium font-[Poppins] text-center mt-3">{card.name}</h1>
              <p className="text-[10px] font-medium font-[Saira] text-center mt-2">
                Tag: {card.tag}
              </p>
              <div className="flex items-center justify-center gap-2 mt-8">
                {card.tag === "Upcoming" ? (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
                    Register
                  </button>
                ) : (
                  <button className="bg-red-500 text-white px-4 py-2 rounded cursor-not-allowed">
                    Registration Closed
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCard}
      />
    </div>
  );
};

export default EventDetails;
